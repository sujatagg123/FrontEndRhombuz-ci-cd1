import React from 'react';
import { SentimentContainer } from './index.sc';
import PropTypes from 'prop-types';
import SmileIcon from '../../assets/icons/SmileIcon';

const SentimentComponent = ({ sentiment }) => {
  return (
    <SentimentContainer positive={sentiment === 'positive'}>
      {/* <span>{icon}</span> */}
      {sentiment === 'positive' && (
        <>
          {<SmileIcon />} <span>+ve</span>
        </>
      )}
    </SentimentContainer>
  );
};

SentimentComponent.propTypes = {
  sentiment: PropTypes.string,
};

export default SentimentComponent;
