import React, { useState } from 'react';
import {
  ButtonText,
  ButtonTextTwo,
  CreateDashboardButton,
  DropdownCont,
  DropdownItems,
  DropdownWrap,
  Heading,
  NewsLetterButton,
  Wrpr,
} from './index.sc';
import Add2 from '../../../../assets/icons/Add2';
import DropDownButton from '../../../../assets/icons/DropDownButton';

import { useNavigate } from 'react-router-dom';

export default function DashboardHeaderV2() {
  const [showCustomComponent, setShowCustomComponent] = useState(false);

  const [rotationDegree, setRotationDegree] = useState(0);

  const handleClick = () => {
    setShowCustomComponent(!showCustomComponent);
    setRotationDegree((prevDegree) => prevDegree + 90);
  };

  const navigate = useNavigate();
  const navigateNewsletter = () => {
    navigate('/news-letter');
  };

  const createDashboard = () => {
    navigate('/dashboards');
  };

  return (
    <>
      <Wrpr>
        <Heading>Overview</Heading>
        <NewsLetterButton onClick={navigateNewsletter}>
          <Add2 height={'1rem'} color={'#675EF2'}></Add2>
          <ButtonText>Create Newsletter</ButtonText>
        </NewsLetterButton>
        <DropdownWrap>
          <CreateDashboardButton onClick={handleClick}>
            <Add2
              height={'1rem'}
              color={'#ffffff'}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.5s ease',
                transform: `rotate(${rotationDegree}deg)`,
                borderRadius: '0.5rem 0.5rem 0rem 0rem',
              }}
            ></Add2>
            <ButtonTextTwo>Create Dashboard</ButtonTextTwo>
            <DropDownButton size={'1rem'} color={'#ffffff'}></DropDownButton>
          </CreateDashboardButton>
          {showCustomComponent && (
            <DropdownCont>
              <DropdownItems onClick={createDashboard}>
                Brand & Competition
              </DropdownItems>
              <DropdownItems>People</DropdownItems>
              <DropdownItems>Industry</DropdownItems>
              <DropdownItems>Advace</DropdownItems>
              <DropdownItems>Custom</DropdownItems>
            </DropdownCont>
          )}
        </DropdownWrap>
      </Wrpr>
    </>
  );
}
