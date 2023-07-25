import React, { useEffect, useRef, useState } from 'react';
import {
  BookIconwpr,
  Contentwpr,
  DashboardListwpr,
  Dropdownfildwpr,
  ItemComponentwpr,
  Labeltxtwpr,
  ListBoxwpr,
  TextBoxwpr,
  Titletxtwpr,
  Typetxtwpr,
} from './index.sc';
import OptionDropdwn from '../option-dropdown';
import { dashbordtypeList } from './mock';
import ChevronDown from '../../assets/icons/ChevronDown';
import { theme } from '../../constants/theme';
import SearchIcon2 from '../../assets/icons/SearchIcon2';
import { axiosGet } from '../../service';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
// import { Loadbtn, Loadbtnwpr } from '../search-popup/index.sc';
import { useSelector } from 'react-redux';
import CreatedByIcon from '../../assets/icons/CreatedByIcon';
import CreatedOnIcon from '../../assets/icons/CreatedOnIcon';
import BookMarkIcon2 from '../../assets/icons/BookMarkIcon2';
import { debounce } from '../../constants/debounce';

const ItemComponent = ({ data, active, handleClick }) => {
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  return (
    <>
      {data.map((dashboard) => (
        <ItemComponentwpr
          active={active === dashboard.id}
          onClick={() => handleClick(dashboard)}
          key={dashboard.id}
        >
          <TextBoxwpr>
            <Titletxtwpr active={active === dashboard.id}>
              {dashboard.title}
            </Titletxtwpr>
            <Contentwpr>
              <Typetxtwpr active={active === dashboard.id}>Last: </Typetxtwpr>
              <Labeltxtwpr active={active === dashboard.id}>
                {dashboard.updateOn}
              </Labeltxtwpr>
            </Contentwpr>
            <Contentwpr>
              <Labeltxtwpr active={active === dashboard.id}>
                <CreatedByIcon
                  color={
                    active === dashboard.id
                      ? theme[selectedTheme].primary
                      : theme[selectedTheme].secondaryText
                  }
                />
                <Typetxtwpr active={active === dashboard.id}>
                  {dashboard.createBy}{' '}
                </Typetxtwpr>
              </Labeltxtwpr>
              <Labeltxtwpr active={active === dashboard.id}>
                <CreatedOnIcon
                  color={
                    active === dashboard.id
                      ? theme[selectedTheme].primary
                      : theme[selectedTheme].secondaryText
                  }
                />
                <Typetxtwpr active={active === dashboard.id}>
                  {dashboard.createOn}
                </Typetxtwpr>
              </Labeltxtwpr>
            </Contentwpr>
          </TextBoxwpr>
          <BookIconwpr>
            <BookMarkIcon2 />
          </BookIconwpr>
        </ItemComponentwpr>
      ))}
    </>
  );
};

ItemComponent.propTypes = {
  data: PropTypes.array,
  handleClick: PropTypes.func,
  active: PropTypes.number,
};

const DashboardList = ({ active, setActive }) => {
  const title = 'Recent';
  const [show, setShow] = useState(false);
  const [fiterType, setFiterType] = useState('');
  const queryClient = useQueryClient();
  const pageLimit = 15;

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
    ['saved-searches', fiterType, 'list'],
    async ({ pageParam = 1 }) => getSavedSearches({ pageParam, fiterType }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );

  const handleActive = (item) => {
    setActive(item.id);
  };

  useEffect(() => {
    if (active === 0 || active === undefined) {
      setActive(data?.pages[0]?.data?.data[0]?.id);
    }
  }, [data?.pages, active, setActive]);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const listBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const handleLoadClick = debounce(() => {
        fetchNextPage();
      }, 1000);
      const { scrollTop, scrollHeight, clientHeight } = listBoxRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        handleLoadClick();
      }
    };

    const currentListBoxRef = listBoxRef.current;

    currentListBoxRef.addEventListener('scroll', handleScroll);

    return () => {
      currentListBoxRef.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage]);

  const handleFilter = (type) => {
    setFiterType('');
    queryClient.invalidateQueries(['saved-searches', '']);
  };
  return (
    <DashboardListwpr>
      <Dropdownfildwpr onClick={() => setShow(!show)}>
        <ChevronDown color={theme[selectedTheme].text} />
        <span>{title}</span>
        <SearchIcon2 color={theme[selectedTheme].text} />
        {show && (
          <OptionDropdwn
            items={dashbordtypeList}
            activeIndex={0}
            handleClick={handleFilter}
          />
        )}
      </Dropdownfildwpr>
      <ListBoxwpr ref={listBoxRef}>
        {data?.pages?.map((page, i) => (
          <ItemComponent
            key={i}
            data={!page?.data?.data ? [] : page?.data?.data}
            active={active}
            handleClick={handleActive}
          />
        ))}
        {isLoading && 'Loading...'}
      </ListBoxwpr>
    </DashboardListwpr>
  );
};

DashboardList.propTypes = {
  active: PropTypes.number,
  setActive: PropTypes.func,
};

export default DashboardList;
