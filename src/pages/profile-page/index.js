import React, { useCallback, useEffect, useState } from 'react';

import {
  ArticlesSecHeader,
  ArticlesSection,
  ArticlesWrp,
  Background,
  ChartSec,
  ChartSecHeader,
  ContentLeftSecWrp,
  ContentRightSecWrp,
  ContentWrp,
  DropDownWrp,
  DropdownWrp,
  Dropdowntext,
  GraphWrp,
  GraphWrpRight,
  JournalistText,
  JournalistWrp,
  LeftSec,
  MainWrp,
  NameText,
  NameWrp,
  OccupationText,
  ProfileImage,
  ProfileTopWrp,
  ReachnNbr,
  Reachtext,
  RightSec,
  Tab,
  TabLabel,
  TabsWrp,
  TagWrp,
  TopAuthorText,
  TopAuthorWrp,
  TopWrp,
  TwitterSec,
  Wrp,
} from './index.sc';

import MediaDatabaseMiddle from '../../components/media-database-middle';
import TopAuthorStar from '../../assets/icons/TopAuthorStar';
import JournalistScoreCard from '../../components/profile-pg/journalist-score-card';
import ArticlesCard from '../../components/profile-pg/articles-card';
import ProfileTagsCard from '../../components/profile-pg/profile-tags-card';
import ProfileButtonCard from '../../components/profile-pg/profile-button-card';
import DownPolygon from '../../assets/icons/DownPolygon';
import { formatNumber } from '../../utils';
import AboutCard from '../../components/profile-pg/about-card';
import ArticleCard from '../../components/profile-pg/article-card';
import SlotDetails from '../../components/search-result/slot-details';
import AppHeader from '../../components/app-header';
import AppBG from '../../components/app-bg';
import { useParams } from 'react-router';
import { axiosGet } from '../../service';
import { useQuery } from '@tanstack/react-query';

const months = [
  {
    type: 'three',
    label: '3 Months',
  },
  {
    type: 'six',
    label: '6 Months',
  },
  {
    type: 'twelve',
    label: '12 Months',
  },
];

