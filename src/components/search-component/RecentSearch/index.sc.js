import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  overflow: hidden;
`;
export const ComponentTitle = styled.div`
  font-size: 0.813rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.text};
`;
export const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;
export const Result = styled.div`
  background: rgba(195, 199, 217, 0.2);
  border-radius: 0.25rem;
  padding: 0.25rem 0.625rem;
  width: fit-content;
`;
export const Value = styled.div`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 0.813rem;
  line-height: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
