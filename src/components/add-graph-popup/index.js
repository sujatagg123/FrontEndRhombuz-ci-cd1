import React, { useState } from 'react';
import Proptypes, { object } from 'prop-types';
import { ButtonBoxwpr, Titlewpr } from './index.sc';
import {
  ButtonsContainer,
  DrawerContentBox,
  FooterBoxwpr,
  Headerleftwpr,
  Headerwrap,
  Heaerlblwrp,
  Iconwpr,
  LeftfootBoxwpr,
  MainBoxwpr,
} from '../custom-drawer/index.sc';
import { Imgwpr } from '../home-page/tab-section/index.sc';
import X from '../../assets/icons/X';
import {
  CanvasTypelabelwpr,
  CavasTypewpr,
  InputLabelBox,
  Sublablewpr,
} from '../custom-drawer/new-canvas/index.sc';
import { theme } from '../../constants/theme';

import { Img } from '../../assets/img';
import TileSelector from '../tile-selector';
import { TileComponent } from '../custom-drawer/tile-component';
import { useSelector } from 'react-redux';
import { mediaType } from '../../graphs/utils/mockData';

const graphData = {
  title: 'Media Type',
  subTitle: 'Total Articles',
  slotType: 'half',
  component: 'media_type',
  graphType: 'column',
  data: mediaType,
};

const AddGraphpop = ({
  toggler,
  heading = 'Add Graph',
  canvas,
  showEditIcon = false,
  title = 'GUCCI',
  onSubmit,
}) => {
  const handleToggle = () => {
    toggler(false);
  };
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });
  const [checkedItem, setCheckedItem] = useState();

  const handleClick = (item) => {
    if (item.checked) {
      setCheckedItem(item);
    } else {
      setCheckedItem(null);
    }
  };

  const handleSubmit = () => {
    if (checkedItem) {
      onSubmit({ checkedItem, ...graphData });
      toggler(false);
    }
  };

  return (
    <DrawerContentBox>
      <Headerwrap>
        <Headerleftwpr>
          {showEditIcon && <Imgwpr src={Img.NpCustomis} alt="" />}
          <Heaerlblwrp>{heading}</Heaerlblwrp>
        </Headerleftwpr>
        <Iconwpr onClick={handleToggle}>
          <X color={theme[selectedTheme].primary} size={28} />
        </Iconwpr>
      </Headerwrap>
      <MainBoxwpr>
        <InputLabelBox>
          <Sublablewpr>Selected Search</Sublablewpr>
          <Titlewpr>{title || 'TITLE'}</Titlewpr>
        </InputLabelBox>
        <CavasTypewpr>
          <CanvasTypelabelwpr>Choose Graph</CanvasTypelabelwpr>
          <TileSelector
            elements={canvas}
            InnerChild={TileComponent}
            handleCheck={handleClick}
            isMultiselect={false}
            board={{ label: '', value: '' }}
          />
        </CavasTypewpr>
      </MainBoxwpr>
      <FooterBoxwpr>
        <LeftfootBoxwpr></LeftfootBoxwpr>
        <ButtonsContainer>
          <ButtonBoxwpr
            onClick={handleToggle}
            fontColor={theme[selectedTheme].secondaryText}
            background={theme[selectedTheme].secondaryBackground}
          >
            CANCEL
          </ButtonBoxwpr>
          <ButtonBoxwpr
            fontColor={theme[selectedTheme].background}
            background={theme[selectedTheme].primary}
            onClick={handleSubmit}
          >
            ADD
          </ButtonBoxwpr>
        </ButtonsContainer>
      </FooterBoxwpr>
    </DrawerContentBox>
  );
};

AddGraphpop.propTypes = {
  toggler: Proptypes.func.isRequired,
  heading: Proptypes.string,
  canvas: Proptypes.arrayOf(object),
  showEditIcon: Proptypes.bool,
  title: Proptypes.string,
  onSubmit: Proptypes.func.isRequired,
};

export default AddGraphpop;
