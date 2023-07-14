import React from 'react';
import { GraphContainer, GraphWrp } from './index.sc';
import SlotDetails from '../../../../../components/search-result/slot-details';
import PropTypes from 'prop-types';

const GraphItem = ({ graph, split }) => {
  return (
    <GraphWrp>
      <GraphContainer>
        {split ? <div>Loading</div> : <SlotDetails widget={graph} />}
      </GraphContainer>
    </GraphWrp>
  );
};

GraphItem.propTypes = {
  graph: PropTypes.object.isRequired,
  split: PropTypes.bool,
};

export default GraphItem;
