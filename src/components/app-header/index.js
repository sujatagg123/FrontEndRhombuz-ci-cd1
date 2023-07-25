import React, { useState } from 'react';
import {
  AppHeaderLeft,
  AppHeaderRight,
  AppHeaderWrp,
  AppLogo,
  AppLogoSpan,
  NavIcon,
  NavUserProfile,
  NavUserProfileImg,
  NavUserProfileTitle,
} from './index.sc';
// import profileImage from '../../assets/img/nav/Ellipse 18.png';
import helpIcon from '../../assets/img/nav/help-circle.svg';
import bellIcon from '../../assets/img/nav/bell.svg';
import { useSelector } from 'react-redux';
import NotificationPopup from '../notification-popup';

const AppHeader = () => {
  const [notificationPopupIsOpen, setNotificationPopupIsOpen] = useState(false);

  const user = useSelector((store) => {
    return store?.user?.data || {};
  });

  const handleNotificationClick = () => {
    setNotificationPopupIsOpen(!notificationPopupIsOpen);
  };

  const { firstName, image } = user;

  return (
    <>
      <AppHeaderWrp>
        <AppHeaderLeft>
          <AppLogo to="/">
            <AppLogoSpan /> AlphaMetricX
          </AppLogo>
        </AppHeaderLeft>
        <AppHeaderRight>
          <NavIcon src={helpIcon}></NavIcon>
          <NavIcon src={bellIcon} onClick={handleNotificationClick}></NavIcon>
          <NavUserProfile>
            <NavUserProfileTitle>{firstName}</NavUserProfileTitle>
            <NavUserProfileImg profileImage={image}></NavUserProfileImg>
          </NavUserProfile>
        </AppHeaderRight>
      </AppHeaderWrp>
      <NotificationPopup
        notificationPopupIsOpen={notificationPopupIsOpen}
        handleNotificationPopup={handleNotificationClick}
      />
    </>
  );
};

export default AppHeader;
