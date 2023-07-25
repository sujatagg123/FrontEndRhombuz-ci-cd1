import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/slices/userSlice';
import { useLocation, useNavigate } from 'react-router';
import PropTypes from 'prop-types';

import {
  Boldtextwpr,
  ErrorTxt,
  FormBoldtxt,
  FormGraytxt,
  FormLightTxt,
  Informationwpr,
  Input,
  InputContainer,
  LightGray,
  LightTxtwpr,
  LoginBgImagewpr,
  LoginBtn,
  LoginContrwpr,
  LoginForm,
  LoginFormBox,
  LoginFormwpr,
  LogoBox,
  LogoImgwpr,
  LogoTextwpr,
  RectagleImgwpr,
} from './index.sc';
import { Img } from '../../assets/img';
import { ValidateEmail } from './validateEmail';

const InputBox = ({ type, handleChange, label, error }) => {
  return (
    <InputContainer>
      <FormLightTxt>{label}</FormLightTxt>
      <Input type={type} onChange={(e) => handleChange(e.target.value)} />
      <ErrorTxt>{error}</ErrorTxt>
    </InputContainer>
  );
};

InputBox.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const dispatch = useDispatch();
  const token = useSelector((store) => {
    return store?.user?.data?.token || '';
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submitLoginDetails = () => {
    dispatch(
      getUserDetails({
        username: email,
        password,
      })
    );
  };

  const user = useSelector((store) => {
    return store?.user || {};
  });

  useEffect(() => {
    if (token !== '') {
      navigate(from, { replace: true });
    } else {
      navigate('/login');
    }
  }, [from, navigate, token]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submitted');
    console.log('Email: ', email, ' ,Password: ', password);
    if (ValidateEmail(email) && email && password) {
      setEmailError('');
      setPasswordError('');
      submitLoginDetails();
    } else {
      setEmailError('Invalid email!');
    }
  };

  return (
    <LoginContrwpr>
      <LoginBgImagewpr>
        <RectagleImgwpr src={Img.Rectangle1} right="2rem" width="58%" />
        <RectagleImgwpr src={Img.Rectangle2} left="0" top="8rem" width="30%" />
        <RectagleImgwpr src={Img.Rectangle3} left="9.4rem" top="1.75rem" />
        <Informationwpr>
          <Boldtextwpr>Build Analytics with Intelligence</Boldtextwpr>
          <LightTxtwpr>
            Lorem ipsum dolor sit amet consectetur. Neque eu turpis convallis in
            dictumst. Vel lacus faucibus tempor et.
          </LightTxtwpr>
        </Informationwpr>
      </LoginBgImagewpr>
      <LoginFormwpr>
        <LogoBox>
          <LogoImgwpr src={Img.DarkLogo} />
          <LogoTextwpr>AlphametricX</LogoTextwpr>
        </LogoBox>
        <LoginFormBox>
          <FormBoldtxt>Welcome!</FormBoldtxt>
          <FormGraytxt>Login to Alphametricx</FormGraytxt>
          <LoginForm onSubmit={submitHandler}>
            <InputBox
              label="Registered Email"
              handleChange={setEmail}
              error={emailError}
            />
            <InputBox
              label="Password"
              type="password"
              handleChange={setPassword}
              error={passwordError}
            />
            {typeof user.message === 'string' && user.message && (
              <ErrorTxt>{user.message}</ErrorTxt>
            )}
            <LoginBtn>Login</LoginBtn>
            <LightGray>Trouble Loggin in?</LightGray>
          </LoginForm>
        </LoginFormBox>
      </LoginFormwpr>
    </LoginContrwpr>
  );
};

export default LoginPage;
