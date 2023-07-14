import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid
    ${(props) => (props.checked ? props.backgroundColor : '#A1AAB3')};
  background-color: ${(props) =>
    props.checked ? props.backgroundColor : '#FFFFFF'};
  transition: all 150ms;

  &:after {
    content: '${(props) => (props.checked ? '✔' : '')}';
    display: ${(props) => (props.checked ? 'block' : 'none')};
    text-align: center;
    font-size: 12px;
    color: ${(props) => props.checkColor};
  }
`;
