import React from 'react';
import Proptypes from 'prop-types';
import {
  MainWrp,
  ProfileDescription,
  ProfileTitle,
  BorderDiv,
  StatsWrp,
  StatsItem,
  FooterContainer,
  StatsItemLabel,
  StatsItemValue,
} from './index.sc';

const profileStats = [
  {
    label: 'Articles',
    value: 'articles',
    count: 146,
  },
  {
    label: 'Top Articles',
    value: 'top_articles',
    count: 27,
  },
  {
    label: 'Trending Articles',
    value: 'trending_articles',
    count: 3,
  },
];

const ProfileCardHover = ({ profile }) => {
  return (
    <>
      <MainWrp>
        <ProfileTitle>{profile.name}</ProfileTitle>
        <ProfileDescription>
          William Douglast is former senior editor at mit-tech.com and former
          managing editor at American Express. His byline has appeared on Fox
          News, Forbes, Entrepreneur and other outlets. Marv earned MPA, BBA and
          BA degrees from the University of Texas at Austin. (Cards)
        </ProfileDescription>
        <BorderDiv></BorderDiv>
        <StatsWrp>
          {profileStats.map((ele, i) => (
            <StatsItem key={i}>
              <StatsItemLabel>{ele?.count}</StatsItemLabel>
              <StatsItemValue>{ele?.label}</StatsItemValue>
            </StatsItem>
          ))}
        </StatsWrp>
        <BorderDiv></BorderDiv>
        <FooterContainer></FooterContainer>
      </MainWrp>
    </>
  );
};

export default ProfileCardHover;

ProfileCardHover.propTypes = {
  profile: Proptypes.object,
};
