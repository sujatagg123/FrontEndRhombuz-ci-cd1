import React, { useEffect, useMemo, useState } from 'react';
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
  // SectionHeader,
  // SectionTitle,
} from './index.sc';
import { Button } from '../../../../button';
import { theme } from '../../../../../constants/theme';
import { useSelector } from 'react-redux';
import Done from '../../../../../assets/icons/Done';
import AddKeyword from '../AddKeyword';

const Brand = ({ tabKeywords }) => {
  const brandKeywords = useMemo(
    () => tabKeywords?.brandKeywords || [],
    [tabKeywords]
  );
  const competitionKeywords = useMemo(
    () => tabKeywords?.competitionKeywords || [],
    [tabKeywords]
  );

  const [brandData, setBrandData] = useState(brandKeywords);
  const [competitionData, setCompetitionData] = useState(competitionKeywords);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  useEffect(() => {
    setBrandData(brandKeywords);
    setCompetitionData(competitionKeywords);
  }, [brandKeywords, competitionKeywords]);

  // const handleAddRemoveChart = () => {};
  const handleAnalyze = () => {};

  const handleReceiveBrandKeyword = (data) => {
    const finalData = [...brandData, data];
    setBrandData(finalData);
  };

  const handleReceiveCompetitionKeyword = (data) => {
    const finalData = [...competitionData, data];
    setCompetitionData(finalData);
  };

  return (
    <ComponentWrapper>
      {/* <SectionHeader>
        <SectionTitle>Brand & Competitive Dashboard</SectionTitle>
        <Button
          title="Add/Remove Charts"
          backgroundColor={theme[selectedTheme].background}
          color={theme[selectedTheme].primary}
          border={`1px solid ${theme[selectedTheme].primary}`}
          onClick={handleAddRemoveChart}
          btnStyle={{ borderRadius: '0.5rem' }}
          //   icon={<AddRemoveChart width="1rem" height="1rem" />}
        />
      </SectionHeader> */}
      <MainContent>
        <ItemContainer>
          <AddContentWrp>
            <AddContentContainer>
              <AddText>Brand Keywords</AddText>
              <AddItemContainer>
                {brandData.map((item, i) => (
                  <KeywordItem key={i}>
                    <KeywordValue>{item}</KeywordValue>
                    <Done />
                  </KeywordItem>
                ))}
                <AddKeyword handleSendKeyword={handleReceiveBrandKeyword} />
              </AddItemContainer>
            </AddContentContainer>
            <AddContentContainer>
              <AddText>Competition Keywords</AddText>
              <AddItemContainer>
                {competitionData.map((item, i) => (
                  <KeywordItem key={i}>
                    <KeywordValue>{item}</KeywordValue>
                    <Done />
                  </KeywordItem>
                ))}
                <AddKeyword
                  handleSendKeyword={handleReceiveCompetitionKeyword}
                />
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

export default Brand;

Brand.propTypes = {
  tabKeywords: PropTypes.any,
};
