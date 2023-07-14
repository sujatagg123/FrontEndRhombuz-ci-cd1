import React from 'react';
import { SentimentContainer } from './index.sc';
import PropTypes from 'prop-types';

const SentimentComponent = ({ sentiment }) => {
  return (
    <SentimentContainer>
      {/* <span>{icon}</span> */}
      <span>{sentiment}</span>
    </SentimentContainer>
  );
};

SentimentComponent.propTypes = {
  sentiment: PropTypes.string,
};

export default SentimentComponent;
