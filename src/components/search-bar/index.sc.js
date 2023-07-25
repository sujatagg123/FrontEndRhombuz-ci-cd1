import styled, { css } from 'styled-components';

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const InputSearch = styled.textarea`
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.secondaryText : theme.text};
  border-radius: 0.3125rem;
  border: 1.006px solid #c3c7d9;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  line-height: 1.4rem;
  padding: 0.6rem 1rem;
  width: 100%; //calc(100% - 5rem)
  height: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 0.9375rem;
    line-height: 1.4rem;
    color: #555555;
  }
  &:focus {
    outline: none;
    /* border: none; */
  }
  ${({ isHovered }) =>
    isHovered &&
    css`
      background-color: ${({ theme }) => theme.secondaryBackground};
      color: ${({ theme }) => theme.secondaryText};
    `}
`;

export const IconCon = styled.div`
  height: 100%;
  width: 5rem;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0 0.75rem 0.75rem 0;
  /* padding-right: 1.75rem; */
  .clear-icon.hidden {
    visibility: hidden;
  }
  .clear-icon.active {
    visibility: visible;
  }
  ${({ isHovered }) =>
    isHovered &&
    css`
      background-color: ${({ theme }) => theme.secondaryBackground};
    `}
`;
export const IconWrapper = styled.div`
  cursor: pointer;
`;
export const DataResult = styled.div`
  margin-top: 5px;
  width: 100%;
  max-height: 12.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const DataItem = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #f6f7fb;
  }
`;
export const DataTitle = styled.p`
  margin-left: 0.75rem;
`;
