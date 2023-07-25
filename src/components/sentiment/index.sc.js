import styled from 'styled-components';

export const SentimentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  width: fit-content;
  span {
    font-size: 0.6rem;
    font-weight: 500;
    color: ${(props) => (props.positive ? '#00b929' : 'red')};
  }
`;

export const SentiTextwpr = styled.div`
  color: #999;
  font-size: 0.75rem;
  font-weight: 500;
`;
