import React from 'react';
import Proptypes from 'prop-types';
import {
  SubTextLabel,
  //   SummaryContent,
  SummaryTitle,
  SummaryValue,
  SummaryValuesCon,
  SummaryViewWrapper,
} from './index.sc';

const GraphSummaryView = ({ data }) => {
  const { title = '', subText = '', value } = data;
  return (
    <SummaryViewWrapper>
      <SummaryTitle>{title}</SummaryTitle>
      <SummaryValuesCon>
        <SubTextLabel>{subText}</SubTextLabel>
        <SummaryValue>{value}</SummaryValue>
      </SummaryValuesCon>
    </SummaryViewWrapper>
  );
};

export default GraphSummaryView;

GraphSummaryView.propTypes = {
  data: Proptypes.object,
};
