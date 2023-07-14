import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CountIconWrapper,
  DropdownButton,
  DropdownContainer,
  DropdownList,
  DropdownListItem,
  OptionTitle,
  Selection,
  Title,
} from './index.sc';
// import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import ArrowIcon from './assets/Arrow';
import CheckBox from '../checkbox';
import { theme } from '../../constants/theme';
import { useSelector } from 'react-redux';

const MultiselectDropdown = ({
  title = '',
  name,
  options = [],
  selected,
  newWidth,
  onSelect,
  count = false,
  borderWidth = 1,
  isEditMode = false,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(
    selected || [...options]
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleOption = (option) => {
    const isOptionSelected = selectedOptions.some(
      (item) => item.value === option.value
    );
    if (isOptionSelected) {
      const optionsSelected = selectedOptions.filter(
        (item) => item.value !== option.value
      );
      setSelectedOptions(optionsSelected);
      onSelect && onSelect(name, optionsSelected);
    } else {
      const optionsSelected = [...selectedOptions, option];
      setSelectedOptions(optionsSelected);
      onSelect && onSelect(name, optionsSelected);
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      const optionsSelected = [];
      setSelectedOptions(optionsSelected);
      onSelect(name, optionsSelected);
    } else {
      const optionsSelected = [...options];
      setSelectedOptions(optionsSelected);
      onSelect(name, optionsSelected);
    }
  };

  useEffect(() => {
    if (selected) setSelectedOptions(selected);
    else setSelectedOptions([...options]);
  }, [selected, options, isEditMode]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef} newWidth={newWidth}>
      <DropdownButton
        className="dropdown-btn"
        active={dropdownOpen}
        onClick={toggleDropdown}
        borderWidth={borderWidth}
      >
        <Title>{title}</Title>
        <CountIconWrapper>
          {count && (
            <Selection>
              {selectedOptions.length === options.length
                ? 'All'
                : selectedOptions.length}
            </Selection>
          )}
          <ArrowIcon
            className={'dropdown-arrow-icon'}
            fill={theme[selectedTheme].text}
            isOpen={dropdownOpen}
          />
        </CountIconWrapper>
      </DropdownButton>
      <DropdownList open={dropdownOpen}>
        <DropdownListItem onClick={handleSelectAll}>
          <CheckBox
            checked={selectedOptions.length === options.length}
            onChange={handleSelectAll}
            backgroundColor={theme[selectedTheme].primary}
            checkColor={theme[selectedTheme].logoText}
          />
          <OptionTitle>All</OptionTitle>
        </DropdownListItem>
        {options.map((option, i) => (
          <DropdownListItem key={i} onClick={() => toggleOption(option)}>
            <CheckBox
              checked={selectedOptions.some(
                (ele) => ele.value === option.value
              )}
              onChange={() => toggleOption(option)}
              backgroundColor={theme[selectedTheme].primary}
              checkColor={theme[selectedTheme].logoText}
            />
            <OptionTitle>{option.label}</OptionTitle>
          </DropdownListItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default MultiselectDropdown;

MultiselectDropdown.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.arrayOf(PropTypes.object),
  newWidth: PropTypes.string,
  onSelect: PropTypes.func,
  count: PropTypes.bool,
  borderWidth: PropTypes.string,
  isEditMode: PropTypes.bool,
};
