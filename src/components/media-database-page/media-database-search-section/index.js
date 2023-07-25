import React from 'react';
import {
  BottomBarWrp,
  MainWrp,
  SearchInputs,
  SearchInputsWrp,
} from './index.sc';

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
