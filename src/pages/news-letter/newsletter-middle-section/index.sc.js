import styled from 'styled-components';

export const NewsLetterBackground = styled.div`
  height: 17.45rem;
  background: #c3c7d9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 1.25rem;
`;

export const TitleBox = styled.div`
  width: 55vw;
  height: 15rem;
  background: ${({ theme }) => theme.primary};
  padding: 2rem 3.94rem 2.21rem 2.44rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.875rem;
`;

export const NewsletterTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

export const TitleBoxWrp = styled.div``;

export const NewsletterTitleText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.188rem;
  letter-spacing: -0.02rem;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

export const TitleBoxBottomWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBoxBottomText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1;
  line-height: 1.188rem;
  letter-spacing: -0.02rem;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;
