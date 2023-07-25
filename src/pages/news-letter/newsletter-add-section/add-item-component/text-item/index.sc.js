import styled from 'styled-components';

export const TextContentWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({ theme }) => theme.background};
  padding: 2.1875rem 1.25rem;
  gap: 0.625rem;
`;

export const TextHeading = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
`;

export const TextContent = styled.p`
  margin: 0;
  color: #999999;
`;
