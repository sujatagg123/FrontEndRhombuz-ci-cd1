import React from 'react';
import Proptypes from 'prop-types';
import {
  // NewsArticleBody,
  // NewsArticleIcon,
  // NewsArticleImg,
  NewsArticleLink,
  NewsArticleLinkWrp,
  // NewsArticleTextDetailsWrp,
  // NewsArticleTextLabel,
  // NewsArticleTextValue,
  // NewsArticleTextWrp,
  NewsArticleTitle,
  NewsArticleWrp,
  // NewsArticleWrpL,
  NewsArticleWrpR,
} from './index.sc';
// import { bottomDetails } from '../../../../constants';
// import SentimentComponent from '../../../../components/sentiment';

const NewsArticle = ({ data }) => {
  return (
    <NewsArticleWrp src={data.image}>
      {/* <NewsArticleWrpL>
        <NewsArticleImg src={data.image} />
      </NewsArticleWrpL> */}
      <NewsArticleWrpR>
        <NewsArticleTitle>{data.title}</NewsArticleTitle>
        {/* <NewsArticleBody>{data.content}</NewsArticleBody> */}
        <NewsArticleLinkWrp>
          {/* <NewsArticleIcon src={data.icon} /> */}
          <NewsArticleLink to={data.link} target="_blank" rel={data.title}>
            {data.link}
          </NewsArticleLink>
        </NewsArticleLinkWrp>
        {/* <NewsArticleTextDetailsWrp>
          {bottomDetails.map((item, j) => (
            <NewsArticleTextWrp key={`${item.value}-${j}`}>
              <NewsArticleTextLabel>{item.label} :</NewsArticleTextLabel>
              <NewsArticleTextValue>
                {item.value === 'matches'
                  ? data[item.value].join(', ')
                  : data[item.value]}
              </NewsArticleTextValue>
            </NewsArticleTextWrp>
          ))}
          <SentimentComponent sentiment={'positive'} />
        </NewsArticleTextDetailsWrp> */}
      </NewsArticleWrpR>
    </NewsArticleWrp>
  );
};

NewsArticle.propTypes = {
  data: Proptypes.object,
};

export default NewsArticle;
