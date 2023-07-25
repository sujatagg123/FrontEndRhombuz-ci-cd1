import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppHeaderWrp = styled.div`
  padding: 0.75rem 1.75rem 0.5rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppHeaderLeft = styled.div``;

export const AppHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const AppLogo = styled(Link)`
  font-weight: bold;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.logoText};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

export const AppLogoSpan = styled.span`
  height: 1.3rem;
  width: 2.5rem;
  background-size: cover;
  background-image: url(${({ theme }) => theme.logo});
`;

export const NavIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0rem 1rem;
  cursor: pointer;
`;

export const NavUserProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const NavUserProfileTitle = styled.div`
  padding: 0rem 0.75rem;
  font-size: 0.75rem;
  color: #fff;
`;
export const NavUserProfileImg = styled.div`
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 50%;
  background-size: contain;
  background-image: url(${({ profileImage }) => profileImage});
`;
