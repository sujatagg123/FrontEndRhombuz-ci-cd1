import React from 'react';
import PropTypes from 'prop-types';
import {
  ComponentTitle,
  ComponentWrapper,
  Result,
  ResultsContainer,
  Value,
} from './index.sc';

const RecentSearch = ({ results = [] }) => {
  // const limitedResults = results.slice(0, maxLimit);
  return (
    <ComponentWrapper>
      <ComponentTitle>Recent: </ComponentTitle>
      <ResultsContainer>
        {results.map((result, i) => {
          const { query } = result;
          return (
            <Result key={i}>
              <Value>{query}</Value>
            </Result>
          );
        })}
        {/* {results.length > maxLimit && (
          <Result>
            <Value>+{results.length - maxLimit}</Value>
          </Result>
        )} */}
      </ResultsContainer>
    </ComponentWrapper>
  );
};

export default RecentSearch;

RecentSearch.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  maxLimit: PropTypes.number,
};
