import React from 'react';
import {
  BtnWrp,
  ContentWrp,
  JournalistText,
  MainWrp,
  MediaText,
} from './index.sc';
import ArrowLeftCircle from '../../assets/icons/ArrowLeftCircle';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MediaDatabaseMiddle = ({ name }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <MainWrp>
      <ContentWrp onClick={handleClose}>
        <BtnWrp>
          <ArrowLeftCircle />
        </BtnWrp>
        <MediaText>Media Database</MediaText>
        {name && <JournalistText>/ {name}</JournalistText>}
      </ContentWrp>
    </MainWrp>
  );
};

MediaDatabaseMiddle.propTypes = {
  name: Proptypes.string,
};

export default MediaDatabaseMiddle;
