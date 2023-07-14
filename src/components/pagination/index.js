import React from 'react';
import {
  Iconwpr,
  NextButton,
  NumButton,
  PaginationWrapper,
  PrevButton,
  Showtxt,
} from './index.sc';
import PropTypes from 'prop-types';
import ArrowLeft from '../../assets/icons/ArrowLeft';

const Pagination = ({
  page,
  prevClick,
  handlePage,
  nextClick,
  total,
  align,
  limit,
}) => {
  const pageSize =
    total % limit === 0 ? total / limit : Math.floor(total / limit) + 1;
  const end =
    (page + 1) * limit < pageSize * limit ? (page + 1) * limit : total;
  return (
    <PaginationWrapper>
      {false && (
        <Showtxt>
          Showing{' '}
          <span>
            {page * limit + 1}-{end}
          </span>
        </Showtxt>
      )}
      <div className="page-input">
        <PrevButton
          disabled={page === 0}
          onClick={() => {
            if (page !== 0) prevClick(page - 1);
          }}
          className="pageText prev"
        >
          <Iconwpr rotate="180">
            {' '}
            <ArrowLeft />
          </Iconwpr>{' '}
          Prev{' '}
        </PrevButton>
        {/* <input
          type="number"
          value={page}
          onChange={updateGoToPage}
          class="pagination-current-page"
        /> */}
        <NumButton currpage={page + 1 === 1} onClick={() => handlePage(0)}>
          {1}
        </NumButton>
        {(((page + 2 === pageSize ||
          page === 1 ||
          page === pageSize - 1 ||
          page === 0) &&
          pageSize !== 2) ||
          pageSize === 3) && (
          <NumButton currpage={page + 1 === 2} onClick={() => handlePage(2)}>
            {2}
          </NumButton>
        )}
        {page > 1 && pageSize !== 3 && <NumButton>...</NumButton>}
        {page + 2 < pageSize &&
          pageSize !== 2 &&
          pageSize !== 3 &&
          page > 1 && (
            <NumButton
              currpage={page !== 0}
              onClick={() => handlePage(page === 0 ? 1 : page)}
            >
              {page === 0 ? 2 : page + 1}
            </NumButton>
          )}
        {page + 2 < pageSize && pageSize !== 3 && pageSize !== 4 && (
          <NumButton>...</NumButton>
        )}

        {(page + 2 === pageSize ||
          page === 1 ||
          page === pageSize - 1 ||
          page === 0) &&
          pageSize !== 2 &&
          pageSize !== 3 && (
            <NumButton
              currpage={pageSize - 2 === page}
              onClick={() => handlePage(pageSize - 2)}
            >
              {pageSize - 1}
            </NumButton>
          )}
        <NumButton
          currpage={pageSize - 1 === page}
          onClick={() => handlePage(pageSize - 1)}
        >
          {pageSize}
        </NumButton>
        <NextButton
          disabled={page + 1 === pageSize}
          onClick={() => {
            nextClick(page + 1);
          }}
          className="pageText next"
        >
          Next{' '}
          <Iconwpr>
            {' '}
            <ArrowLeft />
          </Iconwpr>
        </NextButton>
      </div>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  prevClick: PropTypes.func,
  nextClick: PropTypes.func,
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.string,
  handlePage: PropTypes.func,
  limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Pagination;
