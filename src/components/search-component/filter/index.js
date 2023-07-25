import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiltersContainer } from './index.sc';
import MultiselectDropdown from '../../dropdown';
import { useSearchFilterData } from '../../../hooks/useSearch';

const FilterComponent = ({
  searchFilter,
  handleFilterChange,
  editMode = false,
  searchResult = false,
}) => {
  const [filter, setFilter] = useState();

  useEffect(() => {
    if (searchFilter) {
      setFilter(searchFilter);
    }
  }, [searchFilter, editMode]);

  const handleSelect = (name, selectedOptions) => {
    setFilter({
      ...filter,
      [name]: selectedOptions,
    });
    handleFilterChange &&
      handleFilterChange({
        ...filter,
        [name]: selectedOptions,
      });
  };

  const {
    // isLoading,
    // error,
    data,
    isFetching,
  } = useSearchFilterData();
  const searchFilterOptions = data?.data?.data;

  return (
    <FiltersContainer>
      {!isFetching &&
        searchFilterOptions?.map((option, i) => {
          const selectedValue = filter ? filter[option?.value] : null;
          return (
            <MultiselectDropdown
              title={option?.label}
              name={option?.value}
              options={option?.options}
              selected={selectedValue}
              onSelect={handleSelect}
              count={true}
              newWidth={searchResult ? '9.9' : '10.5'}
              borderWidth="0"
              // isEditMode={isEditMode}
              key={i}
              isEditMode={editMode}
            />
          );
        })}
    </FiltersContainer>
  );
};

export default FilterComponent;

FilterComponent.propTypes = {
  searchFilter: PropTypes.object,
  handleFilterChange: PropTypes.func,
  editMode: PropTypes.bool,
  searchResult: PropTypes.bool,
};
