import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterLinkWrp = styled.div`
  width: 15rem;
  height: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
const FooterDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.text};
  height: 50%;
`;
const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.text};
`;

const AppFooter = () => {
  return (
    <FooterLinkWrp>
      <FooterLink>Feedback</FooterLink>
      <FooterDivider />
      <FooterLink>Contact US</FooterLink>
      <FooterDivider />
      <FooterLink>Copyright 2023-24</FooterLink>
    </FooterLinkWrp>
  );
};

export default AppFooter;
