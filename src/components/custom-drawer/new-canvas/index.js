import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { Imgwpr } from '../../home-page/tab-section/index.sc';
import {
  ButtonBoxwpr,
  ButtonsContainer,
  DrawerContentBox,
  FooterBoxwpr,
  Headerleftwpr,
  Headerwrap,
  Heaerlblwrp,
  Iconwpr,
  LeftfootBoxwpr,
  MainBoxwpr,
  // WriteIconwpr,
} from '../index.sc';
import X from '../../../assets/icons/X';
import { Img } from '../../../assets/img';
import {
  // CanvasBoxwpr,
  // CanvasContainer,
  CanvasDescriptionwpr,
  CanvasTitlewpr,
  CanvasTypelabelwpr,
  CavasTypewpr,
  InputLabelBox,
  InputLabelwpr,
  Inputwpr,
  SubTitlewpr,
  Sublablewpr,
} from './index.sc';
import { theme } from '../../../constants/theme';
import { axiosGet } from '../../../service';
import { useQuery } from '@tanstack/react-query';
import TileSelector from '../../tile-selector';
import { formatNumber } from '../../../utils';
// import WriteIcon from '../../../assets/icons/WriteIcon';
// import TileSelector from '../../tile-selector';
// import { giveCheckedfor2dArr } from '../utility';

const getCheckItems = (data) => {
  return [
    ...data['recent-search'].filter((obj) => obj.checked),
    ...data['saved-search'].filter((obj) => obj.checked),
  ];
};

const InnerChild = ({ data }) => {
  return (
    <>
      <CanvasTitlewpr>{data.title || data.label} </CanvasTitlewpr>
      <CanvasDescriptionwpr>
        {data.description || data.des}
      </CanvasDescriptionwpr>
      <SubTitlewpr fontWeight={600}>
        {formatNumber(data.results)} <span>Results</span>
      </SubTitlewpr>
    </>
  );
};

InnerChild.propTypes = {
  data: Proptypes.object.isRequired,
};

const NewCanDrawer = ({
  toggler,
  heading = 'Create New Canvas',
  showEditIcon = false,
}) => {
  const handleToggle = () => {
    toggler(false);
  };

  const [checkedItems, setCheckedItems] = useState([]);

  const getSavedSearchData = () => {
    return axiosGet('/saved-search', {
      limit: 1000,
      page: 1,
    });
  };

  const getRecentSearchData = () => {
    return axiosGet('/recent-search', {});
  };

  const {
    // isLoading,
    // error: articleerror,
    data: savedSearchData,
    // isFetching,
  } = useQuery({
    queryKey: ['saved-search-data'],
    queryFn: () => getSavedSearchData(),
    refetchOnWindowFocus: false,
  });

  const {
    // isLoading,
    // error: articleerror,
    data: recentSearchData,
    // isFetching,
  } = useQuery({
    queryKey: ['recent-search-data'],
    queryFn: () => getRecentSearchData(),
    refetchOnWindowFocus: false,
  });

  const type = [
    { label: 'recent-search', value: 'Recent Searches' },
    { label: 'saved-search', value: 'Saved Searches' },
  ];

  const [items, setItems] = useState({
    'recent-search': [],
    'saved-search': [],
  });

  useEffect(() => {
    setItems({
      'recent-search': recentSearchData?.data?.data,
      'saved-search': savedSearchData?.data?.data,
    });
  }, [recentSearchData?.data?.data, savedSearchData?.data?.data]);

  useEffect(() => {
    if (items['recent-search'] && items['saved-search']) {
      setCheckedItems(getCheckItems(items));
    }
  }, [items]);

  const handleCheckItems = (checkedList, board) => {
    setItems({
      ...items,
      [board.label]: checkedList,
    });
  };

  const handleSubmit = () => {
    console.log(checkedItems);
    toggler(false);
  };

  return (
    <DrawerContentBox>
      <Headerwrap>
        <Headerleftwpr>
          {showEditIcon && <Imgwpr src={Img.NpCustomis} alt="" />}
          <Heaerlblwrp>{heading}</Heaerlblwrp>
        </Headerleftwpr>
        <Iconwpr onClick={handleToggle}>
          <X color={theme.dark.primary} size={28} />
        </Iconwpr>
      </Headerwrap>
      <MainBoxwpr>
        <InputLabelBox>
          <Sublablewpr>Canvas Name</Sublablewpr>
          <InputLabelwpr>
            <Inputwpr placeholder="Enter Canvas Name" />
          </InputLabelwpr>
        </InputLabelBox>
        {type?.map((ele, i) => (
          <CavasTypewpr key={i}>
            <CanvasTypelabelwpr>{ele.value}</CanvasTypelabelwpr>
            <TileSelector
              elements={items[ele.label] ? items[ele.label] : []}
              board={ele}
              handleCheck={handleCheckItems}
              InnerChild={InnerChild}
            />
          </CavasTypewpr>
        ))}
      </MainBoxwpr>
      <FooterBoxwpr>
        <LeftfootBoxwpr></LeftfootBoxwpr>
        <ButtonsContainer>
          <ButtonBoxwpr
            onClick={handleToggle}
            fontColor={theme.dark.secondaryText}
            background={theme.dark.secondaryBackground}
          >
            CANCEL
          </ButtonBoxwpr>
          <ButtonBoxwpr
            fontColor={theme.dark.text}
            background={theme.dark.primary}
            onClick={handleSubmit}
          >
            CREATE
          </ButtonBoxwpr>
        </ButtonsContainer>
      </FooterBoxwpr>
    </DrawerContentBox>
  );
};

NewCanDrawer.propTypes = {
  toggler: Proptypes.func.isRequired,
  heading: Proptypes.string,
  showEditIcon: Proptypes.bool,
};

export default NewCanDrawer;
