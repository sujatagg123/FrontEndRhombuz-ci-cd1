import React from 'react';
import Proptypes, { object } from 'prop-types';
import { CardWrp, FrontDiv, MainWrp, RightDiv } from './index.sc';
import ProfileCard from '../../../../components/media-database-page/profile-card';
import ProfileCardHover from '../../../../components/media-database-page/profile-hover';

const ProfilesSection = ({ profiles, loader }) => {
  return (
    <MainWrp>
      {loader ? (
        <div>Loading</div>
      ) : (
        profiles.map((profile, i) => {
          return (
            <CardWrp key={profile.id}>
              <FrontDiv>
                <ProfileCard profile={profile} />
              </FrontDiv>
              <RightDiv className="right-card">
                <ProfileCardHover profile={profile} />
              </RightDiv>
            </CardWrp>
          );
        })
      )}
    </MainWrp>
  );
};

ProfilesSection.propTypes = {
  profiles: Proptypes.arrayOf(object),
  loader: Proptypes.bool,
};

export default ProfilesSection;
