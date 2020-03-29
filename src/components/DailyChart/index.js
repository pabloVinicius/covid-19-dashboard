import React, { useContext } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Container, Wrapper, Tip, Scroller } from './styles';
import AppContext from '~/util/AppContext';
import useMobileWatcher from '~/util/useMobileWatcher';

const MyResponsiveLine = () => {
  const { dailyData } = useContext(AppContext);
  const {
    colors: { recovered, confirmed, primary },
  } = useContext(ThemeContext);

  const isMobile = useMobileWatcher();
  const { t } = useTranslation();

  const legends = [
    {
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      itemTextColor: primary,
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [
        {
          on: 'hover',
          style: {
            itemBackground: 'rgba(0, 0, 0, .03)',
            itemOpacity: 1,
          },
        },
      ],
    },
  ];

  const splitNumber = Math.floor((dailyData[0]?.data || []).length / 10);
  return (
    <Wrapper>
      <Scroller>
        <Container>
          <ResponsiveLine
            data={dailyData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'time', format: '%m/%d/%Y', precision: 'day' }}
            xFormat="time:%Y/%m/%d"
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: false,
            }}
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              format: '%b %d',
              tickValues: `every ${splitNumber} days`,
              tickRotation: 0,
              legend: 'Date',
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Count',
              legendOffset: -50,
              legendPosition: 'middle',
            }}
            colors={[confirmed, recovered]}
            pointSize={isMobile ? 4 : 10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh
            theme={{
              crosshair: {
                line: {
                  stroke: primary,
                },
              },
              axis: {
                legend: {
                  text: {
                    fill: primary,
                  },
                },
                ticks: {
                  text: {
                    fill: primary,
                  },
                },
              },
            }}
            legends={legends}
          />
        </Container>
      </Scroller>
      {isMobile ? (
        <Tip>{t('swipe horizontally to see data')}</Tip>
      ) : (
        <Tip>{t('hover for details')}</Tip>
      )}
    </Wrapper>
  );
};

export default MyResponsiveLine;
