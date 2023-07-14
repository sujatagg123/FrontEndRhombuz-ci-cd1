import React from 'react';
// import Tabs from 'tabs';

import Proptypes from 'prop-types';
import styled from 'styled-components';

const TitleBoxwpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  padding-bottom: 0.625rem;
`;

const Titlewrpr = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const Deswpr = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #585858;
  margin-top: 0.25rem;
`;

const TabLabel = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px;
  gap: 0.25rem;
  padding-bottom: 0.625rem;
`;

export const TitleBox = ({ title, des }) => {
  return (
    <TitleBoxwpr>
      <Titlewrpr>{title}</Titlewrpr>
      {<Deswpr>{des}</Deswpr>}
    </TitleBoxwpr>
  );
};

export const TabTitle = ({ title }) => {
  return <TabLabel>{title}</TabLabel>;
};

TitleBox.propTypes = {
  title: Proptypes.string.isRequired,
  des: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
};

TabTitle.propTypes = {
  title: Proptypes.string.isRequired,
};
