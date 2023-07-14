import * as d3Cloud from 'd3-cloud';
import { initialValues } from '../utils/graphConst';
import { setUpEvents } from '../utils/graphEvents';

export const wordCloud = function wordCloud() {
  let config = {
    ...initialValues,
    rotate: false,
  };

  // draw the graph here
  function graph(selected) {
    selected.each(function (data) {
      function draw(wcdata) {
        console.log(wcdata, 'wcdata');

        function wcChange(eleRef) {
          eleRef
            .style('fill', function (d) {
              return d.color || '#69b3a2';
            })
            .style('font-size', function (d) {
              return d.size;
            })
            .attr('transform', function (d) {
              return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
            })
            .text(function (d) {
              return d.text;
            });
        }
        selected
          .selectAll('.word-cloud-text')
          .data(wcdata)
          .join(
            (enter) => {
              enter
                .append('text')
                .attr('class', 'word-cloud-text')
                .attr('text-anchor', 'middle')
                .call(wcChange);
            },
            (update) => update.call(wcChange),
            (exit) => {
              exit.remove();
            }
          );
      }

      const layout = d3Cloud()
        .size([config.width, config.height])
        .words(
          data.map(function (d) {
            return { ...d, text: d.label, size: d.value };
          })
        )
        .padding(5) // space between words
        .rotate(function () {
          return config.rotate ? ~~(Math.random() * 2) * 90 : 0;
        })
        .fontSize(function (d) {
          return d.size / (data.length / 12);
        }) // font size of words
        .on('end', draw);
      layout.start();

      setUpEvents(config, selected, 'radarArea');
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
