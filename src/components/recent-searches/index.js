import React, { useState, useEffect } from 'react';
import {
  TabSection,
  TabSectionWrp,
  LabelText,
  SubTextWrp,
  SubText,
  BoldText,
  TabsWrp,
  MainWrp,
  TabTitle,
} from './index.sc';
import PropTypes, { object } from 'prop-types';

const searchedOn = [
  {
    day: 'Today',
    recentSearch: [],
  },
  {
    day: 'Yesterday',
    recentSearch: [],
  },
];

const RecentSearches = ({ data }) => {
  const [currentData, setCurrentData] = useState(searchedOn);

  useEffect(() => {
    const updatedData = searchedOn.map((element) => {
      return {
        ...element,
        recentSearch: data.filter((item) => {
          const day = checkTimestamp(item.timeStamp);
          return (
            (day === 'today' && element.day === 'Today') ||
            (day === 'yesterday' && element.day === 'Yesterday')
          );
        }),
      };
    });

    setCurrentData(updatedData);
  }, [data]);

  function checkTimestamp(date) {
    const currentDate = new Date();

    const timestampDate = new Date(date);

    currentDate.setHours(0, 0, 0, 0);
    timestampDate.setHours(0, 0, 0, 0);

    const timeDiff = currentDate.getTime() - timestampDate.getTime();

    const oneDay = 24 * 60 * 60 * 1000;

    if (timeDiff < oneDay && timeDiff >= 0) {
      return 'today';
    } else if (timeDiff < 2 * oneDay && timeDiff >= oneDay) {
      return 'yesterday';
    } else {
      return 'Neither today nor yesterday';
    }
  }

  return (
    <>
      <MainWrp>
        <TabTitle>Recent Searches</TabTitle>
        <TabSectionWrp>
          <TabsWrp>
            {currentData.map((element, i) => {
              return (
                <React.Fragment key={i}>
                  <SubText>{element.day}</SubText>
                  {element.recentSearch.length !== 0 &&
                    element.recentSearch.map((item, j) => {
                      return (
                        <TabSection key={j}>
                          <LabelText>{item.label}</LabelText>
                          <SubTextWrp>
                            <SubText>{item.lastSearchOn}</SubText>
                            <SubText>
                              <BoldText>{item.results}</BoldText> results
                            </SubText>
                          </SubTextWrp>
                        </TabSection>
                      );
                    })}
                </React.Fragment>
              );
            })}
          </TabsWrp>
        </TabSectionWrp>
      </MainWrp>
    </>
  );
};

RecentSearches.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
};

export default RecentSearches;
