import styled from 'styled-components';

export const PageWrp = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
export const PageMainWrp = styled.div`
  height: calc(100vh - 3rem - 4%);
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SearchSection = styled.div`
  height: max-content;
  margin: 0rem 1.5rem 0.5rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background: ${({ theme }) => theme.background};
`;
export const SearchWrp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.938rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 5;
  padding: 1.25rem;
  /* .filter-wrapper {
    padding: 0rem 0 0 1.25rem;
  } */
`;
export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const CrossButtonWrp = styled.div`
  transform: rotate(180deg);
  cursor: pointer;
  margin-right: 0.5rem;
`;
export const SearchTextWrp = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DashboardType = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.5625rem;
  font-weight: 500;
  line-height: 0.75rem;
  letter-spacing: -0.01125rem;
  text-transform: capitalize;
`;
export const SearchText = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.4375rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.02875rem;
`;
export const SaveSearchBtn = styled.div`
  margin-left: auto;
  box-sizing: border-box;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 2.25rem;
  padding: 0.5rem 0.8125rem;
  border-radius: 0.3125rem;
  /* border: 1px solid ${({ theme }) => theme.primary}; */
  background: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
export const ButtonText = styled.span`
  /* text styling */
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.01875rem;
  color: ${({ theme }) => theme.logoText};
`;
export const SectionBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const QueryFilterCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const SearchContainer = styled.div`
  width: 15rem;
  height: 2.125rem;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3125rem;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  cursor: pointer;
`;
export const SmallTitle = styled.div`
  width: calc(100% - 1.5rem);
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.02125rem;
  color: #161a34;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &.center {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
