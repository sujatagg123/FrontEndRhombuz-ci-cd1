import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../button';
import { theme } from '../../../constants/theme';
import { useSelector } from 'react-redux';
import X from '../../../assets/icons/X';

const Boxwpr = styled.div`
  width: 15.25rem;
  height: 8.75rem;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Typetxt = styled.div`
  font-size: 0.75rem;
  width: 100%;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const LabelBox = styled.label`
  display: flex;
  flex-wrap: wrap;
  height: 6rem;
  width: 100%;
  margin-top: 0.4rem;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.25rem;
  overflow: auto;
`;

const Inputwpr = styled.input`
  outline: none;
  border: none;
  height: 1.25rem;
  display: flex;
  align-items: center;
  padding-top: 2px;
  font-size: 0.75rem;
  margin: 0;
  margin-top: 0.2rem;
  font-weight: 400;
  ${({ theme }) => theme.secondaryText};
`;

const Tagwpr = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.25rem 0.625rem 0.2rem;
  align-items: center;
  font-size: 0.75rem;
  height: fit-content;
  gap: 0.25rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  & > span {
    display: flex;
    align-items: center;
  }
`;

const TagBox = () => {
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      setTags((prevTags) => [...prevTags, text.trim()]);
      setText('');
    }
  };

  const handleClick = () => {
    console.log(tags);
  };

  const removeTag = (i) => {
    setTags(tags.filter((tag, k) => i !== k));
  };

  return (
    <Boxwpr>
      <Typetxt>Add Tags/Themes</Typetxt>
      <LabelBox htmlFor="tag">
        {tags.reverse().map((tag, i) => (
          <Tagwpr key={i}>
            {tag}{' '}
            <span onClick={() => removeTag(i)}>
              <X
                size={15}
                color={theme[selectedTheme].primary}
                strokeWidth="2"
              />
            </span>
          </Tagwpr>
        ))}
        <Inputwpr
          id="tag"
          value={text}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          name="tag"
        />
      </LabelBox>
      <Button
        title="DONE"
        color={theme[selectedTheme].background}
        backgroundColor={theme[selectedTheme].primary}
        disable={!text && tags.length === 0}
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

export default TagBox;
