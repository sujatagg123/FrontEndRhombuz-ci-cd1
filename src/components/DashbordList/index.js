import React, { useEffect, useState } from 'react';
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
import { Loadbtn, Loadbtnwpr } from '../search-popup/index.sc';
import BookmarkIcon from '../../assets/icons/BookmarkIcon';

const ItemComponent = ({ data, active, handleClick }) => {
  console.log(data);

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
              <Typetxtwpr active={active === dashboard.id}>
                Created By:{' '}
              </Typetxtwpr>
              <Labeltxtwpr active={active === dashboard.id}>
                {dashboard.createBy}{' '}
              </Labeltxtwpr>
              <Typetxtwpr active={active === dashboard.id}>
                | Created On:{' '}
              </Typetxtwpr>
              <Labeltxtwpr active={active === dashboard.id}>
                {dashboard.createOn}
              </Labeltxtwpr>
            </Contentwpr>
          </TextBoxwpr>
          <BookIconwpr>
            <BookmarkIcon
              activeColor={
                active === dashboard.id ? theme.dark.secondaryBackground : ''
              }
            />
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
    // isLoading,
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
  const length = data?.pages[0].data.total;

  const handleActive = (item) => {
    setActive(item.id);
  };

  useEffect(() => {
    if (active === 0 || active === undefined) {
      setActive(data?.pages[0]?.data?.data[0]?.id);
    }
  }, [data?.pages, active, setActive]);

  const handleLoad = () => {
    fetchNextPage();
  };
  const handleFilter = (type) => {
    setFiterType('');
    queryClient.invalidateQueries(['saved-searches', '']);
  };
  return (
    <DashboardListwpr>
      <Dropdownfildwpr onClick={() => setShow(!show)}>
        <ChevronDown color={theme.dark.secondaryText} />
        <span>{title}</span>
        <SearchIcon2 />
        {show && (
          <OptionDropdwn
            items={dashbordtypeList}
            activeIndex={0}
            handleClick={handleFilter}
          />
        )}
      </Dropdownfildwpr>
      <ListBoxwpr>
        {data?.pages?.map((page, i) => (
          <ItemComponent
            key={i}
            data={!page?.data?.data ? [] : page?.data?.data}
            active={active}
            handleClick={handleActive}
          />
        ))}
        {length - data?.pageParams.length * pageLimit > 0 && (
          <Loadbtnwpr>
            <Loadbtn onClick={handleLoad}>
              load more +
              {(data?.pageParams.length + 1) * pageLimit <= length
                ? pageLimit
                : length - data?.pageParams.length * pageLimit}
            </Loadbtn>
          </Loadbtnwpr>
        )}
      </ListBoxwpr>
    </DashboardListwpr>
  );
};

DashboardList.propTypes = {
  active: PropTypes.number,
  setActive: PropTypes.func,
};

export default DashboardList;
