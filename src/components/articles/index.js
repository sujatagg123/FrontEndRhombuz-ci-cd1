// import React from 'react';
// import { ArticleComponent } from 'article-component';
// import ArticleImg from './assets/img2.jpg';
// import {
//   SectionSubContent,
//   SentimentContainer,
// } from 'article-component/src/index.sc';

// const title =
//   'Few Parents intend to have very Young Children Vaccinated Against Covid';

// const content =
//   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam aspernatur perspiciatis, minus ex est quis. Consequatur dolor earum unde ex sit labore iste, praesentium mollitia. Ullam non possimus totam? Eum sapiente vel nisi minima itaque! Consequatur laborum odio fugiat nisi, quas at non impedit. Deleniti, fugiat ea, ex, sint omnis culpa alias esse quidem natus ducimus maiores. Ducimus, enim? Doloribus adipisci soluta earum labore ut quis aliquid quas eos esse. Minus quod quidem obcaecati, cum, tempora ad ex expedita quis in voluptatibus sit sequi deleniti? Consectetur qui veniam aperiam Omnis, culpa. Eum aperiam modi consequuntur? Quae nulla rerum sit commodi. Ad commodi doloremque suscipit praesentium, soluta ullam, consequatur tempore, ut animi natus officia dolore hic voluptate sit odio reiciendis';

// const footerDescription = [
//   {
//     name: 'www.wsj.com',
//     url: 'http://www.wsj.com',
//   },
//   {
//     name: 'Publised on 05 June 2021',
//   },
//   {
//     name: 'New York, US',
//   },
//   {
//     name: '12 Matching Keywords',
//   },
//   {
//     name: 'Online News',
//   },
// ];
// // const footerDescription =
// //   "www.wsj.com | Published on 05 June 2021 | New York, US | 12 Matching Keywords | Online News";
// const info = [
//   { heading: 'Matches', value: 'Covid Vaccine' },
//   { heading: 'Reach', value: '1.6M' },
//   { heading: 'AVE', value: '~ $1.5M' },
//   { heading: 'Syndication', value: '1.6M' },
// ];
// const menuOptions = [
//   'Option1',
//   'Option2',
//   'Option3',
//   'Option4',
//   'Option5',
//   'Option6',
//   'Option7',
// ];

// const FooterComponent = ({ footerContent = [] }) => {
//   return (
//     <SectionSubContent>
//       {footerContent.map((content, i) => {
//         return (
//           <span key={i}>
//             {content.name} {' | '}
//           </span>
//         );
//       })}
//     </SectionSubContent>
//   );
// };

// const handleAction = (value) => {
//   console.log(value, ' -- value');
// };

// const ArticleComponentViewer = () => {
//   return (
//     <div style={{ width: '42.93rem', height: '220px' }}>
//       <ArticleComponent
//         title={title}
//         content={content}
//         footer={<FooterComponent footerContent={footerDescription} />}
//         articleImg={ArticleImg}
//         info={info}
//         menuOptions={menuOptions}
//         handleAction={handleAction}
//         sentiment={<SentimentComponent icon="😊" sentiment="Positive" />}
//       />
//     </div>
//   );
// };
// export default ArticleComponentViewer;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/icons/Bookmark';
import Comment from '../../assets/icons/Comment';
import { bottomDetails } from '../../constants';
import SentimentComponent from '../sentiment';

const ArticlesWrp = styled.div`
  padding: 1rem 1.5rem 0rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: calc(100% - 2rem);
  overflow: auto;
  padding-bottom: 4rem;

  ${({ articleView }) =>
    articleView &&
    css`
      width: 100%;
      gap: 1rem 5rem;
      margin: auto;
      flex-direction: row;
      flex-wrap: wrap;
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArticleMainWrp = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;

  ${({ articleView }) =>
    articleView &&
    css`
      display: flex;
      gap: 1rem;
      width: 47%;
    `}

  &:hover > .article-bottom {
    opacity: 1;
  }
