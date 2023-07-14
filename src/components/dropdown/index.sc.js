import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  min-width: max-content;
  width: ${(props) => (props.newWidth ? `${props.newWidth}rem` : '100%')};
  height: 2.125rem;
  box-sizing: border-box;
  border-radius: 0.3125rem;
  border: 1px solid var(--grey-border-drak, #c3c7d9);
  padding: 0.4375rem 0.5rem;
`;

export const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background};
  border-radius: 0.375rem;
  border-color: ${({ active }) => (active ? '#000000' : 'transparent')};
  border-width: ${({ borderWidth }) => borderWidth}px;
  padding: 8px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`;

export const DropdownList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  top: 2.5rem;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  /* border: 1px solid #000000; */
  border-radius: 0.375rem;
  list-style-type: none;
  padding: 0;
  padding-top: 0.375rem;
  padding-bottom: 0.625rem;
  margin: 0;
  width: 100%;
  min-width: max-content;
  max-height: 14.5rem;
  display: ${({ open }) => (open ? 'block' : 'none')};
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 600ms ease-in-out;
`;

export const DropdownListItem = styled.li`
  padding: 8px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.813rem;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.44rem;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 1rem;
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
`;
export const Checkbox = styled.input`
  margin-right: 8px;
`;
export const OptionTitle = styled.span`
  font-size: 0.813rem;
  line-height: 1rem;
`;
export const Selection = styled.div`
  width: 1.75rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 4px 9px; */
  background: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: 0.813rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.logoText};
  border-radius: 0.5rem;
`;
export const CountIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6875rem;
`;
