import React from 'react';
import Proptypes from 'prop-types';
import { LeftbarItem, LeftbarWrp } from './index.sc';
import { leftbarItems } from '../utils';

const Leftbar = ({ selected, onLeftbarTabChange }) => {
  const handleSelectTab = (tab) => {
    onLeftbarTabChange && onLeftbarTabChange(tab);
  };
  return (
    <LeftbarWrp>
      {leftbarItems.map((item, i) => (
        <LeftbarItem
          key={i}
          className={selected === item.value ? 'active' : ''}
          onClick={() => handleSelectTab(item.value)}
        >
          {item.label}
        </LeftbarItem>
      ))}
    </LeftbarWrp>
  );
};

export default Leftbar;

Leftbar.propTypes = {
  selected: Proptypes.string,
  onLeftbarTabChange: Proptypes.func,
};
