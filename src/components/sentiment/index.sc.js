import styled from 'styled-components';

export const SentimentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background-color: #d9f2df;
  border: 1px solid #d9f2df;
  border-radius: 20px;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  span {
    text-transform: capitalize;
    font-size: 0.85rem;
    font-weight: 500;
    color: #000000;
  }
`;
