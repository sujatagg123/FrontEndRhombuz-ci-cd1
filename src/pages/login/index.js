import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/slices/userSlice';
import { useLocation, useNavigate } from 'react-router';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const dispatch = useDispatch();
  const token = useSelector((store) => {
    return store?.user?.data?.token || '';
  });

  const submitLoginDetails = () => {
    dispatch(
      getUserDetails({
        username: 'kminchelle',
        password: '0lelplR',
      })
    );
  };

  useEffect(() => {
    if (token !== '') {
      navigate(from, { replace: true });
    } else {
      navigate('/login');
    }
  }, [from, navigate, token]);

  return (
    <div>
      {/* <input type="text" value="kminchelle" />
      <input type="password" value="0lelplR" /> */}
      <button onClick={submitLoginDetails}>login</button>
    </div>
  );
};

export default LoginPage;
