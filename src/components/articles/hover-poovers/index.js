import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Popoverwpr = styled.div`
  width: fit-content;
  height: fit-content;
  box-shadow: 0px 0.25rem 1.25rem 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 1.75rem;
  top: -2px;
  padding: 0.8rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  cursor: auto;
`;

const Popover = ({ data, InnerChild, setShow }) => {
  return (
    <Popoverwpr onClick={(e) => e.stopPropagation()}>
      <InnerChild data={data} />
    </Popoverwpr>
  );
};

Popover.propTypes = {
  data: PropTypes.any,
  InnerChild: PropTypes.oneOfType([PropTypes.node, PropTypes.any]),
  setShow: PropTypes.func,
};

export default Popover;
