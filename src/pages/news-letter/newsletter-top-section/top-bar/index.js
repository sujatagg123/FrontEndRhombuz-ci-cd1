import React from 'react';
import { ButtonWpr, CrossButtonWrp, TitleText, TopBarWrp } from './index.sc';
import { Button } from '../../../../components/button';
import { useNavigate } from 'react-router';
import Close from '../../../../assets/icons/Close';

const NewsLetterTopBar = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <TopBarWrp>
      <TitleText>Create Newsletter</TitleText>
      <ButtonWpr>
        <Button title={'SAVE'}></Button>
        <Button title={'PUBLISH'}></Button>
        <CrossButtonWrp onClick={handleClose}>
          <Close color={'#585858'} />
        </CrossButtonWrp>
      </ButtonWpr>
    </TopBarWrp>
  );
};

export default NewsLetterTopBar;
