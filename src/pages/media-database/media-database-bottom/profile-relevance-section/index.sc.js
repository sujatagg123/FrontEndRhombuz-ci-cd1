import styled from 'styled-components';

export const MainWrp = styled.div`
  width: 100%;
  height: 1rem;
`;

export const TopBarWrp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem; /* 125% */
  letter-spacing: -0.025rem;
  margin: 0;
  padding: 0;
`;

export const SortWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export const RelevanceText = styled.p`
  color: ${({ theme }) => theme.closeButton};
  /* AMX_Style/Txt_13px_Medium */
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.01625rem;
  margin: 0;
  padding: 0;
`;

export const SortByText = styled.p`
  color: ${({ theme }) => theme.closeButton};
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.01625rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
export const SortByOptionsText = styled.p`
  color: ${({ theme }) => theme.background};
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.01625rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const DropDownWrp = styled.div`
  position: absolute;
  right: 0;
  top: 1.25rem;
  background: ${({ theme }) => theme.tableHeaderColor};
  z-index: 10;
  padding: 0.625rem;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const BottomProfilesMainWrp = styled.div`
  width: 100%;
`;

export const Wrp = styled.div`
  position: relative;
`;
