import styled from 'styled-components';

export const Contentwpr = styled.form`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Infowpr = styled.div`
  display: flex;
  box-sizing: border-box;
  background: rgba(103, 94, 242, 0.1);
  border-radius: 10px;
  gap: 0.5rem;
  align-items: center;
  height: 2.5rem;
  width: 100%;
  padding: 0 1.25rem;
`;

export const Infotxt = styled.div`
  font-weight: 600;
  font-size: 0.81rem;
  color: ${({ theme }) => theme.primary};
`;

export const Titlewpr = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.secondaryText};
`;

export const Labelbox = styled.div`
  width: 100%;
  & > span {
    display: inline-flex;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.secondaryText};
    margin-bottom: 0.25rem;
  }
`;

export const Labelwpr = styled.label`
  box-sizing: border-box;
  background: ${({ theme }) => theme.secondaryBackground};
  border: 1px solid #c3c7d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 2rem;
  width: 100%;
`;

export const Inputwpr = styled.input`
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  color: ${({ theme }) => theme.secondaryText};
  border: none;
  outline: none;
  &::placeholder {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
    color: #999999;
  }
`;

export const TextAreaContainer = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 0.625rem;
  background: ${({ theme }) => theme.secondaryBackground};
  height: 8.5rem;
  border: 1px solid #c3c7d9;
  border-radius: 6px;
  resize: none;
  outline: none;
  font-weight: 500;
  font-size: 12px;
  color: #5c5e60;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.75rem;
`;

export const SwitchBoxwpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;
  transition: 0.3s ease-in-out;
  height: ${({ checked }) => (checked ? '9.5rem' : '1.75rem')};
`;

export const BoldBoxwpr = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Boldtxt = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #000000;
  display: flex;
  align-items: center;
`;

export const Switchwpr = styled.input`
  appearance: none;
  width: 38px;
  height: 22px;
  border-radius: 10px;
  background-color: #c3cad1;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-bottom: 0.0825rem;
  &:checked {
    background-color: ${({ theme }) => theme.primary};
  }
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondaryBackground};
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;
  }

  &:checked::before {
    transform: translateX(1rem);
  }
`;

export const MidBoxwpr = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Midtxt = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.background};
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PercBoxwpr = styled.div`
  border: 1px solid #c3c7d9;
  height: 1.75rem;
  width: 2.9rem;
  padding: 1px 0.25rem 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: 600;
  color: #2e68ff;
  font-size: 13px;
  gap: 0;
`;

export const PercInputwpr = styled.input`
  box-sizing: border-box;
  width: 1.2rem;
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  outline: none;
  border: none;
  color: #2e68ff;
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield; /* Rest of the browsers */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin: 0;
  padding: 0;
`;

export const Descwpr = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  width: 100%;
  color: #999999;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  box-sizing: border-box;
  min-width: 1rem;
  min-height: 1rem;
  background-color: #ffffff;
  border: 1.5px solid #2e68ff;
  margin: 0;
  border-radius: 4px;
  &:checked {
    width: 1rem;
    height: 1rem;
    accent-color: #2e68ff;
    border: 1.5px solid #2e68ff;
    border-radius: 4px;
  }
`;
