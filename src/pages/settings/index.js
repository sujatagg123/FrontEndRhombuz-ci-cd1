import React, { useState } from 'react';
import AppBG from '../../components/app-bg';
import AppHeader from '../../components/app-header';
import ArrowLeftCircle from '../../assets/icons/ArrowLeftCircle';
import { BtnWrp, ContentWrp, SubHeader, SubHeaderText } from './index.sc';
import { useNavigate } from 'react-router-dom';
import SettingsBody from './settings-body';
import AccessLevelPopup from '../../components/access-level-popup';

const Settings = () => {
  const navigate = useNavigate();

  const [accessLevelPopupIsOpen, setAccessLevelPopupIsOpen] = useState(false);

  function handlePopupClick() {
    setAccessLevelPopupIsOpen(!accessLevelPopupIsOpen);
  }

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <>
      <AppBG />
      <AccessLevelPopup
        isOpen={accessLevelPopupIsOpen}
        handlePopupClick={handlePopupClick}
      />
      <AppHeader />
      <SubHeader>
        <ContentWrp onClick={handleClose}>
          <BtnWrp>
            <ArrowLeftCircle />
          </BtnWrp>
          <SubHeaderText>Settings</SubHeaderText>
        </ContentWrp>
      </SubHeader>
      <SettingsBody handlePopupClick={handlePopupClick} />
    </>
  );
};

export default Settings;
