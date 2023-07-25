import React from 'react';
import PropTypes from 'prop-types';

export default function DropDownButton({ size, color }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.76172 6.10547L7.51172 9.85547L11.2617 6.10547"
        stroke={color}
        // stroke-width="1.5"
        // stroke-linecap="round"
        // stroke-linejoin="round"
      />
    </svg>
  );
}

DropDownButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
