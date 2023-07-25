import React, { useEffect, useState } from 'react';
import AppBG from '../../components/app-bg';
import AppHeader from '../../components/app-header';
import {
  ContentWrp,
  CrossButtonWrp,
  MainWrp,
  SubHeader,
  SubHeaderText,
} from './index.sc';
import { useNavigate, useParams } from 'react-router-dom';
import SettingsBody from './settings-body';
import AccessLevelPopup from '../../components/access-level-popup';
import { useSelector } from 'react-redux';
import { theme } from '../../constants/theme';
import AppFooter from '../../components/app-footer';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import { Button } from '../../components/button';
import Plus from '../../assets/icons/Plus';

const Settings = () => {
  const { tab1 } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tab1) {
      navigate('/settings/myaccount');
    }
  }, [navigate, tab1]);
  const [accessLevelPopupIsOpen, setAccessLevelPopupIsOpen] = useState(false);

  function handlePopupClick() {
    setAccessLevelPopupIsOpen(!accessLevelPopupIsOpen);
  }

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const handleClose = () => {
    navigate('/');
  };
  return (
    <>
      <AppBG bg1h={'15%'} bg1={theme[selectedTheme].backgroundColor} />
      <AccessLevelPopup
        isOpen={accessLevelPopupIsOpen}
        handlePopupClick={handlePopupClick}
      />
      <AppHeader />
      <MainWrp>
        <SubHeader>
          <ContentWrp>
            <CrossButtonWrp onClick={handleClose}>
              <ArrowLeft
                color={theme[selectedTheme].text}
                width="32"
                height="32"
              />
            </CrossButtonWrp>
            <SubHeaderText>Settings</SubHeaderText>
          </ContentWrp>
          <Button
            title="Create Dashboard"
            backgroundColor={theme[selectedTheme].primary}
            icon={<Plus />}
          ></Button>
        </SubHeader>
        <SettingsBody tab1={tab1} handlePopupClick={handlePopupClick} />
      </MainWrp>
      <AppFooter />
    </>
  );
};

export default Settings;
