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

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/icons/Bookmark';
import Comment from '../../assets/icons/Comment';
import { Bottomkeys, bottomDetails } from '../../constants';
import SentimentComponent from '../sentiment';
import TagIcon from '../../assets/icons/TagIcon';
import ThemeIcon from '../../assets/icons/ThemeIcon';
import { useSelector } from 'react-redux';
import { theme } from '../../constants/theme';
import GrowthIcon from '../../assets/icons/GrowthIcon';
import CommentBox from './hover-poovers/CommentBox';
import Popover from './hover-poovers';
import TagBox from './hover-poovers/TagBox';

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
  width: 100%;
  ${({ articleView }) =>
    articleView &&
    css`
      flex-direction: row-reverse;
    `}
`;

const ArticlewrpBox = styled.div`
  width: calc(100% - 2rem);
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

const ArticlewprZ = styled.div`
  width: 100%;
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
  color: ${({ theme }) => theme.secondaryText};
`;
const ArticleBody = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.closeButton};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ArticleLinkWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem;
`;

const Articlekeytxt = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.closeButton};
  font-weight: 600;
  font-size: 0.75rem;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 5rem;
`;

const ArticleIcon = styled.img`
  width: 0.9rem;
  height: 0.9rem;
`;
const ArticleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.closeButton};
  font-weight: 600;
  font-size: 0.75rem;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 5rem;
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
  position: relative;
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
  gap: 0.4rem;
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
  cursor: pointer;
  svg {
    width: 100%;
  }
`;
// const ArticleWrpR = styled.div``;
// const ArticleWrpR = styled.div``;

const IconsPop = ({ Icon, PopContent, data }) => {
  const [show, setShow] = useState(false);
  const iconPopRef = useRef(null);
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const handleClickOutside = (event) => {
    if (iconPopRef.current && !iconPopRef.current.contains(event.target)) {
      setShow(false);
      document.removeEventListener('click', handleClickOutside);
    }
  };
  document.addEventListener('click', handleClickOutside);
  const handleShow = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <>
      <ArticleIconWrp onClick={handleShow} ref={iconPopRef}>
        {show && (
          <Popover
            InnerChild={PopContent}
            data={data || {}}
            setShow={setShow}
          />
        )}
        <Icon color={theme[selectedTheme].text} />
      </ArticleIconWrp>
    </>
  );
};

IconsPop.propTypes = {
  Icon: PropTypes.any,
  PopContent: PropTypes.any,
  data: PropTypes.any,
};

const Articles = ({ articles, articleView }) => {
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  return (
    <ArticlesWrp id="article-content" articleView={articleView}>
      {articles.map((ele, i) => (
        <ArticleMainWrp articleView={articleView} key={i}>
          <ArticleBottomWrp
            articleView={articleView}
            className="article-bottom"
          >
            <ArticleActionDetailsWrp>
              {false && (
                <ArticleIconWrp>
                  <Bookmark color={theme[selectedTheme].text} />
                </ArticleIconWrp>
              )}
              <IconsPop Icon={Comment} PopContent={CommentBox} data="dfsa" />
              <ArticleIconWrp>
                <ThemeIcon color={theme[selectedTheme].text} />
              </ArticleIconWrp>
              <IconsPop Icon={TagIcon} PopContent={TagBox} data={[{}]} />
              <ArticleIconWrp>
                <GrowthIcon color={theme[selectedTheme].text} />
              </ArticleIconWrp>
            </ArticleActionDetailsWrp>
          </ArticleBottomWrp>
          <ArticlewrpBox>
            <ArticleWrp articleView={articleView} key={`${ele.title}-i`}>
              <ArticleWrpL>
                <ArticleImg src={ele.image} />
              </ArticleWrpL>
              <ArticleWrpR>
                <ArticleTitle>{ele.title}</ArticleTitle>
                <ArticleBody>{ele.content}</ArticleBody>
              </ArticleWrpR>
            </ArticleWrp>
            <ArticlewprZ>
              <ArticleLinkWrp>
                {Bottomkeys.map((item, i) => (
                  <>
                    {item.value === 'link' ? (
                      <>
                        <ArticleIcon src={ele.icon} />
                        <ArticleLink
                          to={ele[item.value]}
                          target="_blank"
                          rel={ele.title}
                        >
                          {ele.link}
                        </ArticleLink>
                      </>
                    ) : (
                      <Articlekeytxt>
                        | {ele[item.value] || item.label}
                      </Articlekeytxt>
                    )}
                  </>
                ))}
              </ArticleLinkWrp>
              <ArticleTextDetailsWrp articleView={articleView}>
                {bottomDetails.map((item, j) => (
                  <ArticleTextWrp
                    key={`${item.value}-${j}`}
                    articleView={articleView}
                  >
                    <ArticleTextLabel>{item.label} :</ArticleTextLabel>
                    <ArticleTextValue>
                      {item.value === 'matches' ? (
                        item.value === 'matches' && articleView ? (
                          ele[item.value].join(', ')
                        ) : (
                          ele[item.value][0] || ''
                        )
                      ) : item.value === 'sentiment' ? (
                        <SentimentComponent sentiment={ele[item.value]} />
                      ) : (
                        ele[item.value]
                      )}
                    </ArticleTextValue>
                  </ArticleTextWrp>
                ))}
              </ArticleTextDetailsWrp>
            </ArticlewprZ>
          </ArticlewrpBox>
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
