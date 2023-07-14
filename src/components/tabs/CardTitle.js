import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Cardwpr = styled.div`
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  border: 1px solid #c3c7d9;
  height: 1.88rem;
  box-sizing: border-box;
`;

const CardTitle = ({ title = 'Title' }) => {
  return <Cardwpr>{title}</Cardwpr>;
};

CardTitle.propTypes = {
  title: Proptypes.string,
};

export default CardTitle;
