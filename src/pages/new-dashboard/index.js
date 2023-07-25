import React, { useState } from 'react';
import {
  ButtonText,
  CrossButtonWrp,
  DashboardType,
  IconWrapper,
  PageMainWrp,
  PageWrp,
  QueryFilterCon,
  SaveSearchBtn,
  SearchContainer,
  SearchSection,
  SearchText,
  SearchTextWrp,
  SearchWrp,
  SectionBody,
  SectionHeader,
  SmallTitle,
} from './index.sc';
import AppBG from '../../components/app-bg';
import bgsr from '../../assets/img/bg/bg_sr.svg';
import AppHeader from '../../components/app-header';
import AppFooter from '../../components/app-footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import { theme } from '../../constants/theme';
import SavedSearch from '../../assets/icons/SavedSearch';
import DashboardPopup from '../../components/dasboard-popup';
import SearchPopup from '../../components/search-popup/SearchPopContent';
import { Frames } from '../../components/search-popup/contents';
import FilterComponent from '../../components/search-component/filter';
import Brand from '../../components/search-result/dashboard-section/dashboard-header/brand';
import Industry from '../../components/search-result/dashboard-section/dashboard-header/industry';
import People from '../../components/search-result/dashboard-section/dashboard-header/people';
import { useSearchData } from '../../hooks/useSearch';
import { convertObjToString } from '../../utils';

const CreateDashboard = () => {
  const [showSaved, setShowSaved] = useState(false);
  const [filter, setFilter] = useState();

  const navigate = useNavigate();
  const { searchId, dashboardType } = useParams();

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const {
    // isLoading: searchDataLoading,
    // error: searchError,
    data: searchData,
    // isFetching,
  } = useSearchData(searchId);

  const searchedDetails = searchData?.data || {};
  const searchedQuery = searchedDetails?.query;

  const truncateQuery = (query) => {
    if (!query) {
      return query;
    }
    let res = '';
    if (query !== null && typeof query === 'object') {
      res = convertObjToString(query);
    } else {
      res = query;
    }
    return res;
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleShowSavedSearches = (e) => {
    e.stopPropagation();
    setShowSaved((old) => !old);
  };
  const handleFilterChange = (data) => {
    // const { name, options } = data;
    console.log(data, 'onFilterChange');
    setFilter(data);
  };

  const dashboardKeyConfig = {
    // overview: <></>,
    brand: Brand,
    industry: Industry,
    people: People,
    // advanced: <></>,
    // custom: <></>,
  };

  const getSelectedTabContent = () => {
    const Component = dashboardKeyConfig[dashboardType];
    if (Component) {
      return <Component />;
    }
    return <></>;
  };

  console.log(filter, 'filter');
  return (
    <PageWrp>
      <AppBG bg1h={'11.5%'} bg1={bgsr} />
      <AppHeader />
      <PageMainWrp>
        <SearchSection>
          <SearchWrp>
            <SectionHeader>
              <CrossButtonWrp onClick={handleGoBack}>
                <ArrowLeft
                  color={theme[selectedTheme].text}
                  width="32"
                  height="32"
                />
              </CrossButtonWrp>
              <SearchTextWrp>
                <DashboardType>{dashboardType} Dashboard</DashboardType>
                <SearchText>Weekly updates for Joe</SearchText>
              </SearchTextWrp>
              <SaveSearchBtn>
                <ButtonText>Save</ButtonText>
              </SaveSearchBtn>
            </SectionHeader>
            <SectionBody>
              <QueryFilterCon>
                <SearchContainer>
                  <SmallTitle>{truncateQuery(searchedQuery)}</SmallTitle>
                  <IconWrapper
                    className="center"
                    onClick={(e) => handleShowSavedSearches(e)}
                  >
                    <SavedSearch
                      width="1.5rem"
                      height="1.5rem"
                      color={theme[selectedTheme].primary}
                    />
                  </IconWrapper>
                </SearchContainer>
                <FilterComponent
                  searchFilter={searchedDetails?.filter}
                  handleFilterChange={handleFilterChange}
                />
              </QueryFilterCon>
              {getSelectedTabContent()}
            </SectionBody>
          </SearchWrp>
          <DashboardPopup
            toggler={setShowSaved}
            open={showSaved}
            popContent={<SearchPopup Frames={Frames} />}
            padding="0px"
            Cross={true}
            borderRadius="0.75rem"
          />
        </SearchSection>
      </PageMainWrp>
      <AppFooter />
    </PageWrp>
  );
};

export default CreateDashboard;
