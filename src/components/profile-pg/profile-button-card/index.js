import React from 'react';
import PropTypes from 'prop-types';

import { ButtonTxt, ButtonWrp, ConnectedBtn } from './index.sc';
import ConnectedBtnIcon from '../../../assets/icons/ConnectedBtnIcon';

const ProfileButtonCard = ({ isConnected = true, setIsConnected }) => {
  function handleClick() {
    setIsConnected(!isConnected);
  }

  return (
    <ButtonWrp>
      <ConnectedBtn onClick={handleClick}>
        {!isConnected ? (
          <ButtonTxt>Connect</ButtonTxt>
        ) : (
          <>
            <ConnectedBtnIcon />
            <ButtonTxt>Connected</ButtonTxt>
          </>
        )}
      </ConnectedBtn>
    </ButtonWrp>
  );
};

ProfileButtonCard.propTypes = {
  isConnected: PropTypes.bool,
  setIsConnected: PropTypes.func,
};

export default ProfileButtonCard;
