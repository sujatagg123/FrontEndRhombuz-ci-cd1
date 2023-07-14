import React from 'react';
import Proptypes from 'prop-types';

const DownPolygon = ({ fill }) => {
  return (
    <>
      <svg
        width="8"
        height="7"
        viewBox="0 0 8 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Polygon 4"
          d="M4 6.69531L0.535898 0.695312L7.4641 0.695312L4 6.69531Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

DownPolygon.propTypes = {
  fill: Proptypes.string,
};

export default DownPolygon;
