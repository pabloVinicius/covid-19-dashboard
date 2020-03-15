/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty-pattern */
import React, { useState, useContext, useEffect } from 'react';
import Switch from 'react-switch';
import { format, parseISO } from 'date-fns';
import { ThemeContext } from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import useSWR from 'swr';

import api from '~/services/api';
import AppContext from '~/util/AppContext';

import {
  Container,
  TopBar,
  Link,
  Numbers,
  Content,
  Header,
  Footer,
  FooterLine,
  LastUpdated,
} from './styles';

const fetcher = url => api.get(url);

const Layout = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const { colors } = useContext(ThemeContext);
  const { setCountriesData } = useContext(AppContext);

  const { data: generalData } = useSWR('/', fetcher, {
    suspense: true,
  });

  const { data: casesData } = useSWR('/confirmed', fetcher, {
    suspense: true,
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (casesData?.data) {
      const formatedCountries = {
        biggestValue: 0,
        lowestValue: casesData.data[0].confirmed,
      };
      casesData?.data.forEach(el => {
        const conditionValue = formatedCountries[el.iso3];
        if (conditionValue) {
          const {
            confirmed,
            recovered,
            deaths,
            active,
            lastUpdate,
            ...rest
          } = conditionValue;
          const newValue = {
            ...rest,
            confirmed: confirmed + el.confirmed,
            deaths: deaths + el.deaths,
            active: active + el.active,
            lastUpdate: lastUpdate > el.lastUpdate ? lastUpdate : el.lastUpdate,
            recovered: recovered + el.recovered,
          };

          formatedCountries[el.iso3] = newValue;
        } else {
          formatedCountries[el.iso3] = el;
        }

        if (el.confirmed > formatedCountries.biggestValue) {
          formatedCountries.biggestValue = el.confirmed;
        }

        if (el.confirmed < formatedCountries.lowestValue) {
          formatedCountries.lowestValue = el.confirmed;
        }
      });
      setCountriesData(formatedCountries);
    }
  }, [casesData, setCountriesData]);

  return (
    <Container>
      <Header>
        <TopBar>
          <div>
            <Link selected to="/">
              World stats
            </Link>
            <Link to="/">Daily evolution</Link>
          </div>
          <div>
            Light
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              className="switcher"
              onChange={value => setChecked(value)}
              checked={checked}
              onColor="#777777"
              offColor="#e8e8e8"
            />
            Dark
          </div>
        </TopBar>
        <h1>COVID-19 Information Tracker</h1>
        <Numbers>
          <div>
            <h3>{generalData?.data?.confirmed?.value || ''}</h3>
            <small>Confirmed</small>
          </div>
          <div>
            <h3>{generalData?.data?.recovered?.value || ''}</h3>
            <small>Recovered</small>
          </div>
          <div>
            <h3>{generalData?.data?.deaths?.value || ''}</h3>
            <small>Deaths</small>
          </div>
        </Numbers>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <LastUpdated>
          Last update:{' '}
          {format(
            parseISO(generalData?.data?.lastUpdate || new Date()),
            'dd/MM/yyyy'
          )}
        </LastUpdated>
        <FooterLine>
          <p>Developed by Pablo Cruz</p>
          <a
            href="https://www.linkedin.com/in/pablo-cruz-17901a177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={24} color={colors.primary} />
          </a>
          <a
            href="https://github.com/pabloVinicius/covid-19-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub size={20} color={colors.primary} />
          </a>
        </FooterLine>
      </Footer>
    </Container>
  );
};

export default Layout;
