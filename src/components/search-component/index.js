import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../search-bar';
import {
  ExpandedContainer,
  FilterWrapper,
  GuidedSearchSection,
  GuidedTextArea,
  HeaderLeftCon,
  IconText,
  RecentSearchWrp,
  SaveCount,
  // IconWrapper,
  SavedSearchContainer,
  SearchBarWrapper,
  SearchComponentWrapper,
  SearchesContainer,
  SectionHeader,
  SectionTitle,
  TextAreaCon,
  TextAreaLabel,
  ToggleContainer,
  ToggleLabel,
  WrapperContainer,
} from './index.sc';
import { recentSearches } from './utils';
// import SaveIcon from './assets/icons/Save';
import SaveSearchIcon from './assets/icons/SaveSearch';
import { Button } from '../button';
import ToggleSwitch from '../toggle-switch';
import DashboardPopup from '../dasboard-popup';
import SearchPopup from '../search-popup/SearchPopContent';
import { theme } from '../../constants/theme';
import RecentSearch from './RecentSearch';
// import SearchIcon from './assets/icons/SearchIcon';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { axiosPutRequest } from '../../service';
// import { useParams } from 'react-router';
import { usePostSearchData } from '../../hooks/useSearch';
import { Frames } from '../search-popup/contents';
import { useSelector } from 'react-redux';
import FilterComponent from './filter';

