import styled from 'styled-components';

export const BottomBarWrp = styled.div`
  display: flex;
  align-items: center;
  height: 4.4rem;
  padding: 0px 3.25rem;
  border: 1px solid #eceff5;
  background: #fff;
`;

export const SwichBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: ${({ width }) => width || '25%'};
  border: 1px solid #eceff5;
  border-width: 0 0 0 1px;
  height: 100%;
  justify-content: center;
  padding-left: 1.5rem;
  align-items: flex-start;
  & > div > div.iconpop {
    min-width: 2.5rem;
  }
`;

export const TimeBox = styled.div`
  display: flex;
  gap: 3.75rem;
  & > div {
    border: none;
    width: fit-content;
  }
  border: 1px solid #eceff5;
  border-width: 0 0 0 1px;
  height: 100%;
  width: 32%;
`;

export const Boldtxtwpr = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
`;

export const Lightwpr = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};
  font-weight: 600;
  font-size: 0.95rem;
  width: fit-content;
  opacity: ${(props) => (props.opacity ? '1' : '0.5')};
  cursor: pointer;
`;

export const Popbtnwpr = styled.div`
  border-radius: 3rem;
  cursor: pointer;
  background: rgba(46, 104, 255, 0.2);
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.7rem;
  width: fit-content;
  display: flex;
  align-items: center;
  & > span {
    display: flex;
    align-items: center;
  }

  position: relative;
`;

export const EmailBox = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem; /* Use max-width instead of width */
`;

export const EmailPop = styled.div`
  position: absolute;
  top: 1.75rem;
  right: -2px;
  z-index: 1000;
  padding: 1rem;
  background: ${({ theme }) => theme.secondaryBackground};
  display: flex;
  align-items: center;
  border: 1px solid #d1d5dc;
  box-shadow: 0px 8px 8px rgba(153, 153, 153, 0.3);
  max-height: 9.375rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 0.5rem;
`;

export const Inputwpr = styled.input`
  border: 1px solid #999999;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.secondaryText};
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 0.25rem;
  outline: none !important;
  width: 15rem;
`;
