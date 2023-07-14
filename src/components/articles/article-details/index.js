import React from 'react';
import PropTypes from 'prop-types';
import { ArticleDetailsL, ArticleDetailsWrp } from './index.sc';

const ArticleDetails = ({ start = 1, end = 50, total = 50 }) => {
  return (
    <ArticleDetailsWrp>
      <ArticleDetailsL>
        Showing <span>{`${start}-${end}`}</span> of <span>{total}</span>{' '}
        articles
      </ArticleDetailsL>
    </ArticleDetailsWrp>
  );
};

ArticleDetails.propTypes = {
  start: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleSearchChange: PropTypes.func,
  handleFilterChange: PropTypes.func,
  handleSort: PropTypes.func,
};

export default ArticleDetails;
