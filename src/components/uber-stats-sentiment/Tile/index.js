import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../../utils';
import {
  ArticleTypeWrp,
  Change,
  Tile,
  TileData,
  TileDataWrp,
  TypeText,
  TypeWrp,
} from './index.sc';

const emojiList = [
  {
    sentiment: 'positive',
    emoji: '😊',
  },
  {
    sentiment: 'negative',
    emoji: '😟',
  },
  {
    sentiment: 'neutral',
    emoji: '😐',
  },
];

const UberStatsSentimentTile = ({
  title,
  data,
  isIncreased,
  change,
  sentimentType,
  handleClick = () => {},
}) => {
  const { value, fullSuffix } = formatNumber(data, true, true);

  const emojiType = (sentiment) => {
    const emoji = emojiList.find((type) => type.sentiment === sentiment);

    return emoji.emoji;
  };

  return (
    <Tile onClick={handleClick}>
      <TileDataWrp>
        <TileData>
          {value} {fullSuffix}
        </TileData>
        <TypeWrp isIncreased={isIncreased}>
          <ArticleTypeWrp sentimentType={sentimentType}>
            {emojiType(sentimentType)}
            <TypeText sentimentType={sentimentType}>
              {sentimentType} Articles
            </TypeText>
          </ArticleTypeWrp>
          <Change>{change} %</Change>
        </TypeWrp>
      </TileDataWrp>
    </Tile>
  );
};

UberStatsSentimentTile.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isIncreased: PropTypes.bool,
  change: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.bool,
  sentimentType: PropTypes.string,
};

export default UberStatsSentimentTile;
