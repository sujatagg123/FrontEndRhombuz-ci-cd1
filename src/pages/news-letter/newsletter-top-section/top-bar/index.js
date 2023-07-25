import React from 'react';
import {
  BtnWrp,
  ButtonWpr,
  CrossButtonWrp,
  TitleText,
  TopBarWrp,
} from './index.sc';
import { Button } from '../../../../components/button';
import { useNavigate } from 'react-router';
import { theme } from '../../../../constants/theme';
import { useSelector } from 'react-redux';
import PublishButton from '../../../../assets/icons/PublishButton';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';

const NewsLetterTopBar = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  return (
    <TopBarWrp>
      <ButtonWpr>
        <CrossButtonWrp onClick={handleClose}>
          <ArrowLeft color={'#656B8A'} width="2rem" />
        </CrossButtonWrp>
        <TitleText>Create Newsletter</TitleText>
      </ButtonWpr>
      <BtnWrp>
        <Button
          title="Save"
          backgroundColor={theme[selectedTheme].background}
          color={theme[selectedTheme].secondaryText}
          border={theme[selectedTheme].newsLetterButtonBorder}
          disable={false}
        ></Button>
        <Button
          title="Publish"
          backgroundColor={theme[selectedTheme].primary}
          icon={<PublishButton />}
        ></Button>
      </BtnWrp>
    </TopBarWrp>
  );
};

export default NewsLetterTopBar;
