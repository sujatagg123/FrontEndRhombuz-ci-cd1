import React from 'react';
import PropTypes from 'prop-types';

const DownloadIcon = ({ color = 'black' }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6816 11.25V14.25C16.6816 14.6478 16.5236 15.0294 16.2423 15.3107C15.961 15.592 15.5795 15.75 15.1816 15.75H4.68164C4.28382 15.75 3.90228 15.592 3.62098 15.3107C3.33968 15.0294 3.18164 14.6478 3.18164 14.25V11.25"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.18213 7.5L9.93213 11.25L13.6821 7.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.93164 11.25V2.25"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DownloadIcon.propTypes = {
  color: PropTypes.string,
};

export default DownloadIcon;
