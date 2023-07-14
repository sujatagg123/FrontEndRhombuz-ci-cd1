import React from 'react';
import { IconWrp, RotateWrp, ToolBarWrp } from './index.sc';
import Proptypes from 'prop-types';
import ToolBarSplit from '../../../../../assets/icons/ToolBarSplit';
import ToolBarArrowUp from '../../../../../assets/icons/ToolBarArrowUp';
import ToolBarTrash from '../../../../../assets/icons/ToolBarTrash';

const ToolBar = ({ splitRow, arrowClick, deleteClick }) => {
  return (
    <ToolBarWrp>
      <IconWrp onClick={splitRow}>
        <ToolBarSplit />
      </IconWrp>
      <IconWrp onClick={() => arrowClick('up')}>
        <ToolBarArrowUp />
      </IconWrp>
      <RotateWrp onClick={() => arrowClick('down')}>
        <ToolBarArrowUp />
      </RotateWrp>
      <IconWrp onClick={deleteClick}>
        <ToolBarTrash />
      </IconWrp>
    </ToolBarWrp>
  );
};

ToolBar.propTypes = {
  splitRow: Proptypes.func,
  arrowClick: Proptypes.func,
  deleteClick: Proptypes.func,
};

export default ToolBar;
