import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GraphContainer, GraphWrp } from '../../Components/styled-components';
import { actualOneD } from '../utils/mockData';
import ResizeHandlerHOC from '../utils/resizeHandlerHOC';

import ScatterPlotGraph from './scatterPlot.graph';

const ScatterPlot = (props) => {
  const refElement = useRef(null);
  let graph;

  // useEffect hook - creates new d3 component whenever data changes
  useEffect(() => {
    if (props.data) {
      graph = graph || new ScatterPlotGraph(refElement.current);
      graph.setData(props.data || actualOneD);
      graph.setConfig({ ...props.config });
      graph.drawGraph();
    }
  }, [props.data, props.rerender]);

  return (
    <GraphContainer className="scatter-plot graph-container">
      <GraphWrp className="graph-wrp" ref={refElement}></GraphWrp>
    </GraphContainer>
  );
};

ScatterPlot.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  rerender: PropTypes.bool,
};

export default ResizeHandlerHOC(ScatterPlot);
