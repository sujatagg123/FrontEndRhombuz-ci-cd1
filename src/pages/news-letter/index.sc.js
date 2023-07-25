import styled from 'styled-components';

export const MainWrp = styled.div`
  height: calc(100vh - 5rem);
  overflow: scroll;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  margin: 0 2.2rem;
  box-shadow: 0px 1px 0px 0px #e8e8e8;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${({ theme }) => theme.newsLetterBackground};
`;
