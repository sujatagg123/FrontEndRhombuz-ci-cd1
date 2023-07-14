import React from 'react';
import {
  BottomBarWrp,
  MainWrp,
  SearchBar,
  SearchInputs,
  SearchInputsWrp,
  TopBarWrp,
} from './index.sc';
import { SearchIcon } from '../../../assets/icons/SearchIcon';

const searchInputs = [
  {
    title: 'Title',
  },
  {
    title: 'Country/Location',
  },
  {
    title: 'Source',
  },
  {
    title: 'Beats',
  },
  {
    title: 'Language',
  },
];

const MediaDatabaseSearchSection = () => {
  return (
    <MainWrp>
      <TopBarWrp>
        <SearchBar placeholder="Search" />
        <SearchIcon width="18" height="18" />
      </TopBarWrp>
      <BottomBarWrp>
        {searchInputs.map((item, i) => {
          return (
            <SearchInputsWrp key={i}>
              <SearchInputs placeholder={item.title} />
            </SearchInputsWrp>
          );
        })}
      </BottomBarWrp>
    </MainWrp>
  );
};

export default MediaDatabaseSearchSection;
