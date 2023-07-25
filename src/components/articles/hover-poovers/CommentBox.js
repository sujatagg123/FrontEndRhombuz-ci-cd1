import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../button';
import { theme } from '../../../constants/theme';
import { useSelector } from 'react-redux';

const Boxwpr = styled.div`
  width: 15.5rem;
  height: 8.75rem;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const Inputwpr = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 0.625rem;
  background: ${({ theme }) => theme.background};
  height: 6rem;
  resize: none;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentBox = ({ data }) => {
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });
  const [text, setText] = useState('');
  const handleClick = () => {
    console.log(text);
  };
  return (
    <Boxwpr>
      <Inputwpr onChange={(e) => setText(e.target.value)} />
      <Button
        title="DONE"
        color={theme[selectedTheme].background}
        backgroundColor={theme[selectedTheme].primary}
        disable={!text}
        disableStyle={{
          background: theme[selectedTheme].borders,
          border: 'none',
          color: '#999999',
        }}
        onClick={handleClick}
      />
    </Boxwpr>
  );
};

CommentBox.propTypes = {
  data: PropTypes.string,
};

export default CommentBox;
