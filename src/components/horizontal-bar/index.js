import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import {
  Bar,
  BarBoxwrpe,
  BarContainer,
  Barwrpr,
  GraphBoxwrpr,
  Infowrpr,
  Justwpr,
  LabelWrapper,
  Square,
  Textwpr,
} from './index.sc';

const HorizontalMultiBar = ({ data, shoPoAndNe = false }) => {
  const [width, setWidth] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setWidth(false);
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 200);
    setTimeout(() => {
      setWidth(true);
    }, 300);
  }, []);

  return (
    <GraphBoxwrpr>
      {data.map((theme, i) => (
        <BarContainer key={i}>
          <LabelWrapper>{theme.label}</LabelWrapper>
          <BarBoxwrpe>
            <Barwrpr style={{ justifyContent: 'flex-end' }}>
              {show && (
                <Bar width={width ? theme.negative : '00'} color="#ED3F47" />
              )}
            </Barwrpr>
            <Barwrpr>
              {show && (
                <Bar width={width ? theme.positive : '0'} color="#00CE75" />
              )}
            </Barwrpr>
          </BarBoxwrpe>
        </BarContainer>
      ))}
      {shoPoAndNe && (
        <Infowrpr>
          <Justwpr>
            <Square background="#00CE75" />
            <Textwpr>Positive</Textwpr>
          </Justwpr>
          <Justwpr>
            <Square background="#ED3F47" />
            <Textwpr>Negative</Textwpr>
          </Justwpr>
        </Infowrpr>
      )}
    </GraphBoxwrpr>
  );
};

HorizontalMultiBar.propTypes = {
  data: Proptypes.array,
  shoPoAndNe: Proptypes.bool,
};

export default HorizontalMultiBar;
