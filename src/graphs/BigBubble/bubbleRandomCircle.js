import * as d3 from 'd3';
import { initialValues } from '../utils/graphConst';
import { setUpEvents } from '../utils/graphEvents';

function generateRandomBubble(
  radius,
  width,
  height,
  existingBubbles,
  maxAttempts = 100
) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    // Generate random coordinates for the bubble's center
    const bubbleX = Math.random() * (width - 2 * radius) + radius * 2;
    const bubbleY = Math.random() * (height - 2 * radius) + radius * 2;

    // Check for collisions with existing bubbles
    let collision = false;
    for (let i = 0; i < existingBubbles.length; i++) {
      const bubble = existingBubbles[i];
      const bubbleXExisting = bubble[0];
      const bubbleYExisting = bubble[1];
      const bubbleRadiusExisting = bubble[2];

      const distance = Math.sqrt(
        Math.pow(bubbleX - bubbleXExisting, 2) +
          Math.pow(bubbleY - bubbleYExisting, 2)
      );
      if (distance <= radius + bubbleRadiusExisting) {
        collision = true;
        break;
      }
    }

    if (!collision) {
      // No collision, create a new bubble array
      const newBubble = [bubbleX, bubbleY, radius];
      return newBubble;
    }
  }

  // Max attempts reached, return null
  return null;
}

const randomBubble = (data, config) => {
  const { graphAreaW, graphAreaH } = config;
  const existingBubbles = [];
  // Generate 10 random bubbles with a radius of 5, inside a 100x100 area
  for (let i = 0; i < data.length; i++) {
    const newBubble = generateRandomBubble(
      data[i].r,
      graphAreaW,
      graphAreaH,
      existingBubbles
    );
    data[i].x =
      newBubble[0] > config.graphAreaL
        ? newBubble[0] - config.graphAreaL
        : newBubble[0];
    data[i].y = newBubble[1];
    data[i].r = newBubble[2];
    existingBubbles.push(newBubble);
  }

  return data;
};

export const bubbleRandomCircle = function bubbleRandomCircle() {
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
      const dataSet = { children: [] };
      data.forEach((element, i) => {
        dataSet.children.push({ children: element });
      });

      const packLayout = d3
        .pack()
        .size([config.graphAreaW, config.graphAreaH])
        .padding(d3.randomInt(5, 20));

      const rootNode = d3.hierarchy(dataSet).sum(function (d) {
        return d.value;
      });

      packLayout(rootNode);
      const nodes = rootNode.descendants().filter((obj) => !obj.children);

      selected
        .selectAll('circle')
        .data(randomBubble(nodes, config))
        .join(
          (enter) =>
            enter
              .append('circle')
              .attr('class', (d) =>
                d.children ? 'bubble-circle-parent' : 'bubble-circle'
              )
              .style('fill', (d, i) => d.data.color)
              .style('opacity', config.opacity || '0.8')
              .style('stroke', 'white')
              .attr('data-depth', (d) => d.depth)
              .attr('cx', function (d) {
                return d.x;
              })
              .attr('cy', function (d) {
                return d.y;
              })
              .attr('r', 0)
              .transition(t)
              .attr('r', function (d) {
                return d.r;
              }),
          (update) =>
            update
              .transition(t)
              .style('fill', (d, i) => d.data?.color || 'red')
              .style('opacity', config.opacity || '0.8')
              .style('stroke', 'white')
              .attr('cx', function (d) {
                return d.x;
              })
              .attr('cy', function (d) {
                return d.y;
              })
              .attr('r', function (d) {
                return d.r;
              }),
          (exit) => {
            exit.transition(t).attr('r', 0).remove();
          }
        );

      setUpEvents(config, selected, 'bubble-circle');
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
