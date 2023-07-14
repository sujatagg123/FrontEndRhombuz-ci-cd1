import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const BtnWrp = styled.div`
  display: inline-flex;
  padding: 0.375rem 0.625rem;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 0.125rem;
  background: ${(props) =>
    props.clicked ? theme.light.text : theme.light.settingsButtonBackground};

  cursor: pointer;
  width: 6.6875rem;
  justify-content: center;
`;

export const BtnText = styled.p`
  color: ${(props) =>
    props.clicked ? theme.light.settingsButtonBackground : theme.light.text};
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.01625rem;
  margin: 0;
  padding: 0;
  ::first-letter {
    text-transform: capitalize;
  }
`;
