import React, { memo, useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { scaleLog } from 'd3-scale';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';

import AppContext from '~/util/AppContext';
import useMobileWatcher from '~/util/useMobileWatcher';

import { Tip, Container, CountryStats } from './styles';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = ({ setTooltipContent }) => {
  const { countriesData, language } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);
  const isMobile = useMobileWatcher();

  const colorScale = useMemo(() => {
    const { lowestValue = 0, biggestValue = 0 } = countriesData;
    return scaleLog()
      .domain([lowestValue, biggestValue])
      .range(['#E6A6A6', '#E60000']);
  }, [countriesData]);

  const { t } = useTranslation();

  return (
    <Container>
      <ComposableMap
        data-tip=""
        width={isMobile ? 450 : 600}
        height={215}
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 80,
        }}
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = countriesData[geo.properties.ISO_A3];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d.confirmed) : '#D6D6DA'}
                  onMouseEnter={() => {
                    const { NAME, ISO_A3 } = geo.properties;
                    const country = countriesData[ISO_A3];
                    const {
                      confirmed = 0,
                      deaths = 0,
                      recovered = 0,
                      lastUpdate,
                    } = country || {};
                    setTooltipContent(
                      <CountryStats>
                        <h5>{t('contries:' + NAME)}</h5>
                        <p>{t('confirmed')}: {confirmed}</p>
                        <p>{t('recovered')}: {recovered}</p>
                        <p>{t('deaths')}: {deaths}</p>
                        <p>
                          {t('last update')}:{' '}
                          {lastUpdate !== undefined
                            ? format(new Date(lastUpdate), language === 'en' ? 'MM/dd/yyyy' : 'dd/MM/yyyy')
                            : '-'}
                        </p>
                      </CountryStats>
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    hover: {
                      stroke: colors.mapStroke,
                      strokeWidth: 0.7,
                      outline: 'none',
                    },
                    pressed: {
                      stroke: colors.mapStroke,
                      strokeWidth: 1,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <Tip>
        {isMobile ? t('click for country stats') : t('hover for country stats')}
      </Tip>
    </Container>
  );
};

export default memo(MapChart);
