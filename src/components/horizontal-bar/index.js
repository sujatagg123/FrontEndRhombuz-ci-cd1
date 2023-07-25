import React from 'react';
import Proptypes from 'prop-types';
import {
  Bar,
  BarBoxwrpe,
  BarContainer,
  Barwrpr,
  GraphBoxwrpr,
  LabelWrapper,
} from './index.sc';

const setData = (tempdata) => {
  const inData = JSON.parse(JSON.stringify(tempdata));
  const labels = inData?.labels
    ? inData?.labels
    : [{ label: 'label', value: 'value' }];
  const data = inData.data;
  const summary = inData.summary;

  const filteredData = data;
  const formattedData = [];

  for (let i = 0; i < filteredData.length; i++) {
    const items = [];
    for (let j = 0; j < labels.length; j++) {
      const value = filteredData[i][labels[j].value];
      const item = {
        data: filteredData[i],
        color: filteredData[i].color || labels[j].color,
        index: j,
        labelIndex: i,
        labelText: filteredData[i].label,
        label: labels[j].label,
        value,
      };
      items.push(item);
    }
    formattedData.push(items);
  }
  return { formattedData, summary, labels };
};

const HorizontalMultiBar = ({ data, config }) => {
  const preparedData = setData(data);
  const { formattedData } = preparedData;
  return (
    <GraphBoxwrpr>
      {formattedData.map((ele, i) => (
        <BarContainer key={i}>
          <LabelWrapper>{ele[0]?.labelText || ''}</LabelWrapper>
          <BarBoxwrpe>
            {ele.map((item, j) => (
              <Barwrpr
                key={`${i}${j}`}
                first={j === 0}
                last={j === ele.length - 1}
              >
                <Bar
                  width={`${
                    item.value > 100 ? 100 : item.value < 0 ? 0 : item.value
                  }%`}
                  color={item.color}
                />
              </Barwrpr>
            ))}
          </BarBoxwrpe>
        </BarContainer>
      ))}
    </GraphBoxwrpr>
  );
};

HorizontalMultiBar.propTypes = {
  data: Proptypes.object,
  config: Proptypes.object,
};

export default HorizontalMultiBar;
