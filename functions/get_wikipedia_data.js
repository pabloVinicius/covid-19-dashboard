/* eslint-disable no-console */
const cheerio = require('cheerio');
const axios = require('axios');

const url =
  'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Brazil#cite_note-107';

module.exports.handler = (event, context, callback) => {
  axios
    .get(url)
    .then(res => {
      const { data } = res;
      const $ = cheerio.load(data);

      const rows = $('table.wikitable > tbody > tr');
      const states = {};

      rows.each((_, row) => {
        try {
          const cheerioRow = $(row);
          const tds = cheerioRow.find('td');
          const cheerioTds = tds.map((i, el) => $(el));

          const stateName = cheerioTds[0].text().trim();
          const stateConfirmed = cheerioTds[1]
            .text()
            .trim()
            .match(/^\d+/)[0];
          const stateDeaths = cheerioTds[2].text().trim();

          states[stateName] = {
            confirmed: stateConfirmed,
            deaths: stateDeaths,
          };
        } catch (err) {
          // console.log('erro', err)
        }
      });

      const footerThs = rows
        .last()
        .children()
        .map((i, el) => $(el));

      const result = {
        confirmed: footerThs[1].text().trim(),
        deaths: footerThs[2].text().trim(),
        states,
      };

      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(result),
      });
    })
    .catch(err => {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(err),
      });
    });
};
