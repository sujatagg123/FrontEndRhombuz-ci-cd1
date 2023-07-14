import styled from 'styled-components';

export const ItemBoxwpr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1.1rem;
  transition: 0.2s ease-in-out;
  width: 10.75rem;
  border-radius: 10px;
  height: 8rem;
  aspect-ratio: 1/0.93;
  background: ${({ checked, theme }) =>
    checked ? theme.primary : theme.secondaryBackground};
  margin-bottom: 0.5rem;
  border: ${({ checked, theme }) =>
    checked ? `3px solid ${theme.primary}` : '1px solid #999999'};
  & .writeicon {
    display: ${({ checked }) => (checked ? 'flex' : 'none')};
  }
  & > div > svg > path {
    stroke: ${({ checked, theme }) => (checked ? theme.text : '#999999')};
  }
  &:hover {
    border: ${({ checked, theme }) =>
      checked ? '' : `3px solid ${theme.primary}`};
    & .writeicon {
      display: ${({ checked }) => (checked ? '' : 'flex')};
    }
    & > div > svg > path {
      stroke: ${({ checked }) => (checked ? '' : '#999999')};
    }
  }
  & > div {
    color: ${({ checked, theme }) => (checked ? theme.text : '')};
  }
  > div > span {
    color: ${({ checked, theme }) => (checked ? theme.text : '')};
  }
  position: relative;
  cursor: pointer;
`;

export const ItemTypeBoxwpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const WriteIconwpr = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
`;
