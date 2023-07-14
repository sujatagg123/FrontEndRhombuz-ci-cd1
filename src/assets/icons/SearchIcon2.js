import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon2 = ({ color = 'black' }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18164 14.25C12.4953 14.25 15.1816 11.5637 15.1816 8.25C15.1816 4.93629 12.4953 2.25 9.18164 2.25C5.86793 2.25 3.18164 4.93629 3.18164 8.25C3.18164 11.5637 5.86793 14.25 9.18164 14.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6814 15.7498L13.4189 12.4873"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SearchIcon2.propTypes = {
  color: PropTypes.string,
};

export default SearchIcon2;
