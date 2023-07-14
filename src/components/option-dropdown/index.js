import React, { useState } from 'react';
import { Dropdwnwpr, Itemwpr } from './index.sc';
import PropTypes from 'prop-types';

const OptionDropdwn = ({ items, handleClick, activeIndex }) => {
  const [active, setActive] = useState(activeIndex || 0);
  const handleItem = (index) => {
    setActive(index);
    handleClick(items[index]);
  };
  return (
    <Dropdwnwpr onClick={(e) => e.stopPropagation()}>
      {items.map((item, i) => (
        <Itemwpr
          active={i === active}
          onClick={(e) => handleItem(e, i)}
          key={i}
        >
          {item.label}
        </Itemwpr>
      ))}
    </Dropdwnwpr>
  );
};

OptionDropdwn.propTypes = {
  items: PropTypes.array,
  handleClick: PropTypes.func,
  activeIndex: PropTypes.number,
};

export default OptionDropdwn;
