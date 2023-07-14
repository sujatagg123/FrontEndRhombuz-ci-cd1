import React from 'react';
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

const AppHeader = () => {
  const user = useSelector((store) => {
    return store?.user?.data || {};
  });

  const { firstName, image } = user;

  return (
    <AppHeaderWrp>
      <AppHeaderLeft>
        <AppLogo to="/">
          <AppLogoSpan /> AlphaMetricX
        </AppLogo>
      </AppHeaderLeft>
      <AppHeaderRight>
        <NavIcon src={helpIcon}></NavIcon>
        <NavIcon src={bellIcon}></NavIcon>
        <NavUserProfile>
          <NavUserProfileTitle>{firstName}</NavUserProfileTitle>
          <NavUserProfileImg profileImage={image}></NavUserProfileImg>
        </NavUserProfile>
      </AppHeaderRight>
    </AppHeaderWrp>
  );
};

export default AppHeader;
