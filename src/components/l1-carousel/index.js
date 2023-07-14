import React from 'react';
import Carousel from '../carousel';

import PropTypes from 'prop-types';

const L1Carousel = ({ slides }) => {
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
};

L1Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default L1Carousel;