`;
const ArticleWrp = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  width: calc(100% - 2rem);
  ${({ articleView }) =>
    articleView &&
    css`
      flex-direction: row-reverse;
    `}
`;
const ArticleWrpL = styled.div`
  width: 25%;
`;
const ArticleWrpR = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ArticleImg = styled.img`
  width: 100%;
`;
const ArticleTitle = styled.div`
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ArticleBody = styled.div`
  font-size: 0.75rem;
  color: #5c5e60;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ArticleLinkWrp = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  gap: 1rem;
`;

const ArticleIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const ArticleLink = styled(Link)`
  text-decoration: none;
  color: #5c5e60;
  font-weight: 600;
  font-size: 0.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ArticleBottomWrp = styled.div`
  opacity: ${({ articleView }) => (articleView ? '1' : '0')};
  /* position: ${({ articleView }) =>
    articleView ? 'relative' : 'absolute'}; */
  width: 1.25rem;
  height: 100%;
  /* padding: 0.5rem; */
  background: #ffffff;
  ${({ articleView }) =>
    !articleView &&
    css`
      /* bottom: 0; */
      /* border-top: 1px solid #ccc; */
      /* border-bottom: 1px solid #ccc; */
    `}

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 400ms ease-in-out;
`;
const ArticleTextDetailsWrp = styled.div`
  display: flex;
  gap: 0rem 1rem;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  ${({ articleView }) =>
    articleView &&
    css`
      flex-wrap: wrap;
      gap: 1rem;
    `}
`;
const ArticleActionDetailsWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ArticleTextWrp = styled.div`
  display: flex;
  font-size: 0.75rem;
  gap: 0.5rem;
  ${({ articleView }) =>
    articleView &&
    css`
      gap: 0.5rem;
    `}
`;
const ArticleTextLabel = styled.div`
  color: #969da5;
`;
const ArticleTextValue = styled.div`
  color: #000000;
  font-weight: 600;
`;
const ArticleIconWrp = styled.div`
  svg {
    width: 100%;
  }
`;
// const ArticleWrpR = styled.div``;
// const ArticleWrpR = styled.div``;

const Articles = ({ articles, articleView }) => {
  return (
    <ArticlesWrp id="article-content" articleView={articleView}>
      {articles.map((ele, i) => (
        <ArticleMainWrp articleView={articleView} key={i}>
          <ArticleBottomWrp
            articleView={articleView}
            className="article-bottom"
          >
            <ArticleActionDetailsWrp>
              <ArticleIconWrp>
                <Bookmark />
              </ArticleIconWrp>
              <ArticleIconWrp>
                <Comment />
              </ArticleIconWrp>
            </ArticleActionDetailsWrp>
          </ArticleBottomWrp>
          <ArticleWrp articleView={articleView} key={`${ele.title}-i`}>
            <ArticleWrpL>
              <ArticleImg src={ele.image} />
            </ArticleWrpL>
            <ArticleWrpR>
              <ArticleTitle>{ele.title}</ArticleTitle>
              <ArticleBody>{ele.content}</ArticleBody>
              <ArticleLinkWrp>
                <ArticleIcon src={ele.icon} />
                <ArticleLink to={ele.link} target="_blank" rel={ele.title}>
                  {ele.link}
                </ArticleLink>
              </ArticleLinkWrp>
              <ArticleTextDetailsWrp articleView={articleView}>
                {bottomDetails.map((item, j) => (
                  <ArticleTextWrp
                    key={`${item.value}-${j}`}
                    articleView={articleView}
                  >
                    <ArticleTextLabel>{item.label} :</ArticleTextLabel>
                    <ArticleTextValue>
                      {item.value === 'matches'
                        ? item.value === 'matches' && articleView
                          ? ele[item.value].join(', ')
                          : ele[item.value][0] || ''
                        : ele[item.value]}
                    </ArticleTextValue>
                  </ArticleTextWrp>
                ))}
                <SentimentComponent sentiment={'positive'} />
              </ArticleTextDetailsWrp>
            </ArticleWrpR>
          </ArticleWrp>
        </ArticleMainWrp>
      ))}
    </ArticlesWrp>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.string,
      image: PropTypes.string,
      matches: PropTypes.arrayOf(PropTypes.string),
      reach: PropTypes.string,
      syndication: PropTypes.string,
      ave: PropTypes.string,
      sentiment: PropTypes.string,
    })
  ).isRequired,
  articleView: PropTypes.bool,
};

export default Articles;
