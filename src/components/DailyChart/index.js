import React, { useContext } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import AppContext from '~/util/AppContext';

const MyResponsiveLine = () => {
  const { dailyData } = useContext(AppContext);
  const {
    colors: { recovered, confirmed, primary },
  } = useContext(ThemeContext);

  const splitNumber = Math.floor((dailyData[0]?.data || []).length / 10);
  return (
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
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh
        theme={{
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
        legends={[
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
        ]}
      />
    </Container>
  );
};

export default MyResponsiveLine;
