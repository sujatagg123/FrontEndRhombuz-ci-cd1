import React from 'react';
import Proptypes, { object } from 'prop-types';
import { MainWrp } from './index.sc';
import ProfileCard from '../../../../components/media-database-page/profile-card';

const ProfilesSection = ({ profiles, loader }) => {
  return (
    <MainWrp>
      {loader ? (
        <div>Loading</div>
      ) : (
        profiles.map((profile, i) => {
          return <ProfileCard key={profile.id} profile={profile} />;
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
