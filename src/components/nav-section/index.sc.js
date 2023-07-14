import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrp = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 0.688rem;
`;

const navColors = ['#FF86A0', '#3DB7FB', '#5FCDD6', '#8B90A9'];

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.logoText};
  width: 12.5rem;
  background-color: ${({ index }) => navColors[index % navColors.length]};
  border-radius: 0.938rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.9rem 1.18rem;
  box-sizing: border-box;
  height: 100%;

  /* &.active {
    background-color: red;
  } */
`;

export const PlusButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  width: 12.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.938rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.18rem;
  box-sizing: border-box;
  height: ${(props) => (props.isFull ? '100%' : '50%')};
  font-weight: 200;
  font-size: 2rem;
`;
/* @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
  } */

export const LastLinks = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SaveCount = styled.div`
  width: 2.14rem;
  height: 1.6rem;
  border-radius: 1.572rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.logoText};
`;
export const TileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const TileLabel = styled.div`
  width: 85%;
  color: ${({ theme }) => theme.logoText};
  font-weight: 600;
  word-wrap: break-word;
  font-size: 1rem;
  width: 7.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TileValue = styled.div`
  color: ${({ theme }) => theme.logoText};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.6rem;
`;

export const TileBottomwpr = styled.div`
  display: flex;
  flex-direction: column;
`;