const SearchComponent = ({
  onSearchInputFocus,
  isFocused,
  handleSearchValue,
  onGuidedToggleFocus,
  guidedSection,
  handleCancelSearch,
  isEditMode = false,
  isSearchResult = false,
  searchedDetails,
}) => {
  // const { searchId } = useParams();
  const searchedQuery = searchedDetails?.query;
  const searchFilter = searchedDetails?.filter || {};
  const [value, setValue] = useState('');
  const [guidedSearch, setGuidedSearch] = useState({
    all: '',
    none: '',
    any: '',
  });
  const [showSaved, setShowSaved] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState(searchFilter);
  // const queryClient = useQueryClient();
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  // const handleSearchUpdate = (payload) => {
  //   return axiosPutRequest(
  //     '/api/search',
  //     {
  //       searchId,
  //     },
  //     payload
  //   );
  // };

  const {
    mutate: postSearch,
    data: postData,
    isSuccess,
    isError,
    error,
  } = usePostSearchData();

  // const {
  //   mutate: updateSearch,
  //   // data: putData,
  //   // isSuccess: isUpdateSuccess,
  //   // isError: isUpdateError,
  //   // error: updateSearchError,
  // } = useMutation({
  //   mutationFn: handleSearchUpdate,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['search-data', searchId] });
  //     queryClient.invalidateQueries({ queryKey: ['dashboard-data', searchId] });
  //     queryClient.invalidateQueries({
  //       queryKey: ['articles', 0, 'totalArticles'],
  //     });
  //   },
  // });

  // const searchFilterOptions = searchFilterData?.data?.data;

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSearch = () => {
    const data = {
      query: guidedSection ? guidedSearch : value,
      filter,
    };
    console.log(data, 'handleSearch');

    if (isEditMode) {
      handleSearchValue && handleSearchValue(data);
    } else {
      postSearch(data);
    }

    handleCancelSearch && handleCancelSearch(); // onGuidedToggleFocus(false) onSearchInputFocus(false);
    // setValue('');
  };

  useEffect(() => {
    if (isSuccess) {
      handleSearchValue && handleSearchValue(postData?.data);
    }
    if (isError) {
      console.log(error, 'post error');
      handleSearchValue && handleSearchValue(error);
    }
  }, [isSuccess, isError, postData?.data, handleSearchValue, error]);

  useEffect(() => {
    if (searchedQuery !== undefined && searchedQuery !== null) {
      if (typeof searchedQuery === 'string') {
        setValue(searchedQuery);
      } else if (typeof searchedQuery === 'object') {
        setGuidedSearch(searchedQuery);
      } else {
        console.log('else type');
      }
    }
  }, [searchedQuery, isEditMode]);

  const handleInputFocus = () => {
    onSearchInputFocus && onSearchInputFocus(true);
  };

  const handleGuidedToggle = (data) => {
    const { checked } = data;
    onGuidedToggleFocus(checked);
    if (!isFocused) {
      onSearchInputFocus && onSearchInputFocus(checked);
    }
  };

  const handleGuidedSearch = (e) => {
    const { name, value } = e.target;
    setGuidedSearch({
      ...guidedSearch,
      [name]: value,
    });
  };

  const handleShowSavedSearches = (e) => {
    setShowSaved(!showSaved);
  };

  const handleFilterChange = (data) => {
    // const { name, options } = data;
    console.log(data, 'onFilterChange');
    setFilter(data);
  };

  return (
    <>
      <SearchComponentWrapper>
        {!isSearchResult && !isEditMode && (
          <>
            <SectionHeader>
              <HeaderLeftCon>
                {/* <SearchIcon
                  width="18"
                  height="18"
                  strokeColor={theme[selectedTheme].text}
                /> */}
                <SectionTitle>New Search</SectionTitle>
                <ToggleContainer>
                  <ToggleSwitch
                    accentColor={theme[selectedTheme].primary}
                    checked={guidedSection}
                    onChange={handleGuidedToggle}
                  />
                  <ToggleLabel>Guided Search</ToggleLabel>
                </ToggleContainer>
              </HeaderLeftCon>
              <SavedSearchContainer onClick={handleShowSavedSearches}>
                <SaveSearchIcon strokeColor={theme[selectedTheme].text} />
                <IconText>Saved</IconText>
                <SaveCount>24</SaveCount>
              </SavedSearchContainer>
            </SectionHeader>
            <WrapperContainer className={isFocused ? 'active' : ''}>
              <FilterWrapper className={!isEditMode ? 'filter-wrapper' : ''}>
                <FilterComponent handleFilterChange={handleFilterChange} />
              </FilterWrapper>
            </WrapperContainer>
          </>
        )}
        {guidedSection ? (
          <GuidedSearchSection>
            <TextAreaCon className="br-left">
              <GuidedTextArea
                id="all"
                name="all"
                placeholder="Enter Keyword"
                className="br-tl-bl"
                value={guidedSearch.all}
                onChange={handleGuidedSearch}
              ></GuidedTextArea>
              <TextAreaLabel htmlFor="all">
                Include <strong>all of these</strong>
              </TextAreaLabel>
            </TextAreaCon>
            <TextAreaCon>
              <GuidedTextArea
                id="none"
                name="none"
                placeholder="Enter Keyword"
                value={guidedSearch.none}
                onChange={handleGuidedSearch}
              ></GuidedTextArea>
              <TextAreaLabel htmlFor="none">
                Include <strong>none of these</strong>
              </TextAreaLabel>
            </TextAreaCon>
            <TextAreaCon className="border-right br-right">
              <GuidedTextArea
                id="any"
                name="any"
                placeholder="Enter Keyword"
                className="br-tr-br"
                value={guidedSearch.any}
                onChange={handleGuidedSearch}
              ></GuidedTextArea>
              <TextAreaLabel htmlFor="any">
                Include <strong>any of these</strong>
              </TextAreaLabel>
            </TextAreaCon>
          </GuidedSearchSection>
        ) : (
          <SearchBarWrapper isFocused={isFocused}>
            <SearchBar
              value={value}
              onChange={handleChange}
              onFocus={handleInputFocus}
              isFocused={isFocused}
            />
          </SearchBarWrapper>
        )}
        <ExpandedContainer className={isFocused ? 'expanded' : ''}>
          {!isSearchResult && (
            <RecentSearchWrp className={isFocused ? 'expanded' : ''}>
              <RecentSearch results={recentSearches} />
            </RecentSearchWrp>
          )}
          {isSearchResult && isEditMode && (
            <ToggleContainer>
              <ToggleSwitch
                accentColor={theme[selectedTheme].primary}
                checked={guidedSection}
                onChange={handleGuidedToggle}
              />
              <ToggleLabel>Guided Search</ToggleLabel>
            </ToggleContainer>
          )}
          {isFocused && (
            <SearchesContainer>
              <Button
                title="Cancel"
                backgroundColor={theme[selectedTheme].background}
                color={theme.dark.secondaryText}
                onClick={(e) => {
                  handleCancelSearch && handleCancelSearch();
                }}
                btnStyle={{ width: '6.18rem', borderRadius: '0.5rem' }}
                border="1px solid #535770"
              />
              <Button
                title={isEditMode ? 'Update' : 'Search'}
                backgroundColor={theme[selectedTheme].primary}
                color={theme.dark.text}
                onClick={handleSearch}
                btnStyle={{ width: '6.18rem', borderRadius: '0.5rem' }}
              />
            </SearchesContainer>
          )}
        </ExpandedContainer>
      </SearchComponentWrapper>

      <DashboardPopup
        toggler={setShowSaved}
        open={showSaved}
        popContent={<SearchPopup Frames={Frames} />}
        padding="0px"
        Cross={true}
        borderRadius="0.75rem"
      />
    </>
  );
};

export default SearchComponent;

SearchComponent.propTypes = {
  onSearchInputFocus: PropTypes.func,
  onGuidedToggleFocus: PropTypes.func,
  handleSearchValue: PropTypes.func,
  handleCancelSearch: PropTypes.func,
  isFocused: PropTypes.bool,
  guidedSection: PropTypes.bool,
  isEditMode: PropTypes.bool,
  isSearchResult: PropTypes.bool,
  searchedDetails: PropTypes.object,
};
