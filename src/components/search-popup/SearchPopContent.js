import React, { useState } from 'react';
import Proptypes, { object } from 'prop-types';
import {
  ButtonBoxwpr,
  Inputwrpr,
  Labelwrpr,
  MainTitleBox,
  MainTitlewrpr,
  SearchHeader,
  SearchPopwrpr,
  Searchwpr,
} from './index.sc';
import { SearchIcon } from '../../assets/icons/SearchIcon';
// import { Save } from '../../assets/icons/Save';
import { ContentBox } from './ContentBox';
import Tabs from '../tabs';
import { theme } from '../../constants/theme';
import { PoptabTitleBox } from '../custom-drawer/mock';
import ListView from '../../assets/icons/ListView';
import GridView from '../../assets/icons/GridView';
import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosGet } from '../../service';
// import { NewsltrContentBox } from '../newsletter-popup/NewsltrContentBox';

const SearchPopup = ({
  mainTitle = 'Saved Searches',
  placeholder = 'Search',
  isNewsletter = false,
  toggler,
  handleClick = () => {},
  isPopup = true,
  Frames,
  isIcons = true,
}) => {
  const [checkeditems, setCheckedItems] = useState([]);
  // const queryClient = useQueryClient();
  const pageLimit = 10;
  const [fiterType, setFiterType] = useState('');

  const getSavedSearches = ({ pageParam, fiterType }) => {
    return axiosGet('/saved-search', {
      limit: pageLimit,
      page: pageParam,
      fiterType,
    });
  };

  const {
    // isLoading,
    // error,
    data,
    // isFetching,
    isLoading,
    // hasNextPage,
    fetchNextPage,
    // isFetchingNextPage,
  } = useInfiniteQuery(
    ['saved-searches', fiterType],
    async ({ pageParam = 1 }) => getSavedSearches({ pageParam, fiterType }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );

  const length = data?.pages[0].data.total;

  console.log(data, 'saved-searches');

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const Titletabs = [
    {
      id: 0,
      title: <PoptabTitleBox title={`SAVED (${length || '00'})`} />,
      content: <></>,
    },
    {
      id: 1,
      title: <PoptabTitleBox title="SHARED WITH ME (4)" />,
      content: <></>,
    },
  ];

  const handleFilter = (type) => {
    setFiterType(type);
    // queryClient.invalidateQueries(['saved-searches', type]);
  };

  return (
    <SearchPopwrpr isNewsletter={isNewsletter}>
      {isPopup && (
        <SearchHeader>
          <MainTitleBox isNewsletter={isNewsletter}>
            <MainTitlewrpr isNewsletter={isNewsletter}>
              {mainTitle}
            </MainTitlewrpr>
            {!isNewsletter && <ButtonBoxwpr>Create New</ButtonBoxwpr>}
          </MainTitleBox>
          <Tabs
            activeColor={theme.dark.primary}
            inactiveColor={theme.dark.secondaryText}
            items={Titletabs}
            paddingWrapper={isNewsletter ? '0.5rem 0 0' : '0.5rem 1.25rem 0'}
            wraperBorderWidth="0"
            gapitems="1rem"
            bottomBorderWidth="3px"
          />
          <Searchwpr isNewsletter={isNewsletter}>
            <Labelwrpr isNewsletter={isNewsletter}>
              <SearchIcon />
              <Inputwrpr placeholder={placeholder} />
            </Labelwrpr>
            {false && <ListView />}
            {false && <GridView />}
          </Searchwpr>
        </SearchHeader>
      )}
      <ContentBox
        data={data}
        checkeditems={checkeditems}
        isPopup={isPopup}
        Frames={Frames}
        handleLoad={handleLoadMore}
        handleCheckedItems={setCheckedItems}
        handleFilter={handleFilter}
        isLoading={isLoading}
        handleClick={handleClick}
        toggler={toggler}
        isIcons={isIcons}
        isCheckBox={!isNewsletter}
        rightWidth={isNewsletter ? '40%' : ''}
      />
    </SearchPopwrpr>
  );
};

SearchPopup.propTypes = {
  mainTitle: Proptypes.string,
  placeholder: Proptypes.string,
  isNewsletter: Proptypes.bool,
  toggler: Proptypes.func,
  handleClick: Proptypes.func,
  isPopup: Proptypes.bool,
  Frames: Proptypes.arrayOf(object),
  isIcons: Proptypes.bool,
};

export default SearchPopup;
