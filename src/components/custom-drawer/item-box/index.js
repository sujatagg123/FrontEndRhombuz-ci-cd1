import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { BoxWrp, ItemTypeBoxWrp, ItemTypeWrp } from './index.sc';
import TileSelector from '../../tile-selector';
import { TileComponent } from '../tile-component';
import {
  getDashboardWidgets,
  standardDashboards,
} from '../../../constants/widgets';

const getCheckedBoardList = (boardData, board) => {
  const widgetsList = [];
  const boardWidgets = getDashboardWidgets(board);
  const boardDataComponentList = boardData.map((ele) => ele.component);
  boardWidgets.forEach((ele) => {
    widgetsList.push({
      ...ele,
      checked: boardDataComponentList.includes(ele.value),
    });
  });

  return widgetsList;
};

const getCheckedCount = (data) => {
  let cc = 0;
  data.forEach((ele) => {
    const checkedFilter = ele.filter((item) => item.checked);
    cc += checkedFilter.length;
  });
  return cc;
};

const ItemsBox = ({ itemIndex, setCheckedItems, selectedItem }) => {
  console.log(itemIndex, selectedItem, 'sujay');
  const [items, setItems] = useState();
  const [isCanvas, setIsCanvas] = useState();
  const [boardCheckedList, setBoardCheckedList] = useState({});
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    setItems(JSON.parse(JSON.stringify(selectedItem.data)));
    setIsCanvas(
      selectedItem.tabVale !== 'spotlight' &&
        selectedItem.tabVale !== 'my_workspace'
    );
  }, [selectedItem]);

  useEffect(() => {
    if (isCanvas) {
      const tempObj = {};
      standardDashboards.forEach((board, i) => {
        tempObj[board.value] = getCheckedBoardList(items, board.value);
      });

      setBoardCheckedList(tempObj);
    }
  }, [isCanvas, items, selectedItem.data]);

  useEffect(() => {
    if (isCanvas) {
      setCheckedCount(getCheckedCount(Object.values(boardCheckedList)));
    } else {
      if (items) setCheckedCount(getCheckedCount([items]));
    }
  }, [boardCheckedList, isCanvas, items]);

  useEffect(() => {
    setCheckedItems(checkedCount);
  }, [checkedCount, setCheckedItems]);

  const handleItemClick = (checkedList, board) => {
    console.log(board.value);
    if (isCanvas) {
      setBoardCheckedList({
        ...boardCheckedList,
        [board.value]: checkedList,
      });
    } else {
      setItems(checkedList);
    }
  };

  return (
    <ItemTypeBoxWrp>
      {!isCanvas ? (
        <BoxWrp>
          <TileSelector
            elements={items || []}
            InnerChild={TileComponent}
            handleCheck={handleItemClick}
            board={{ label: '', value: '' }}
          />
        </BoxWrp>
      ) : (
        standardDashboards.map((board, i) => (
          <BoxWrp key={`board-${i}`}>
            <ItemTypeWrp>{board.label}</ItemTypeWrp>
            <TileSelector
              board={board}
              elements={boardCheckedList[board.value] || []}
              InnerChild={TileComponent}
              handleCheck={handleItemClick}
            />
          </BoxWrp>
        ))
      )}
    </ItemTypeBoxWrp>
  );
};

ItemsBox.propTypes = {
  itemIndex: Proptypes.number,
  setCheckedItems: Proptypes.func,
  selectedItem: Proptypes.object,
};

export default ItemsBox;
