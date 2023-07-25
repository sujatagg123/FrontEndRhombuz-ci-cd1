import React, { useState } from 'react';
import Proptypes, { object } from 'prop-types';
import { Img } from '../../assets/img';
import X from '../../assets/icons/X';
import Tabs from '../tabs';
import { PoptabTitleBox } from './mock';
import {
  ButtonBoxwpr,
  ButtonsContainer,
  DrawerContentBox,
  FooterBoxwpr,
  Headerleftwpr,
  Headerwrap,
  HeadingBoxwpr,
  Headingwpr,
  Heaerlblwrp,
  Iconwpr,
  // ItemDeswpr,
  // ItemLabelwpr,
  MainBoxwpr,
  TabsBox,
  TransBtnbox,
  TransBtntxt,
  LeftfootBoxwpr,
  ListBoxwpr,
  SortInfotxt,
} from './index.sc';
import Plus from '../../assets/icons/Plus';
import Trash from '../../assets/icons/Trash';
import { ListBox } from './ListBox';
import { theme } from '../../constants/theme';
// import { giveCheckedfor2dArr } from './utility';
import ItemsBox from './item-box';
import { useSelector } from 'react-redux';

const CustomDrawer = ({
  toggler = () => {},
  heading = 'CUSTOMIZE CANVAS',
  showEditIcon = false,
  isList = false,
  Items,
  CanvasList,
  listInfo = 'Choose Canvas to add article',
  listClick,
}) => {
  console.log(Items, 'sujay I');
  const Titletabs = Items.map((item, i) => ({
    ...item,
    id: i,
    title: <PoptabTitleBox title={item.tabLable} />,
    content: <></>,
  }));

  const [itemIndex, setItemIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState(0);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const handleClick = (index) => {
    setItemIndex(index);
  };

  const handleToggle = () => {
    toggler(false);
  };

  const handleSubmit = () => {
    toggler(false);
  };

  return (
    <>
      <DrawerContentBox>
        <Headerwrap>
          <Headerleftwpr>
            {showEditIcon && <img src={Img.NpCustomis} alt="" />}
            <Heaerlblwrp>{heading}</Heaerlblwrp>
          </Headerleftwpr>
          <Iconwpr onClick={handleToggle}>
            <X color={theme[selectedTheme].primary} size={28} />
          </Iconwpr>
          <TransBtnbox isList={isList}>
            {!isList && (
              <Iconwpr>
                <Plus color={theme.dark.background} />
              </Iconwpr>
            )}
            <TransBtntxt>
              {isList ? 'CREATE NEW CANVAS' : 'Create New'}
            </TransBtntxt>
          </TransBtnbox>
        </Headerwrap>
        <MainBoxwpr>
          {isList && (
            <>
              <SortInfotxt>{listInfo}</SortInfotxt>
              <ListBoxwpr>
                {isList &&
                  CanvasList.map((list, i) => (
                    <ListBox
                      key={i}
                      item={{ title: list.listName, date: list.created }}
                      handleClick={listClick}
                    />
                  ))}
              </ListBoxwpr>
            </>
          )}
          {!isList && (
            <>
              <TabsBox>
                <Tabs
                  activeColor={theme[selectedTheme].primary}
                  inactiveColor={theme[selectedTheme].secondaryText}
                  items={Titletabs}
                  paddingWrapper="0"
                  wraperBorderWidth="0"
                  gapitems="1rem"
                  onChange={handleClick}
                  bottomBorderWidth="3px"
                />
              </TabsBox>
              <HeadingBoxwpr>
                <span>Canvas Name</span>
                <Headingwpr>{Items[itemIndex].tabLable}</Headingwpr>
                <div className="yshj">
                  {checkedItems} items
                  <span>Selected</span>
                </div>
              </HeadingBoxwpr>
              <ItemsBox
                setCheckedItems={setCheckedItems}
                itemIndex={itemIndex}
                selectedItem={Items[itemIndex]}
              />
            </>
          )}
        </MainBoxwpr>
        <FooterBoxwpr>
          {!isList && (
            <>
              <LeftfootBoxwpr>
                {Items[itemIndex].tabVale !== 'spotlight' &&
                  Items[itemIndex].tabVale !== 'my_workspace' && (
                    <>
                      <Trash />
                      <span>Delete this Canvas</span>
                    </>
                  )}
              </LeftfootBoxwpr>
              <ButtonsContainer>
                <ButtonBoxwpr
                  onClick={handleToggle}
                  fontColor={theme[selectedTheme].secondaryText}
                  background={theme[selectedTheme].secondaryBackground}
                >
                  Cancel
                </ButtonBoxwpr>
                <ButtonBoxwpr
                  fontColor={theme[selectedTheme].background}
                  background={theme[selectedTheme].primary}
                  onClick={handleSubmit}
                >
                  Update
                </ButtonBoxwpr>
              </ButtonsContainer>
            </>
          )}
        </FooterBoxwpr>
      </DrawerContentBox>
    </>
  );
};

CustomDrawer.propTypes = {
  toggler: Proptypes.func,
  heading: Proptypes.string,
  showEditIcon: Proptypes.bool,
  isList: Proptypes.bool,
  Items: Proptypes.arrayOf(object),
  CanvasList: Proptypes.arrayOf(object),
  listInfo: Proptypes.string,
  listClick: Proptypes.func,
};

export default CustomDrawer;
