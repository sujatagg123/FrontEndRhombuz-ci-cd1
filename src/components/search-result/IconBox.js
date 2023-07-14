import React from 'react';
import { IconBoxwpr, Iconwpr } from './index.sc';
import SearchIcon2 from '../../assets/icons/SearchIcon2';
import IconPop from '../icon-popup';
import DownloadIcon from '../../assets/icons/DownloadIcon';
import FilterIcon from '../../assets/icons/FilterIcon';
import SortIcon from '../../assets/icons/SortIcon';

const downloadList = [
  {
    id: 0,
    label: 'PDF',
  },
  {
    id: 1,
    label: 'Excel',
  },
  {
    id: 2,
    label: 'CSV',
  },
];

const IconBox = () => {
  const handleDownloadClick = (id) => {
    console.log(id);
  };
  return (
    <IconBoxwpr>
      <Iconwpr>
        <SearchIcon2 color="white" />
      </Iconwpr>
      {false && (
        <IconPop handleClick={handleDownloadClick} Items={downloadList}>
          <Iconwpr>
            <DownloadIcon color="white" />
          </Iconwpr>
        </IconPop>
      )}
      <Iconwpr>
        <DownloadIcon color="white" />
      </Iconwpr>
      <Iconwpr>
        <FilterIcon color="white" />
      </Iconwpr>
      <Iconwpr>
        <SortIcon color="white" />
      </Iconwpr>
    </IconBoxwpr>
  );
};

export default IconBox;
