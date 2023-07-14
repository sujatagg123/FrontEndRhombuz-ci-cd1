import React, { useState } from 'react';
import Proptypes from 'prop-types';

import {
  DropDownWrp,
  MainWrp,
  ProfileLengthSpan,
  RelevanceText,
  SortByText,
  SortWrp,
  TextContent,
  TopBarWrp,
  Wrp,
} from './index.sc';
import DownPolygon from '../../../../assets/icons/DownPolygon';

const sortBy = [
  {
    type: 'relevance',
    label: 'Relevance',
  },
  {
    type: 'name',
    label: 'Name',
  },
];

const ProfileRelevanceSection = ({ profileNumber }) => {
  const [sort, setSort] = useState(sortBy[0]);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  function handleDropdownClick() {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  function handleSelect(type) {
    setSort(type);
    setDropdownIsOpen(false);
  }

  return (
    <MainWrp>
      <TopBarWrp>
        <TextContent>
          Profiles
          <ProfileLengthSpan>({profileNumber})</ProfileLengthSpan>
        </TextContent>
        <SortWrp>
          <RelevanceText>Sort by</RelevanceText>
          <Wrp>
            <SortByText onClick={handleDropdownClick}>{sort.label}</SortByText>
            {dropdownIsOpen && (
              <DropDownWrp>
                {sortBy.map((item, i) => {
                  return (
                    <SortByText key={i} onClick={() => handleSelect(item)}>
                      {item.label}
                    </SortByText>
                  );
                })}
              </DropDownWrp>
            )}
          </Wrp>
          <DownPolygon fill={'#fff'} />
        </SortWrp>
      </TopBarWrp>
    </MainWrp>
  );
};

ProfileRelevanceSection.propTypes = {
  profileNumber: Proptypes.number,
};

export default ProfileRelevanceSection;
