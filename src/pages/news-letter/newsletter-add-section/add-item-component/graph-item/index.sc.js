import styled from 'styled-components';

export const GraphWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24.735rem;
  width: 100%;
  box-sizing: border-box;
  border: 1.70675px solid #c3c7d9;
  background: ${({ theme }) => theme.background};
`;

export const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 1.625rem;
  cursor: pointer;
`;
