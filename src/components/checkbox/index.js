import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxWrapper, HiddenCheckbox, StyledCheckbox } from './index.sc';

const CheckBox = ({ checked, onChange, backgroundColor, checkColor }) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox
        checked={checked}
        backgroundColor={backgroundColor}
        checkColor={checkColor}
      />
    </CheckboxWrapper>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  checkColor: PropTypes.string,
};

CheckBox.defaultProps = {
  backgroundColor: '#ccc',
  checkColor: '#fff',
};

export default CheckBox;
