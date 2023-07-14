import * as d3 from 'd3';
import ColorParser from '../utils/colorParser';
import { initialValues } from '../utils/graphConst';
import { setUpEvents } from '../utils/graphEvents';

export const barRect = function barRect() {
  let config = {
    ...initialValues,
  };

  const t = d3
    .transition()
    .delay(function (d, i) {
      return i * 3;
    })
    .duration(config.duration);
  // draw the graph here
  function graph(selected) {
    selected.each(function (data) {
      const yWidth = config.yScale.bandwidth() - config.gutterSpace;
      selected
        .selectAll('.bar-group')
        .data(data)
        .join(
          (enter) => {
            enter.append('g').attr('class', 'bar-group');
          },
          (update) => update,
          (exit) => {
            exit.remove();
          }
        );

      selected
        .selectAll('.bar-group')
        .selectAll('rect')
        .data((d, i) => {
          d.map((entry) => {
            const temp = entry;
            temp.labelIndex = i;
            return temp;
          });
          return d;
        })
        .join(
          (enter) => {
            enter
              .append('rect')
              .attr('class', 'column-rect')
              .attr('data-gi', (d) => d.labelIndex)
              .style('fill', (d, i) =>
                d.color ? ColorParser(d.color) : '#000'
              )
              .attr('x', 0)
              .attr(
                'y',
                (d, i) =>
                  (config.graphType === 'group'
                    ? config.yScale(d.label) +
                      (d.labelIndex * yWidth) / data.length
                    : config.yScale(d.label)) +
                  config.gutterSpace / 2
              )
              .attr('height', (d) =>
                d.accValue === 0
                  ? 0
                  : config.graphType === 'group'
                  ? yWidth / data.length
                  : yWidth
              )
              .attr('width', 0)
              .transition(t)
              .attr('height', (d) =>
                d.accValue === 0
                  ? 0
                  : config.graphType === 'group'
                  ? yWidth / data.length
                  : yWidth
              )
              .attr(
                'y',
                (d, i) =>
                  (config.graphType === 'group'
                    ? config.yScale(d.label) +
                      (d.labelIndex * yWidth) / data.length
                    : config.yScale(d.label)) +
                  config.gutterSpace / 2
              )
              .attr('x', (d) =>
                config.graphType === 'group'
                  ? config.xScale(config.minX)
                  : config.xScale(parseFloat(d.accValue - d.value))
              )
              .attr('width', (d, i) => {
                const barHeight = config.xScale(parseFloat(d.value));
                return barHeight;
              });
          },
          (update) => update,
          (exit) => {
            exit.transition(t).attr('height', 0).attr('width', 0).remove();
          }
        )
        .transition(t)
        .attr('height', (d) =>
          d.accValue === 0
            ? 0
            : config.graphType === 'group'
            ? yWidth / data.length
            : yWidth
        )
        .attr(
          'y',
          (d, i) =>
            (config.graphType === 'group'
              ? config.yScale(d.label) + (d.labelIndex * yWidth) / data.length
              : config.yScale(d.label)) +
            config.gutterSpace / 2
        )
        .attr('x', (d) =>
          config.graphType === 'group'
            ? config.xScale(config.minX)
            : config.xScale(parseFloat(d.accValue - d.value))
        )
        .attr('width', (d, i) => {
          const barHeight = config.xScale(parseFloat(d.value));
          return barHeight;
        });
      setUpEvents(config, selected, 'column-rect');
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
