import React, { useState } from 'react';
import Proptypes from 'prop-types';
import {
  AccessDescription,
  AccessLevelWrapper,
  AccessListContainer,
  AccessListItem,
  AccessTitle,
  ButtonContainer,
  DrawerContentBox,
  FlexDiv,
  FooterContainer,
  FormFieldsWrapper,
  Headerleftwpr,
  Headerwrap,
  Heading,
  Iconwpr,
  MainBoxwpr,
  SearchInputs,
  SearchInputsWrp,
  SectionTitle,
} from './index.sc';
import X from '../../../../../../assets/icons/X';
import { theme } from '../../../../../../constants/theme';
import { Button } from '../../../../../../components/button';

const accessLevels = [
  {
    title: 'Admin',
    value: 'admin',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Analyst',
    value: 'analyst',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Reader',
    value: 'reader',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const btnStyle = {
  color: theme.dark.text,
  fontSize: '0.8rem',
  fontWeight: '700',
  lineHeight: '1.125rem',
  letterSpacing: '0.26px',
  textTransform: 'uppercase',
  borderRadius: '0.39rem',
};

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const AddUserPopup = ({
  toggler = () => {},
  heading = 'Add New User',
  handleSave,
}) => {
  const [selectedLevel, setSelectedLevel] = useState('admin');
  const [formFields, setFormFields] = useState(initialState);

  const handleToggle = () => {
    toggler(false);
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
  };
  const handleFieldsChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  const handleCancelAddUser = () => {
    toggler(false);
  };
  const handleSaveAddUser = () => {
    const returnData = {
      ...formFields,
      selectedLevel,
    };
    handleSave(returnData);
    toggler(false);
  };
  return (
    <DrawerContentBox>
      <Headerwrap>
        <Headerleftwpr>
          <Heading>{heading}</Heading>
        </Headerleftwpr>
        <Iconwpr onClick={handleToggle}>
          <X color={theme.dark.primary} size={28} />
        </Iconwpr>
      </Headerwrap>
      <MainBoxwpr>
        <FormFieldsWrapper>
          <FlexDiv>
            <SearchInputsWrp>
              <SearchInputs
                placeholder="First Name"
                name="firstName"
                value={formFields.firstName}
                onChange={handleFieldsChange}
              />
            </SearchInputsWrp>
            <SearchInputsWrp>
              <SearchInputs
                placeholder="Last Name"
                name="lastName"
                value={formFields.lastName}
                onChange={handleFieldsChange}
              />
            </SearchInputsWrp>
          </FlexDiv>
          <FlexDiv>
            <SearchInputsWrp>
              <SearchInputs
                placeholder="Email Address"
                type="email"
                name="email"
                value={formFields.email}
                onChange={handleFieldsChange}
              />
            </SearchInputsWrp>
          </FlexDiv>
        </FormFieldsWrapper>
        <AccessLevelWrapper>
          <SectionTitle>Access Level</SectionTitle>
          <AccessListContainer>
            {accessLevels.map((level, i) => (
              <AccessListItem
                key={i}
                className={level.value === selectedLevel ? 'selected' : ''}
                onClick={() => handleSelectLevel(level.value)}
              >
                <AccessTitle>{level.title}</AccessTitle>
                <AccessDescription>{level.description}</AccessDescription>
              </AccessListItem>
            ))}
          </AccessListContainer>
        </AccessLevelWrapper>
      </MainBoxwpr>
      <FooterContainer>
        <ButtonContainer>
          <Button
            title="CANCEL"
            backgroundColor="#F6F7FB"
            color={theme.dark.secondaryText}
            btnStyle={btnStyle}
            onClick={handleCancelAddUser}
          />
          <Button
            title="ADD USER"
            backgroundColor={theme.dark.primary}
            color={theme.dark.text}
            btnStyle={btnStyle}
            onClick={handleSaveAddUser}
          />
        </ButtonContainer>
      </FooterContainer>
    </DrawerContentBox>
  );
};

export default AddUserPopup;

AddUserPopup.propTypes = {
  toggler: Proptypes.func,
  heading: Proptypes.string,
  handleSave: Proptypes.func,
};
