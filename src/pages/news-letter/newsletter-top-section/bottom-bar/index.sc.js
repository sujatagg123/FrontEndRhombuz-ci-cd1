import styled from 'styled-components';

export const BottomBarWrp = styled.div`
  display: inline-flex;
  height: 7.5rem;
  width: 100%;
  padding: 0rem 2.5rem;
  align-items: center;
  gap: 0.625rem;
  background: ${({ theme }) => theme.background};
  border-radius: 0rem 0rem 0.625rem 0.625rem;
  border-top: 1px solid ${({ theme }) => theme.shadow};
`;

export const VerticalLine = styled.div`
  width: 0.0625rem;
  height: 100%;
  background: ${({ theme }) => theme.shadow};
`;

export const SwichBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: ${({ width }) => width || '25%'};
  border-width: 0 0 0 1px;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  & > div > div.iconpop {
    min-width: 2.5rem;
  }
`;

export const SelectedWrp = styled.div`
  display: flex;
  width: fit-content;
  padding: 0.375rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.background};
  border-radius: 0.3125rem;
  border: 1px solid ${({ theme }) => theme.borders};
  height: 2.5rem;
`;

export const SelectedText = styled.p`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem; /* 123.077% */
  letter-spacing: -0.01625rem;
`;

export const TimeBox = styled.div`
  display: flex;
  gap: 0.625rem;
  & > div {
  }
  border-width: 0 0 0 1px;
  height: 100%;
  width: 32%;
`;

export const Boldtxtwpr = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.01625rem;
  margin: 0;
  padding: 0;
`;

export const Lightwpr = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};
  font-weight: 600;
  font-size: 0.95rem;
  width: 100%;
  opacity: ${(props) => (props.opacity ? '1' : '0.5')};
  background-color: ${({ theme }) => theme.newsLetterBackground};
  cursor: pointer;
  padding: 0.24rem 0.36rem;
  border-radius: 0.3125rem;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.01625rem;
`;

export const Popbtnwpr = styled.div`
  border-radius: 0.3125rem;
  cursor: pointer;
  background: ${({ theme }) => theme.newsLetterBackground};
  padding: 0.24rem 0.32rem;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.7rem;
  width: 100%;
  display: flex;
  align-items: center;
  & > span {
    display: flex;
    align-items: center;
  }

  position: relative;
  min-height: 2.5rem;
`;

export const EmailBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: scroll;
  height: 2.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmailPop = styled.div`
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  top: 3.5rem;
  right: 0px;
  z-index: 1000;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 0.625rem;
  box-shadow: 0px 8px 8px rgba(153, 153, 153, 0.3);
  max-height: 9.375rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 0.5rem;
  border: 1px solid #c3c7d9;
`;

export const Inputwpr = styled.input`
  border: 1px solid #999999;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.secondaryText};
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 0.25rem;
  outline: none !important;
  width: 100%;
`;

export const BtnWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopupBottonWrp = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
`;

export const ErrorText = styled.div`
  width: 40%;
  color: ${({ theme }) => theme.inActiveStatusBtnText};
  font-size: 0.6125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem; /* 153.846% */
  letter-spacing: -0.01625rem;
  text-align: center;
`;

export const Popupheader = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.01625rem;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: left;
`;
