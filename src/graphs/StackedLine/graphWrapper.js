import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GraphContainer, GraphWrp } from '../../Components/styled-components';
import { actualOneD } from '../utils/mockData';
import ResizeHandlerHOC from '../utils/resizeHandlerHOC';
import StackedLineGraph from './stackedLine.graph';

const StackedLine = (props) => {
  const refElement = useRef(null);
  let graph;

  // useEffect hook - creates new d3 component whenever data changes
  useEffect(() => {
    if (props.data) {
      graph = graph || new StackedLineGraph(refElement.current);
      graph.setData(props.data || actualOneD);
      graph.setConfig({ ...props.config });
      graph.drawGraph();
    }
  }, [props.data, props.rerender, props.config]);

  return (
    <GraphContainer className="stacked-line graph-container">
      <GraphWrp className="graph-wrp" ref={refElement}></GraphWrp>
    </GraphContainer>
  );
};

StackedLine.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  rerender: PropTypes.bool,
};

export default ResizeHandlerHOC(StackedLine);
