import styled from 'styled-components';

export const TabContent = styled.div`
  width: 100%;
  height: calc(100% - 3.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  position: relative;
`;
export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Searchwpr = styled.div`
  display: flex;
  align-items: center;
  width: 16.8rem;
  height: 2.2rem;
  gap: 1rem;
  border-radius: 0.4rem;
  border: 1px solid #c3c7d9;
  background: ${({ theme }) => theme.background};
  padding: 0.56rem 0.93rem;
`;
export const Inputwrpr = styled.input`
  border: none;
  outline: none;
  background: ${({ theme }) => theme.background};
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  width: 100%;
  &::placeholder {
    font-weight: 600;
    font-size: 0.8rem;
    color: #999999;
    display: flex;
    align-items: flex-end;
  }
`;
