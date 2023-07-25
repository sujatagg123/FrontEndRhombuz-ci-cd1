import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ArticleSection,
  IconWrapper,
  Iconwpr,
  // Paginatewpr,
  SectionTitle,
  Sectionwpr,
  TabPopwpr,
} from '../index.sc';
// import IconBox from '../IconBox';
import Tabs from '../../tabs';
import ArticleDetails from '../../articles/article-details';
import Articles from '../../articles';
// import Pagination from '../../pagination';
import { Titletabs } from '../../../constants/mock';
import { useArticleData } from '../../../hooks/useSearch';
import { useQuery, useQueryClient } from '@tanstack/react-query';
// import Spinner from '../../spinner';
import { TitleBox } from '../../tabs/TabTitle';
import { LinkSpan, TabButton, ThemeTabs, Themetabtxt } from './index.sc';
import { theme } from '../../../constants/theme';
import XCirlcle from '../../../assets/icons/XCirlcle';
import DownIcon from '../../../assets/icons/DownIcon';
import { useSelector } from 'react-redux';
import { axiosGet } from '../../../service';
import { ArticleTheme } from '../../tabs/CardTitle';

const ArticleSectionComponent = ({
  activeScreen,
  articleType,
  setArticleType,
  page,
  setPage,
  type,
  setType,
  setTotal,
}) => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    // error: articleerror,
    data,
    // isFetching,
  } = useArticleData(page, type);

  const { data: themeTabs, isLoading: themeTabLoading } = useQuery({
    queryKey: ['themeTab'],
    queryFn: () => axiosGet('/article-theme'),
    refetchOnWindowFocus: false,
  });

  console.log('Theme tabs : ', themeTabs, ' ', themeTabLoading);

  const themetabs = themeTabs?.data?.data?.map((item) => {
    return { ...item, title: <ArticleTheme title={item.title} /> };
  });

  const handleTheme = (index, item) => {
    console.log(index, ' ', item);
    queryClient.invalidateQueries(['articles', 0, type]);
  };

  const [titleTabs, setTitleTabs] = useState(data?.data?.tabs || Titletabs);

  const tabs = titleTabs?.map((ele, i) => ({
    ...ele,
    title: <TitleBox title={ele.label} des={ele.count} />,
    id: i,
  }));
  const [activeTab, setActiveTab] = useState(0);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const count = data?.data?.tabs?.filter((obj) => obj.value === type)[0].count;

  useEffect(() => {
    if (Array.isArray(data?.data?.tabs)) setTitleTabs(data?.data?.tabs);
    setTotal(count);
  }, [data?.data?.tabs, count, setTotal]);

  const handleTabs = (index) => {
    setType(tabs[index].value);
    setActiveTab(index);
    setPage(0);
    queryClient.invalidateQueries(['articles', 0, tabs[index].value]);
    setShowTab(false);
  };

  const [showTab, setShowTab] = useState(false);

  return (
    <>
      <ArticleSection
        activeScreen={activeScreen}
        className={activeScreen === 'article' ? 'active' : ''}
      >
        <Sectionwpr>
          <SectionTitle>
            All Articles
            {(articleType[0] || articleType[1]) && (
              <>
                <LinkSpan style={{ marginLeft: '0.25rem' }} color="#000000">
                  {articleType[0] ? '\\ ' + articleType[0] : ''}
                </LinkSpan>
                <LinkSpan color={theme.light.primary}>
                  {articleType[1] ? '\\ ' + articleType[1] : ''}
                </LinkSpan>
                <IconWrapper
                  onClick={() => setArticleType([undefined, undefined])}
                  style={{ marginLeft: '0.5rem' }}
                >
                  <XCirlcle />
                </IconWrapper>
              </>
            )}
          </SectionTitle>
          <TabButton onClick={() => setShowTab(!showTab)}>
            <Iconwpr>
              <DownIcon />
            </Iconwpr>
            {titleTabs[activeTab].label}
            <span>({titleTabs[activeTab].count})</span>
          </TabButton>

          <TabPopwpr showTab={showTab}>
            <Tabs
              items={!tabs ? [{}] : tabs}
              widthItem={activeScreen === 'article' ? '7rem' : '20%'}
              variant="underline"
              activeColor="#675EF2"
              inactiveColor="#000000"
              onChange={handleTabs}
              isContent={false}
              bottomBorderWidth="3px"
              paddingWrapper="0.75rem 1rem"
            />
          </TabPopwpr>
        </Sectionwpr>
        <ArticleDetails
          start={page * 50 + 1}
          end={(page + 1) * 50 < count ? (page + 1) * 50 : count}
          total={count}
        />
        <ThemeTabs>
          <Themetabtxt>Tags/Themes</Themetabtxt>
          <Tabs
            items={!themeTabs?.data?.data ? [{}] : themetabs}
            variant="card"
            activeColor={theme[selectedTheme].background}
            inactiveColor={theme[selectedTheme].text}
            onChange={handleTheme}
            isContent={false}
            gapitems="0.4rem"
            bottomBorderWidth="0"
            wraperBorderWidth="0"
            activeCardBGColor={theme[selectedTheme].text}
            inactiveCardBGColor={theme[selectedTheme].background}
            cardBorderRadius=".75rem"
            paddingWrapper="0.25rem 0 0"
          />
        </ThemeTabs>

        {Array.isArray(data?.data?.data) && !isLoading ? (
          <Articles
            articles={data?.data?.data}
            articleView={activeScreen === 'article'}
          />
        ) : (
          'Loading ...'
        )}
      </ArticleSection>
      {/* <Paginatewpr>
        {Array.isArray(data?.data?.data) && (
          <Pagination
            page={page}
            prevClick={handlePage}
            nextClick={handlePage}
            handlePage={handlePage}
            total={count}
            align="end"
            limit={50}
          />
        )}
        <IconBox />
      </Paginatewpr> */}
    </>
  );
};

export default ArticleSectionComponent;

ArticleSectionComponent.propTypes = {
  activeScreen: PropTypes.string,
  articleType: PropTypes.array,
  setArticleType: PropTypes.func,
  page: PropTypes.number,
  setPage: PropTypes.func,
  type: PropTypes.string,
  setType: PropTypes.func,
  setTotal: PropTypes.func,
};
