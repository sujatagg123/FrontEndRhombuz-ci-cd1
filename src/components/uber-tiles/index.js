import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils';
import { Change, Tile, TileData, TileDataWrp, TileTitle } from './index.sc';
import ArrowIncrease from '../../assets/icons/ArrowIncrease';
import ArrowDecrease from '../../assets/icons/ArrowDecrease';

const UberTiles = ({
  title,
  data,
  isIncreased,
  change,
  handleClick = () => {},
}) => {
  const { value, fullSuffix } = formatNumber(data, true, true);
  return (
    <Tile onClick={handleClick}>
      <TileDataWrp>
        <TileData>
          {value} {fullSuffix}
        </TileData>
        <Change isIncreased={isIncreased}>
          {isIncreased ? <ArrowIncrease /> : <ArrowDecrease />}
          {change}%
        </Change>
      </TileDataWrp>
      <TileTitle>{title}</TileTitle>
    </Tile>
  );
};

UberTiles.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isIncreased: PropTypes.bool,
  change: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.bool,
};

export default UberTiles;
