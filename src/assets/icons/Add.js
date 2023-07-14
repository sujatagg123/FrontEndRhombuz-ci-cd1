import React from 'react';
import Proptypes from 'prop-types';

const Add = ({ width = '50px', height = '50px' }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1098_21646)">
          <path
            d="M25.4937 16.7197V35.0596"
            stroke="#585858"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.3237 25.8896H34.6636"
            stroke="#585858"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1098_21646">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(15.4937 15.8896)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

Add.propTypes = {
  height: Proptypes.string,
  width: Proptypes.string,
};

export default Add;
