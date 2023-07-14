import React from 'react';
import MediaDatabaseSearchSection from '../../../components/media-database-page/media-database-search-section';
import { MainWrp } from './index.sc';
import ProfileRelevanceSection from './profile-relevance-section';
import ProfilesSection from './profile-section';
import Proptypes from 'prop-types';
import { axiosGet } from '../../../service';
import { useQuery } from '@tanstack/react-query';

const MediaDatabaseBottom = ({
  profileSelected = true,
  setProfileSelected,
}) => {
  const getProfiles = () => {
    return axiosGet('/profiles', {}, {});
  };

  const { isLoading, data } = useQuery({
    queryKey: ['profiles'],
    queryFn: () => getProfiles(),
    refetchOnWindowFocus: false,
  });

  return (
    <MainWrp>
      <MediaDatabaseSearchSection />
      <ProfileRelevanceSection profileNumber={data?.data?.data.length} />
      <ProfilesSection profiles={data?.data?.data} loader={isLoading} />
    </MainWrp>
  );
};

MediaDatabaseBottom.propTypes = {
  profileSelected: Proptypes.bool,
  setProfileSelected: Proptypes.func,
};

export default MediaDatabaseBottom;
