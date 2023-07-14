import React from 'react';
import { TextContent, TextContentWrp, TextHeading } from './index.sc';
import Proptypes from 'prop-types';

const TextItem = ({ title, description }) => {
  return (
    <TextContentWrp>
      <TextHeading>{title}</TextHeading>
      <TextContent>{description}</TextContent>
    </TextContentWrp>
  );
};

TextItem.propTypes = {
  title: Proptypes.string,
  description: Proptypes.string,
};

export default TextItem;
