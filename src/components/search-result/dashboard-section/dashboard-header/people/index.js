import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AddContentContainer,
  AddContentWrp,
  AddItemContainer,
  AddText,
  ComponentWrapper,
  ItemContainer,
  KeywordItem,
  KeywordValue,
  MainContent,
} from '../brand/index.sc';

import { Button } from '../../../../button';
import { theme } from '../../../../../constants/theme';
import { useSelector } from 'react-redux';
import Done from '../../../../../assets/icons/Done';
import AddKeyword from '../AddKeyword';

const People = (props) => {
  const { tabKeywords = [] } = props;
  const [peopleData, setPeopleData] = useState(tabKeywords);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  useEffect(() => {
    setPeopleData(tabKeywords);
  }, [tabKeywords]);

  const handleAnalyze = () => {};
  const handleReceiveKeyword = (data) => {
    const finalData = [...peopleData, data];
    setPeopleData(finalData);
  };

  return (
    <ComponentWrapper>
      <MainContent>
        <ItemContainer>
          <AddContentWrp>
            <AddContentContainer>
              <AddText>Add Person Name</AddText>
              <AddItemContainer>
                {peopleData.map((item, i) => (
                  <KeywordItem key={i}>
                    <KeywordValue>{item}</KeywordValue>
                    <Done />
                  </KeywordItem>
                ))}
                <AddKeyword handleSendKeyword={handleReceiveKeyword} />
              </AddItemContainer>
            </AddContentContainer>
          </AddContentWrp>
          <Button
            title="Analyze"
            backgroundColor="#C3C7D9"
            color={theme[selectedTheme].logoText}
            onClick={handleAnalyze}
            btnStyle={{
              width: '6.6rem',
              height: '2.75rem',
              borderRadius: '0.5rem',
            }}
          />
        </ItemContainer>
      </MainContent>
    </ComponentWrapper>
  );
};

export default People;

People.propTypes = {
  tabKeywords: PropTypes.array,
};

People.defaultProps = {
  tabKeywords: [],
};
