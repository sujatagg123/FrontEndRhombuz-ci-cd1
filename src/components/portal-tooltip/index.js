import React from 'react';
import reactDom from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PortalTooltip = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return reactDom.createPortal(
    <Container pos={props.pos} align={props.align} vAlign={props.vAlign}>
      {props.children}
    </Container>,
    document.getElementById('tooltip')
  );
};

export default PortalTooltip;

const Container = styled.div`
  transform: ${(props) =>
    props.align === 'left' ? 'translateX(-100%)' : 'translateX(0%)'};
  transform: ${(props) =>
    props.vAlign === 'top' ? 'translateY(-100%)' : 'translateY(0%)'};
  position: absolute;
  left: ${(props) =>
    props.align === 'left' ? props.pos.left - 25 : props.pos.left + 25}px;
  top: ${(props) =>
    props.vAlign === 'top' ? props.pos.top - 25 : props.pos.top + 25}px;
  /* top: ${(props) => props.pos.top || 0}px; */
  z-index: 101;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 2.90418px 5.80835px rgba(88, 88, 88, 0.3);
  border-radius: 8.71253px;
  width: fit-content;
`;

PortalTooltip.propTypes = {
  isOpen: PropTypes.bool,
  pos: PropTypes.object,
  align: PropTypes.string,
  vAlign: PropTypes.string,
  children: PropTypes.node,
};
