import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NewsArticleWrp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: #fff;
  padding: 1rem 0rem 1.29rem 1.88rem;
  gap: 1rem;
  position: relative;
  width: 100%;
  height: 17.5rem;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

export const NewsArticleWrpR = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NewsArticleImg = styled.img`
  width: 100%;
`;
export const NewsArticleTitle = styled.div`
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Inter;
`;
export const NewsArticleBody = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  font-family: Inter;
  line-height: 0.43913rem;
`;
export const NewsArticleLinkWrp = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const NewsArticleIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
export const NewsArticleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  font-family: Inter;
`;

export const NewsArticleTextDetailsWrp = styled.div`
  display: flex;
  gap: 0rem 1rem;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export const NewsArticleActionDetailsWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NewsArticleTextWrp = styled.div`
  display: flex;
  font-size: 0.75rem;
  gap: 0.5rem;
`;
export const NewsArticleTextLabel = styled.div`
  color: #969da5;
`;
export const NewsArticleTextValue = styled.div`
  color: #000000;
  font-weight: 600;
`;
export const NewsArticleIconWrp = styled.div`
  svg {
    width: 100%;
  }
`;
