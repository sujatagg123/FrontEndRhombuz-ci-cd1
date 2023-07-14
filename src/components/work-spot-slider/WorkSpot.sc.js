import styled from 'styled-components';

export const WorkSpotwpr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0rem 1.5rem;
  place-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
  background: transparent;
`;
