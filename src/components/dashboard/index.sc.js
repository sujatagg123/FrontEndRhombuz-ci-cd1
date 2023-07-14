import styled from 'styled-components';

export const DashboardPagewpr = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Dashboardwpr = styled.div`
  width: 100%;
  background: #eceff3;
  height: calc(100vh - 3.5rem);
`;

export const DashboardHeader = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.secondaryBackground};
  padding: 1.25rem 2.5rem;
  height: 4.25rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
`;

export const HeaderTitlewpr = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.seecondaryText};
  font-weight: 600;
`;

export const Iconwpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.25rem;
  background: ${({ theme, active }) =>
    active ? '#D1D5DC' : theme.secondaryBackground};
`;

export const DashboardBoxwpr = styled.div`
  padding: 1.5rem 2.5rem 0;
  & > div {
    padding: 0;
    height: 100%;
    & #list-container {
      height: 100%;
    }
  }
  height: calc(100% - 4.25rem);
`;
