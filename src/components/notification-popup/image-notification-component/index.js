import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentText,
  ContentWrp,
  ImageWrp,
  Line,
  MainWrp,
  TextWrp,
  TimeText,
  TimeWrp,
  TitleText,
  Wrp,
} from './index.sc';
import Clock from '../../../assets/icons/Clock';
import { timeAgo } from '../../../utils';

const ImageNotificationComponent = ({ data }) => {
  return (
    <MainWrp>
      <Wrp>
        <ContentWrp>
          <TextWrp>
            <TitleText>{data?.title}</TitleText>
            <ContentText>{data?.content}</ContentText>
          </TextWrp>
          <ImageWrp url={data?.image}></ImageWrp>
        </ContentWrp>
        <TimeWrp>
          <Clock />
          <TimeText>{timeAgo(data?.timeStamp)}</TimeText>
        </TimeWrp>
        <Line></Line>
      </Wrp>
    </MainWrp>
  );
};

ImageNotificationComponent.propTypes = {
  data: PropTypes.object,
};

export default ImageNotificationComponent;
