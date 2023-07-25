import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentText,
  ContentWrp,
  Line,
  MainWrp,
  NotificationDot,
  TimeText,
  TimeWrp,
  TitleText,
  TitleWrp,
} from './index.sc';
import Clock from '../../../assets/icons/Clock';
import { timeAgo } from '../../../utils';

const IconNotificationComponent = ({ data }) => {
  return (
    <MainWrp>
      <TitleWrp>
        <TitleText>{data?.title}</TitleText>
        <NotificationDot />
      </TitleWrp>
      <ContentWrp>
        {data?.icon}
        <ContentText>{data?.content}</ContentText>
      </ContentWrp>
      <TimeWrp>
        <Clock />
        <TimeText>{timeAgo(data?.timeStamp)}</TimeText>
      </TimeWrp>
      <Line></Line>
    </MainWrp>
  );
};

IconNotificationComponent.propTypes = {
  data: PropTypes.object,
};

export default IconNotificationComponent;
