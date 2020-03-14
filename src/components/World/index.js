import React, { useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(['#ffedea', '#ff5233']);

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then(data => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap
      width={600}
      height={215}
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 80,
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d['2017']) : '#F5F4F6'}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default MapChart;
