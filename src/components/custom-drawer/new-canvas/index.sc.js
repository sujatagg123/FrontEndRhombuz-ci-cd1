import styled from 'styled-components';

export const Sublablewpr = styled.div`
  font-weight: 400;
  font-size: 0.7rem;
  color: #818181;
  margin-bottom: 0.25rem;
`;

export const InputLabelBox = styled.div`
  width: 100%;
`;

export const InputLabelwpr = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #d1d5dc;
  padding: 0.6rem 0.75rem;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Inputwpr = styled.input`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  color: #000000;
  border: none;
  outline: none;
  &::placeholder {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    color: #999999;
  }
`;

export const CavasTypewpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
  width: 100%;
  margin-bottom: -0.5rem;
`;

export const CanvasTypelabelwpr = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #000000;
`;

export const CanvasContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CanvasBoxwpr = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
  aspect-ratio: 1.5/1;
  width: 10.75rem;
  gap: 0.25rem;
  padding: 0.95rem 1.1rem;
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
  & div,
  > div > span {
    color: ${({ checked, theme }) => (checked ? theme.text : '')};
  }
  transition: 0.2s ease-in-out;
  position: relative;
`;

export const CanvasTitlewpr = styled.div`
  font-weight: 600;
  font-size: 0.83rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export const CanvasDescriptionwpr = styled.div`
  font-weight: 400;
  font-size: 0.6rem;
  color: #999999;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
`;

export const SubTitlewpr = styled.div`
  display: flex;
  align-items: end;
  flex: 1;
  font-weight: ${(props) => props.fontWeight};
  font-size: 0.83rem;
  color: ${({ theme }) => theme.secondaryText};
  & > span {
    font-size: 0.75rem;
    font-weight: 400;
    margin-left: 0.2rem;
    color: #999999;
  }
`;
