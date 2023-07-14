import React from 'react';
import MediaDatabaseBottom from './media-database-bottom';
import MediaDatabaseMiddle from '../../components/media-database-middle';
import AppBG from '../../components/app-bg';
import AppHeader from '../../components/app-header';

const MediaDatabase = () => {
  return (
    <>
      <AppBG />
      <AppHeader />
      <MediaDatabaseMiddle />
      <MediaDatabaseBottom />
    </>
  );
};

export default MediaDatabase;
