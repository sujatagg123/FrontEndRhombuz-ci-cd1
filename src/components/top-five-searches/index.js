import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  ArticleImg,
  ArticleWrp,
  ArticleWrpL,
  ArticleWrpR,
  ArticlesWrp,
  DescrText,
  MainWrp,
  TabTitle,
  TitleText,
} from './index.sc';

const TopFiveSearches = ({ data }) => {
  const topFiveArticles = data.slice(0, 5);

  return (
    <MainWrp>
      <TabTitle>Top 5 Articles</TabTitle>
      <ArticlesWrp>
        {topFiveArticles.map((item, i) => {
          return (
            <ArticleWrp key={i}>
              <ArticleWrpL>
                <ArticleImg src={item?.imgURL} />
              </ArticleWrpL>
              <ArticleWrpR>
                <TitleText>{item?.description}</TitleText>
                <DescrText>
                  {' '}
                  {item?.publisher} | {item?.author} | {item?.date} |{' '}
                  {item?.place} | {item?.matchingKeywords} | {item?.newstype}{' '}
                </DescrText>
              </ArticleWrpR>
            </ArticleWrp>
          );
        })}
      </ArticlesWrp>
    </MainWrp>
  );
};

TopFiveSearches.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
};

export default TopFiveSearches;
