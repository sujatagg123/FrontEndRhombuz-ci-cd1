import * as d3 from 'd3';
import { initialValues } from '../utils/graphConst'; // colorBox,
import { setUpEvents } from '../utils/graphEvents';
import usMapData from './usMapData.json';

export const usMap = function usMap() {
  let config = {
    ...initialValues,
  };

  function graph(selected) {
    selected.each(function (data) {
      usMapData.features.forEach((feature) => {
        const matchingData = data.find(
          (item) => item.label === feature.properties.STATE
        );
        if (matchingData) {
          feature.properties.value = matchingData.value;
        }
      });

      const projection = d3
        .geoAlbersUsa()
        .fitSize([config.width, config.height], usMapData);

      const pathGenerator = d3.geoPath().projection(projection);

      const sampleMap = usMapData.features.map((item) => {
        return Number(item.properties.value);
      });

      const colorScale = d3
        .scaleQuantile()
        .domain(sampleMap) // pass the whole dataset to a scaleQuantile’s domain
        .range(config.color);

      selected
        .selectAll('path')
        .data(usMapData.features)
        .join('path')
        .attr('d', (d) => pathGenerator(d))
        .style('fill', function (d, i) {
          const uRate = d.properties.value;
          return uRate ? colorScale(uRate) : config.defaultColor;
        })
        .style('stroke', config.stroke);

      setUpEvents(config, selected, 'usmap-path');
    });

    return selected;
  }

  graph.config = function graphConfig(val) {
    if (!arguments.length) {
      return config;
    }
    config = Object.assign(config, val);
    return graph;
  };

  return graph;
};
