import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterLinkMainWrp = styled.div`
  width: 100vw;
  height: 4%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1.5rem;
`;

const FooterLinkWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  background-color: #eceff3;
`;
// const FooterDivider = styled.div`
//   border: 1px solid ${({ theme }) => theme.text};
//   height: 50%;
// `;
const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.text};
`;

const AppFooter = () => {
  return (
    <FooterLinkMainWrp>
      <FooterLinkWrp>
        <FooterLink to={'/terms-and-conditions'}>Privacy Policy</FooterLink>
        <FooterLink to={'/terms-and-conditions'}>Terms & Conditions</FooterLink>
        {/* <FooterDivider /> */}
        <FooterLink to={'/contact-us'}>Contact US</FooterLink>
        {/* <FooterDivider /> */}
      </FooterLinkWrp>
      <FooterLinkWrp>
        <FooterLink>AlphametricX © 2023 . All rights reserved</FooterLink>
      </FooterLinkWrp>
    </FooterLinkMainWrp>
  );
};

export default AppFooter;
