import backgroundImageLight from '../assets/img/bg/bg_light.png';
import backgroundImageDark from '../assets/img/homePageBG1.png';
import AMXDark from '../assets/img/app/logoDark.svg';
import AMXBg from '../assets/img/bg/bg_sr.svg';

export const theme = {
  light: {
    primary: '#675ef2',
    background: '#FFFFFF',
    text: '#656B8A',
    secondaryText: '#161A34',
    darkText: '#161A34',
    secondaryBackground: '#F6F7FB',
    backgroundImage: backgroundImageLight,
    logo: AMXDark,
    logoText: '#ffffff',
    settingsButtonBackground: '#ffffff',
    backgroundColor: AMXBg,
    tabInactive: '#161A34',
    activeStatusBtnBg: 'rgba(97, 212, 166, 0.2)',
    inActiveStatusBtnBg: ' rgba(255, 37, 37, 0.10)',
    activeStatusBtnText: '#00CE75',
    inActiveStatusBtnText: '#FF2525',
    borders: '#c3c7d9',
    tableHeaderColor: '#5c5e60',
    closeButton: '#585858',
    shadow: '#e8e8e8',
    newsLetterBackground: '#eceff3',
    newsLetterButtonBorder: '#535770',
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
