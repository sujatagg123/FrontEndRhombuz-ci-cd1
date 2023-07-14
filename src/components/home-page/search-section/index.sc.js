import styled from 'styled-components';

export const SearchWrp = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 1.5rem;
  display: flex;
  grid-template-rows: 0fr;
  transition: 600ms;
  z-index: 2;
  width: 43%;
  border-radius: 0.938rem;
  &.active {
    width: 100%;
    height: 23.5rem;
    grid-template-rows: 1fr;
    transition: 600ms;
  }
`;

export const NavWrp = styled.div`
  height: 100%;
  position: absolute;
  transition: all 600ms ease-in-out;
  left: 44%;
  &.active {
    transition: all 600ms ease-in-out;
    left: 100%;
  }
`;
export const SearchFocusBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(160, 167, 198, 0.6);
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms ease;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;
