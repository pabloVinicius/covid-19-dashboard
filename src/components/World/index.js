import React, { useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(['#ffedea', '#ff5233']);

const rounded = num => {
  if (num > 1000000000) {
    return `${Math.round(num / 100000000) / 10}Bn`;
  }
  if (num > 1000000) {
    return `${Math.round(num / 100000) / 10}M`;
  }
  return `${Math.round(num / 100) / 10}K`;
};

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then(data => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap
      data-tip=""
      width={600}
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
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, POP_EST } = geo.properties;
                setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}
              style={{
                default: {
                  fill: '#D6D6DA',
                  outline: 'none',
                },
                hover: {
                  fill: '#F53',
                  outline: 'none',
                },
                pressed: {
                  fill: '#E42',
                  outline: 'none',
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
