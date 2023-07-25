import React from 'react';
import {
  ContentWrp,
  CrossButtonWrp,
  JournalistText,
  MainWrp,
  MediaText,
  RightSideWrp,
  SearchBar,
  TextWrp,
  TopBarWrp,
} from './index.sc';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../constants/theme';
import { useSelector } from 'react-redux';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import { Button } from '../button';
import Plus from '../../assets/icons/Plus';
import { SearchIcon } from '../../assets/icons/SearchIcon';

const MediaDatabaseMiddle = ({ name }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  return (
    <MainWrp>
      <ContentWrp>
        <CrossButtonWrp onClick={handleClose}>
          <ArrowLeft color={theme[selectedTheme].text} width="32" height="32" />
        </CrossButtonWrp>
        <TextWrp>
          <MediaText>Media Database</MediaText>
          {name && <JournalistText>/ {name}</JournalistText>}
        </TextWrp>
      </ContentWrp>
      <RightSideWrp>
        <TopBarWrp>
          <SearchBar placeholder="Search" />
          <SearchIcon width="18" height="18" />
        </TopBarWrp>
        <Button
          title="Create Dashboard"
          backgroundColor={theme[selectedTheme].primary}
          icon={<Plus />}
        ></Button>
      </RightSideWrp>
    </MainWrp>
  );
};

MediaDatabaseMiddle.propTypes = {
  name: Proptypes.string,
};

export default MediaDatabaseMiddle;
