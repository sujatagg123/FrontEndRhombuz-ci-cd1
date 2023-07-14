import styled from 'styled-components';

export const ArticlesWrp = styled.div`
  padding: 1.56rem 1.38rem;
  background-color: #fff;
  border-radius: 0.625rem;
  display: flex;
  gap: 3.12rem;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1875rem;
  justify-content: flex-start;
  height: fit-content;
`;

export const ArticleType = styled.p`
  color: #555;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  margin: 0;
  padding: 0;
`;

export const ArticleNumber = styled.p`
  color: #000;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  margin: 0;
  padding: 0;
`;
