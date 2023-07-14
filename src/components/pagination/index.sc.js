import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  //pagination changes
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 1.5rem;
  width: 100%;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  margin-right: ${(props) => (props?.assetView ? '1rem' : '')};
  &.m-low {
    margin-top: 0.4rem;
  }
  .page-input {
    display: flex;
    align-items: center;
    .pageTextFaded {
      opacity: 0.5;
      margin-right: 1rem;
      padding: 0.25rem 1rem;
    }
    .pageText {
      padding: 0.25rem 0.5rem;
      background: #ffffff;
    }
    .pagination-current-page {
      text-align: center;
      width: 5rem;
      height: 32px;
      border: 1px solid #cdd3d3;
    }
    .total-pages {
      margin-left: 1rem;
      span {
        margin-right: 0.5rem;
      }
    }
  }
  .MuiTablePagination-displayedRows {
    display: none !important;
  }
  .MuiTablePagination-selectLabel {
    display: none !important;
  }
  .MuiInputBase-root {
    display: none !important;
  }
`;
export const NextButton = styled.button`
  border: 1px solid #cdd3d3;
  background: #ffffff;
  border: 1px solid #d1d5dc;
  //   &:hover {
  //     border: ${(props) => !props.disabled && '1px solid black'};
  //   }
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  gap: 0.25rem;
  cursor: pointer;
  border-width: 1px 1px 1px 0;
  border-radius: 0 8px 8px 0;
  & > div > svg {
    > path {
      stroke: ${(props) => (props.disabled ? 'rgba(0,0,0,0.2)' : '')};
    }
  }
`;
export const PrevButton = styled.button`
  border: 1px solid #C3C7D9;
  background: #ffffff;
//   &:hover {
//     border: ${(props) => !props.disabled && '1px solid black'};
//   }
  cursor:${(props) => (props.disabled ? 'none' : 'auto')}
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 2.25rem;
  cursor: pointer;
  border-radius: 8px 0 0 8px;
  & >div > svg {
    > path {
      stroke: ${(props) => (props.disabled ? 'rgba(0,0,0,0.2)' : '')};
    }
  }
`;

export const NumButton = styled.button`
  background: ${(props) => (props.currpage ? '#ECEFF3' : '#FFFFFF')};
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5dc;
  border-width: 1px 1px 1px 0;
  cursor: pointer;
`;

export const Showtxt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #585858;
  font-weight: 400;
  font-size: 12px;
  & > span {
    font-size: 12px;
    font-weight: 600;
    margin-left: 0.25rem;
    color: #000000;
  }
`;

export const Iconwpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin-bottom: ${({ rotate }) => (rotate ? '2px' : '0')};
  transform: rotate(${({ rotate }) => rotate}deg);
`;
