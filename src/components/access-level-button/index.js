import React from 'react';
import Proptypes from 'prop-types';
import { BtnText, BtnWrp } from './index.sc';
import { UserCheck } from '../../assets/icons/UserCheck';
import ChevronDown from '../../assets/icons/ChevronDown';
import { theme } from '../../constants/theme';
import { useSelector } from 'react-redux';

const AccessLevelBtn = ({ accessLevel, handleClick, isActive }) => {
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const handleButtonClick = () => {
    handleClick();
  };

  return (
    <BtnWrp onClick={handleButtonClick} clicked={isActive}>
      {accessLevel === 'admin' && (
        <UserCheck
          strokeColor={
            isActive
              ? theme[selectedTheme].settingsButtonBackground
              : theme[selectedTheme].text
          }
        />
      )}
      <BtnText clicked={isActive}>{accessLevel}</BtnText>
      <ChevronDown
        size="17"
        color={
          isActive
            ? theme[selectedTheme].settingsButtonBackground
            : theme[selectedTheme].text
        }
      />
    </BtnWrp>
  );
};

AccessLevelBtn.propTypes = {
  accessLevel: Proptypes.string,
  handleClick: Proptypes.func,
  isActive: Proptypes.bool,
};

export default AccessLevelBtn;
