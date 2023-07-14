import React from 'react';
import Proptypes from 'prop-types';

const X = ({ color = 'black', size }) => {
  return (
    <svg
      width={size}
      height={size - 1}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1602 6L6.16016 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.16016 6L18.1602 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

X.propTypes = {
  color: Proptypes.string,
  size: Proptypes.number,
};

export default X;
