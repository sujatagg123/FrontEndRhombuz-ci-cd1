import styled from 'styled-components';

export const ItemTypeBoxWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BoxWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemTypeWrp = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 2px;
`;
