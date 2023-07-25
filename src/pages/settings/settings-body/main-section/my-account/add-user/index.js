import React, { useState } from 'react';
import Proptypes from 'prop-types';
import {
  AccessDescription,
  AccessLevelWrapper,
  AccessListContainer,
  AccessListIconWrp,
  AccessListItem,
  AccessOptionTextWrp,
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
  InputHeader,
  MainBoxwpr,
  SearchInputs,
  SearchInputsWrp,
  SectionTitle,
} from './index.sc';
import { theme } from '../../../../../../constants/theme';
import { Button } from '../../../../../../components/button';
import Close from '../../../../../../assets/icons/Close';
import { useSelector } from 'react-redux';
import AddAdminIcon from '../../../../../../assets/icons/AddAdminIcon';
import AddAnalystIcon from '../../../../../../assets/icons/AddAnalystIcon';
import AddUserIcon from '../../../../../../assets/icons/AddUserIcon';

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
  fontFamily: ' Inter',
  fontSize: '0.9375rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.125rem' /* 120% */,
  letterSpacing: '-0.01875rem',
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

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

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
          <Close color={theme[selectedTheme].text} height={'34'} width={'34'} />
        </Iconwpr>
      </Headerwrap>
      <MainBoxwpr>
        <FormFieldsWrapper>
          <FlexDiv>
            <SearchInputsWrp>
              <InputHeader>First Name</InputHeader>
              <SearchInputs
                placeholder="First Name"
                name="firstName"
                value={formFields.firstName}
                onChange={handleFieldsChange}
              />
            </SearchInputsWrp>
            <SearchInputsWrp>
              <InputHeader>Last Name</InputHeader>

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
              <InputHeader>Email Address</InputHeader>
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
          <SectionTitle>Alert Me for Changes in Volume</SectionTitle>
          <AccessListContainer>
            {accessLevels.map((level, i) => (
              <AccessListItem
                key={i}
                className={level.value === selectedLevel ? 'selected' : ''}
                onClick={() => handleSelectLevel(level.value)}
              >
                <AccessListIconWrp>
                  {level.value === 'admin' && <AddAdminIcon />}
                  {level.value === 'analyst' && <AddAnalystIcon />}
                  {level.value === 'reader' && <AddUserIcon />}
                </AccessListIconWrp>
                <AccessOptionTextWrp>
                  <AccessTitle>{level.title}</AccessTitle>
                  <AccessDescription>{level.description}</AccessDescription>
                </AccessOptionTextWrp>
              </AccessListItem>
            ))}
          </AccessListContainer>
        </AccessLevelWrapper>
      </MainBoxwpr>
      <FooterContainer>
        <ButtonContainer>
          <Button
            title="Cancel"
            backgroundColor="#F6F7FB"
            color={theme.dark.secondaryText}
            btnStyle={btnStyle}
            onClick={handleCancelAddUser}
          />
          <Button
            title="Add User"
            backgroundColor={theme[selectedTheme].primary}
            color={theme[selectedTheme].background}
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
