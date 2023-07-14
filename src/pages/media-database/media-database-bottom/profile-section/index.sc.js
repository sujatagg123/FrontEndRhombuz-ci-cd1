import styled from 'styled-components';

export const MainWrp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.9375rem;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
