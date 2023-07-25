import styled from 'styled-components';
import { Img } from '../../assets/img';

export const LoginContrwpr = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.6rem 1.7rem 0.6rem 0.6rem;
  display: flex;
  gap: 2.75rem;
`;

export const LoginBgImagewpr = styled.div`
  width: 55%;
  background-image: url(${Img.LoginBgImage});
  height: 100%;
  background-size: cover;
  border-radius: 1.25rem;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const RectagleImgwpr = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Informationwpr = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50%;
  display: flex;
  align-items: center;
`;

export const Boldtextwpr = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
`;

export const LightTxtwpr = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.background};
`;

export const LoginFormwpr = styled.div`
  width: 40%;
  padding: 3rem 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const LogoBox = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const LogoTextwpr = styled.div`
  color: #000000;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.7rem;
`;

export const LogoImgwpr = styled.img`
  width: fit-content;
  height: fit-content;
`;

export const LoginFormBox = styled.div`
  width: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormBoldtxt = styled.div`
  color: #000;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const FormGraytxt = styled.div`
  color: #585858;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: -0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #c3c7d9;
  border-radius: 0.37rem;
  outline: none;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
`;

export const FormLightTxt = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryText};
`;

export const ErrorTxt = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: red;
  height: 0.75rem;
`;

export const LoginBtn = styled.button`
  margin: 0;
  padding: 0.72rem 1.25rem 0.77rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const LightGray = styled.div`
  font-size: 0.75rem;
  color: #585858;
  font-weight: 400;
`;
