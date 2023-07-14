import React from 'react';
import PropTypes from 'prop-types';
const FilterIcon = ({ color = 'black' }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3625_23125)">
        <path
          d="M17.4321 2.25H2.43213L8.43213 9.345V14.25L11.4321 15.75V9.345L17.4321 2.25Z"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3625_23125">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.931641)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

FilterIcon.propTypes = {
  color: PropTypes.string,
};

export default FilterIcon;
