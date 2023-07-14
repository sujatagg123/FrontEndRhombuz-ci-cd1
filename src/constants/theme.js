import backgroundImageLight from '../assets/img/bg/bg_light.png';
import backgroundImageDark from '../assets/img/homePageBG1.png';
import AMXDark from '../assets/img/app/logoDark.svg';

export const theme = {
  light: {
    primary: '#675ef2',
    background: '#FFFFFF',
    text: '#656B8A',
    secondaryBackground: '#F6F7FB',
    backgroundImage: backgroundImageLight,
    logo: AMXDark,
    logoText: '#ffffff',
    settingsButtonBackground: '#e8eaee',
  },
  dark: {
    primary: '#2E68FF',
    background: '#000000',
    text: '#FFFFFF',
    secondaryText: '#000000',
    secondaryBackground: '#FFFFFF',
    backgroundImage: backgroundImageDark,
    logo: AMXDark,
    logoText: '#ffffff',
  },
  fontFamily: 'Inter',
  responsive: {
    mobile: '768px',
    tab: '998px',
  },
};