const articleSort = [
  {
    type: 'reach',
    label: 'Reach',
  },
  {
    type: 'popular',
    label: 'Popular',
  },
  {
    type: 'top',
    label: 'Top',
  },
];
const ProfilePage = () => {
  const param = useParams();

  const [socialLinks, setSocialLinks] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [tabSelected, setTabSelected] = useState('articles');

  const [sort, setSort] = useState(months[0]);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const [articlesSort, setArticlesSort] = useState(articleSort[0]);
  const [articleDropdownIsOpen, setArticleDropdownIsOpen] = useState(false);

  const [graphDropDown, setGraphDropDown] = useState(months[0]);
  const [graphDropDownIsOpen, setGraphDropDownIsOpen] = useState(false);

  function handleDropdownClick() {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  function handleSelect(type) {
    setSort(type);
    setDropdownIsOpen(false);
  }
  function handleArticleDropdownClick() {
    setArticleDropdownIsOpen(!articleDropdownIsOpen);
  }

  function handleArticleSelect(type) {
    setArticlesSort(type);
    setArticleDropdownIsOpen(false);
  }

  function handleGraphDropDownClick() {
    setGraphDropDownIsOpen(!graphDropDownIsOpen);
  }

  function handlGraphDropDownSelect(type) {
    setGraphDropDown(type);
    setGraphDropDownIsOpen(false);
  }

  const [profile, setProfile] = useState(null);
  const [noDataFromResponse, setNoDataFromResponse] = useState(false);

  const getProfileData = () => {
    return axiosGet(`/profiles/${param.profileId}`, {}, {});
  };

  const {
    // isLoading - initial fetch
    isLoading,
    // isFetching - every api call
    isFetching,
  } = useQuery({
    queryKey: ['profile', param.profileId],
    queryFn: () => getProfileData(),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      if (data?.data?.data.length === 0) {
        setNoDataFromResponse(true);
      } else {
        setProfile(...data?.data?.data);
      }
    },
  });

  const generateLinks = useCallback(() => {
    const tempArr = [];
    for (let index = 0; index < 5; index++) {
      if (profile.socials[index]?.name) {
        tempArr.push(profile.socials[index]);
      } else {
        tempArr.push({});
      }
    }
    setSocialLinks(tempArr);
  }, [profile]);

  useEffect(() => {
    if (profile) {
      generateLinks();
    }
  }, [profile, generateLinks]);

  function handleClick(tab) {
    setTabSelected(tab);
  }

  if (isLoading || isFetching) {
    return <div>Loading</div>;
  }

  if (noDataFromResponse) {
    return <div>Sorry No data found</div>;
  }

  if (profile) {
    return (
      <>
        <AppBG />
        <AppHeader />
        <MediaDatabaseMiddle name={profile.name} />
        <MainWrp>
          <Background />
          <ProfileTopWrp>
            <ProfileImage image={profile.profilePicture} />
            <TopWrp>
              <NameWrp>
                <NameText>{profile.name}</NameText>
                <OccupationText>{profile.occupation}</OccupationText>
              </NameWrp>
              <TagWrp>
                <JournalistWrp>
                  <JournalistText>Journalist</JournalistText>
                </JournalistWrp>
                <TopAuthorWrp>
                  <TopAuthorStar />
                  <TopAuthorText>Top Author</TopAuthorText>
                </TopAuthorWrp>
              </TagWrp>
            </TopWrp>
          </ProfileTopWrp>
          <ContentWrp>
            <ContentLeftSecWrp>
              <JournalistScoreCard journalistScore={profile.journalistScore} />
              <ArticlesCard articles={profile.articles} />
              <ProfileTagsCard tags={profile.tags} socialLinks={socialLinks} />
              <ProfileButtonCard
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            </ContentLeftSecWrp>
            <ContentRightSecWrp>
              <AboutCard name={profile.name} about={profile.about} />
              <ArticlesWrp>
                <TabsWrp>
                  <Tab
                    onClick={() => handleClick('articles')}
                    selected={tabSelected === 'articles'}
                  >
                    <TabLabel selected={tabSelected === 'articles'}>
                      Articles
                    </TabLabel>
                  </Tab>
                  <Tab
                    onClick={() => handleClick('twitter')}
                    selected={tabSelected === 'twitter'}
                  >
                    <TabLabel selected={tabSelected === 'twitter'}>
                      Twitter Feed
                    </TabLabel>
                  </Tab>
                </TabsWrp>
                {tabSelected === 'articles' ? (
                  <ArticlesSection>
                    <LeftSec>
                      <ChartSec>
                        <ChartSecHeader>
                          <Reachtext>
                            Total Reach{' '}
                            <ReachnNbr>{formatNumber(profile.reach)}</ReachnNbr>
                          </Reachtext>
                          <DropdownWrp>
                            <Wrp>
                              <Dropdowntext onClick={handleDropdownClick}>
                                {sort.label}
                              </Dropdowntext>
                              {dropdownIsOpen && (
                                <DropDownWrp>
                                  {months.map((item, i) => {
                                    return (
                                      <Dropdowntext
                                        key={i}
                                        onClick={() => handleSelect(item)}
                                      >
                                        {item.label}
                                      </Dropdowntext>
                                    );
                                  })}
                                </DropDownWrp>
                              )}
                            </Wrp>
                            <DownPolygon fill={'#5C5E60'} />
                          </DropdownWrp>
                        </ChartSecHeader>
                        <GraphWrp>
                          <SlotDetails widget={profile.graphLeft} />
                        </GraphWrp>
                      </ChartSec>
                      <ArticlesSecHeader>
                        <Reachtext>
                          Total Articles{' '}
                          <ReachnNbr>{profile.articlePosts.length}</ReachnNbr>
                        </Reachtext>
                        <DropdownWrp>
                          <Wrp>
                            <Dropdowntext onClick={handleArticleDropdownClick}>
                              {articlesSort.label}
                            </Dropdowntext>
                            {articleDropdownIsOpen && (
                              <DropDownWrp>
                                {articleSort.map((item, i) => {
                                  return (
                                    <Dropdowntext
                                      key={i}
                                      onClick={() => handleArticleSelect(item)}
                                    >
                                      {item.label}
                                    </Dropdowntext>
                                  );
                                })}
                              </DropDownWrp>
                            )}
                          </Wrp>
                          <DownPolygon fill={'#5C5E60'} />
                        </DropdownWrp>
                      </ArticlesSecHeader>
                      {profile.articlePosts.map((item, i) => {
                        return (
                          <ArticleCard
                            key={i}
                            title={item.title}
                            content={item.content}
                            link={item.link}
                            date={item.date}
                            country={item.country}
                            reach={item.reach}
                          />
                        );
                      })}
                    </LeftSec>
                    <RightSec>
                      <ChartSec>
                        <ChartSecHeader>
                          <Reachtext>Articles By Topic</Reachtext>
                          <DropdownWrp>
                            <Wrp>
                              <Dropdowntext onClick={handleGraphDropDownClick}>
                                {graphDropDown.label}
                              </Dropdowntext>
                              {graphDropDownIsOpen && (
                                <DropDownWrp>
                                  {months.map((item, i) => {
                                    return (
                                      <Dropdowntext
                                        key={i}
                                        onClick={() =>
                                          handlGraphDropDownSelect(item)
                                        }
                                      >
                                        {item.label}
                                      </Dropdowntext>
                                    );
                                  })}
                                </DropDownWrp>
                              )}
                            </Wrp>
                            <DownPolygon fill={'#5C5E60'} />
                          </DropdownWrp>
                        </ChartSecHeader>
                        <GraphWrpRight>
                          <SlotDetails widget={profile.graphRight} />
                        </GraphWrpRight>
                      </ChartSec>
                    </RightSec>
                  </ArticlesSection>
                ) : (
                  <TwitterSec>Twitter</TwitterSec>
                )}
              </ArticlesWrp>
            </ContentRightSecWrp>
          </ContentWrp>
        </MainWrp>
      </>
    );
  }
};

export default ProfilePage;
