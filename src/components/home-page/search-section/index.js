import React, { useState } from 'react';
import { Section } from '../../../styles/index.sc';
import { SearchWrp, NavWrp, SearchFocusBackdrop } from './index.sc';
import NavSection from '../../nav-section';
import SearchComponent from '../../search-component';
import { useNavigate } from 'react-router-dom';

const SearchSection = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [guidedSection, setGuidedSection] = useState(false);

  const navigate = useNavigate();

  const handleSearchInputFocus = (isFocused) => {
    setIsSearchFocused(isFocused);
  };

  const handleGuidedToggle = (isFocused) => {
    setGuidedSection(isFocused);
  };

  const handleBackdropClick = () => {
    setGuidedSection(false);
    setIsSearchFocused(false);
  };

  const handleSearchValue = (data) => {
    const { searchId } = data;
    if (searchId) {
      navigate(`/search-results/${searchId}`);
    }
  };

  const handleCancelSearch = () => {
    setGuidedSection(false);
    setIsSearchFocused(false);
  };

  return (
    <Section
      sectionStyle={{
        height: '22%',
        backgroundColor: 'transparent',
        padding: '0rem 1.5rem ',
        display: 'flex',
        gap: '1rem',
        position: 'relative',
      }}
    >
      <SearchFocusBackdrop
        className={`backdrop ${isSearchFocused ? 'active' : ''}`}
        onClick={handleBackdropClick}
      ></SearchFocusBackdrop>
      <SearchWrp
        className={`search-wrapper ${isSearchFocused ? 'active' : ''}`}
      >
        <SearchComponent
          onSearchInputFocus={handleSearchInputFocus}
          onGuidedToggleFocus={handleGuidedToggle}
          isFocused={isSearchFocused}
          handleSearchValue={handleSearchValue}
          guidedSection={guidedSection}
          handleCancelSearch={handleCancelSearch}
        />
      </SearchWrp>
      <NavWrp className={`${isSearchFocused ? 'active' : ''}`}>
        <NavSection />
      </NavWrp>
    </Section>
  );
};

export default SearchSection;
