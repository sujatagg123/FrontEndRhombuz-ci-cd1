import React from 'react';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ErrorHandler = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error?.message}</pre>
      <button
        onClick={() => {
          navigate('/');
          navigate(0);
        }}
      >
        Go to Home Page{' '}
      </button>
    </div>
  );
};

export default ErrorHandler;

ErrorHandler.propTypes = {
  error: Proptypes.object,
  resetErrorBoundary: Proptypes.func,
};
