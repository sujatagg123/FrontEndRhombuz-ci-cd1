import styled from 'styled-components';

export const DashbordCmnentwpr = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 1.2rem;
  height: 100%;
`;

export const DashbrdGraphconrwpr = styled.div`
  width: 75%;
  height: 100%;
  & #download-content {
    height: 100%;
  }
`;

export const DashboardGraphheaderwpr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 10px;
`;

export const Titletxtwpr = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.4rem;
  font-weight: 600;
`;

export const IconsBoxwpr = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Iconwpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

export const GraphContainer = styled.div`
  overflow: auto;
  height: 100%;
`;
