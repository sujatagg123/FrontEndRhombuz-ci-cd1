import styled from 'styled-components';

export const SearchComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
`;
export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 1.836rem; */
`;
export const HeaderLeftCon = styled.div`
  display: flex;
  align-items: center;
`;
export const SectionTitle = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.375rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.darkText};
  margin: 0 1rem 0 0;
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: ${({ isFocused }) => (isFocused ? '12rem' : '2.8rem')};
  transition: height 400ms ease-in-out;
  flex-shrink: 0;
`;
export const SearchesContainer = styled.div`
  width: 13.12rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.62rem;
  /* margin-top: 1rem; */
`;
export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const IconText = styled.div`
  font-weight: 500;
  line-height: 1.188rem;
  color: ${({ theme }) => theme.darkText};
`;
export const ExpandedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.375rem;
`;

export const SavedSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`;
export const FilterWrapper = styled.div`
  width: 100%;
`;
export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  .dropdown-btn {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const SaveCount = styled.div`
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 1rem;
  width: 1.94rem;
  height: 1.62rem;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.logoText};
`;
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.438rem;
`;
export const ToggleLabel = styled.div`
  font-weight: 500;
  font-size: 0.85rem;
  line-height: 1.063rem;
  color: ${({ theme }) => theme.darkText};
`;
export const GuidedSearchSection = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
`;
export const TextAreaCon = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.secondaryBackground};
  position: relative;
  &.border-right {
    border-right: 1.006px solid #c3c7d9;
  }
  &.br-left {
    border-radius: 0.75rem 0 0 0.75rem;
  }
  &.br-right {
    border-radius: 0 0.75rem 0.75rem 0;
  }
`;
export const GuidedTextArea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.secondaryText};
  box-shadow: 1px 0px 0px #d9d9d9;
  padding: 0.6rem 0.813rem;
  padding-top: 2rem;
  border: 1.006px solid #c3c7d9;
  border-right: none;
  outline: none;
  &::placeholder {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.938rem;
    color: #999999;
    /* opacity: 0.7; */
  }
  &.br-tl-bl {
    border-radius: 0.75rem 0 0 0.75rem;
  }
  &.br-tr-br {
    border-radius: 0 0.75rem 0.75rem 0;
  }
`;
export const TextAreaLabel = styled.label`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.938rem;
  color: #000000;
  position: absolute;
  top: 0.688rem;
  left: 0.813rem;
`;
export const WrapperContainer = styled.div`
  width: 100%;
  transition: all 400ms ease-in-out;
  height: 0;
  opacity: 0;
  margin-top: -1rem;
  z-index: -1;
  &.active {
    height: 2.125rem;
    opacity: 1;
    margin-top: 0;
    z-index: 1;
  }
`;
export const RecentSearchWrp = styled.div`
  width: 100%;
  height: 1.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  &.expanded {
    width: calc(100% - 13.12rem);
  }
`;
