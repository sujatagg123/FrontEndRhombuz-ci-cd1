import styled from 'styled-components';

export const MainSectionWrp = styled.div`
  width: calc(100% - 15rem);
  height: 100%;
  border-radius: 0.625rem;
  border: 1px solid #f3f4f8;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondaryText};
  padding: 1.6rem 2.6rem;
`;
