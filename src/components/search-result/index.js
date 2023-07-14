import React, { useState } from 'react';
import AppBG from '../app-bg';
import AppHeader from '../app-header';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import ChevronRight from '../../assets/icons/ChevronRight';
import {
  Btn,
  BtnWrp,
  IconWrapper,
  NonEditModeContainer,
  SearchContainer,
  SearchPageWrp,
  SearchResultWrp,
  SearchSection,
  SearchWrp,
  SmallTitle,
  HeaderContainer,
  ActionNavigationCon,
  SaveSearchBtn,
  SearchMainWrp,
  WrapperContainer,
  Paginatewpr,
} from './index.sc';
import Close from '../../assets/icons/Close';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardPopup from '../dasboard-popup';
import DashSearchDrwr from '../dashboard-saved-search-drawer';
import { SearchFocusBackdrop } from '../home-page/search-section/index.sc';
import { convertObjToString } from '../../utils';
import Spinner from '../spinner';
import { useSearchData } from '../../hooks/useSearch';
import DashboardSectionComponent from './dashboard-section';
import ArticleSectionComponent from './article-section';
import AddtoCanvas from '../add-to-canvas';
import { CanvasList } from '../custom-drawer/mock';
import { theme } from '../../constants/theme';
import { useSelector } from 'react-redux';
import SavedSearch from '../../assets/icons/SavedSearch';
import FilterComponent from '../search-component/filter';
import SearchPopup from '../search-popup/SearchPopContent';
import { Frames } from '../search-popup/contents';
import SearchComponent from '../search-component';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosPutRequest } from '../../service';
import Pagination from '../pagination';
import IconBox from './IconBox';
import AppFooter from '../app-footer';
import bgsr from '../../assets/img/bg/bg_sr.svg';

const SearchResult = () => {
  const { searchId } = useParams();
  const [activeScreen, setActiveScreen] = useState('');
  const [loader, setLoader] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [guidedSection, setGuidedSection] = useState(false);
  const [showSavedSearch, setShowSavedSearch] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [showNewCandrwr, setShowNewCandrwr] = useState(false);
  // const [guidedSearch, setGuidedSearch] = useState({
  //   all: '',
  //   none: '',
  //   any: '',
  // });
  // const [value, setValue] = useState('');
  const [filterState, setFilterState] = useState();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const maxWords = 10;

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });
  const [type, setType] = useState('totalArticles');

  const {
    isLoading: searchDataLoading,
    // error: searchError,
    data: searchData,
    // isFetching,
  } = useSearchData(searchId);

  const handleSearchUpdate = (payload) => {
    return axiosPutRequest(
      '/api/search',
      {
        searchId,
      },
      payload
    );
  };

  const { mutate: updateSearch } = useMutation({
    mutationFn: handleSearchUpdate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['search-data', searchId] });
      queryClient.invalidateQueries({
        queryKey: ['dashboard-data', searchId],
      });
      queryClient.invalidateQueries({
        queryKey: ['articles', 0, 'totalArticles'],
      });
    },
  });

  const searchedDetails = searchData?.data || {};
  const searchedQuery = searchedDetails?.query;

  // useEffect(() => {
  //   if (searchedQuery !== undefined && searchedQuery !== null) {
  //     console.log('search value inside useeffect');

  //     if (typeof searchedQuery === 'string') {
  //       setValue(searchedQuery);
  //     } else if (typeof searchedQuery === 'object') {
  //       setGuidedSearch(searchedQuery);
  //     } else {
  //       console.log('else type');
  //     }
  //   }
  // }, [searchedQuery]);

  // useEffect(() => {
  //   setFilterState(searchedDetails?.filter);
  // }, [searchedDetails?.filter]);

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
    const words = res.split(/[ ,]+/);
    if (words.length <= maxWords) {
      return res;
    }
    return words.slice(0, maxWords).join(' ') + '...';
  };

  const onBtnClick = (screen) => {
    setLoader(true);
    setActiveScreen(activeScreen === '' ? screen : '');
    setTimeout(() => {
      setLoader(false);
    }, 500);
  };

  // const handleSearchEdit = () => {
  //   setEditMode((old) => !old);
  //   setIsSearchFocused(true);
  // };

  // const handleSearchInputFocus = (isFocused) => {
  //   setIsSearchFocused(isFocused);
  // };

  const handleGuidedToggle = () => {
    setGuidedSection((old) => !old);
  };

  const handleSearchValue = (data) => {
    console.log(data, 'searchResult->data');
    // call search update api
    const updatePayload = {
      ...data,
      filter: filterState,
    };
    updateSearch(updatePayload);
  };

  const handleCancelSearch = () => {
    setGuidedSection(false);
    setEditMode(false);
  };

  const handleCancelSearchResult = () => {
    navigate('/');
  };

  const handleBackdropClick = () => {
    handleCancelSearch();
  };
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();

  // const handleGuidedSearch = (e) => {
  //   const { name, value } = e.target;
  //   setGuidedSearch({
  //     ...guidedSearch,
  //     [name]: value,
  //   });
  // };
  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   console.log(value, 'search value');
  //   setValue(value);
  // };
  const handleEditMode = () => {
    setEditMode(true);
  };
  // const handleUpdateSearch = () => {};
  const handleShowSavedSearches = (e) => {
    e.stopPropagation();
    setShowSaved((old) => !old);
  };

  const handleFilterChange = (data) => {
    // const { name, options } = data;
    console.log(data, 'onFilterChange');
    setFilterState(data);
    // call update api
  };

  const [articleType, setArticleType] = useState([undefined, undefined]);
  if (searchDataLoading) {
    return <Spinner />;
  }

  console.log(filterState, 'filterState');
  const handlePage = (pageNum) => {
    setPage(pageNum);
    queryClient.invalidateQueries(['articles', pageNum, type]);
  };

  return (
    <SearchPageWrp>
      <AppBG bg1h={'11.5%'} bg1={bgsr} />
      <AppHeader />
      <SearchFocusBackdrop
        className={`backdrop ${editMode ? 'active' : ''}`}
        onClick={handleBackdropClick}
      ></SearchFocusBackdrop>
      <SearchMainWrp>
        <SearchSection>
          <SearchWrp className={`search-wrapper ${editMode ? 'active' : ''}`}>
            <NonEditModeContainer>
              <HeaderContainer>
                <SearchContainer onClick={handleEditMode}>
                  <SmallTitle>
                    {truncateQuery(searchedQuery?.split(' ')[0])}
                  </SmallTitle>
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
                  editMode={editMode}
                />
                <ActionNavigationCon>
                  <SaveSearchBtn>Save</SaveSearchBtn>
                  <IconWrapper
                    className="center"
                    onClick={handleCancelSearchResult}
                  >
                    <Close
                      width="28px"
                      height="28px"
                      color={theme[selectedTheme].text}
                    />
                  </IconWrapper>
                </ActionNavigationCon>
              </HeaderContainer>
              <WrapperContainer className={editMode ? 'active' : ''}>
                <SearchComponent
                  // onSearchInputFocus={handleSearchInputFocus}
                  onGuidedToggleFocus={handleGuidedToggle}
                  isFocused={editMode}
                  handleSearchValue={handleSearchValue}
                  guidedSection={guidedSection}
                  handleCancelSearch={handleCancelSearch}
                  isEditMode={editMode}
                  isSearchResult={true}
                  searchedDetails={searchedDetails}
                />
              </WrapperContainer>
            </NonEditModeContainer>
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
        <BtnWrp activeScreen={activeScreen}>
          <Btn
            className={activeScreen === 'dashboard' ? 'inactive' : ''}
            onClick={() => onBtnClick('article')}
          >
            <ChevronLeft color={activeScreen === '' ? '#675EF2' : '#FFFFFF'} />
          </Btn>
          <Btn
            className={activeScreen === 'article' ? 'inactive' : ''}
            onClick={() => onBtnClick('dashboard')}
          >
            <ChevronRight color={activeScreen === '' ? '#675EF2' : '#FFFFFF'} />
          </Btn>
        </BtnWrp>
        <SearchResultWrp activeScreen={activeScreen}>
          <DashboardSectionComponent
            activeScreen={activeScreen}
            loader={loader}
            setArticleType={setArticleType}
          />
          <ArticleSectionComponent
            articleType={articleType}
            activeScreen={activeScreen}
            setArticleType={setArticleType}
            page={page}
            setPage={setPage}
            type={type}
            setType={setType}
            setTotal={setTotal}
          />
        </SearchResultWrp>
        {(activeScreen === 'article' || activeScreen === '') && (
          <Paginatewpr fullScreen={activeScreen === 'article'}>
            <Pagination
              page={page}
              prevClick={handlePage}
              nextClick={handlePage}
              handlePage={handlePage}
              total={total}
              align="end"
              limit={50}
            />
            <IconBox />
          </Paginatewpr>
        )}
      </SearchMainWrp>
      <AppFooter />
      <DashboardPopup
        popContent={<DashSearchDrwr toggler={setShowSavedSearch} />}
        padding="1.75rem"
        open={showSavedSearch}
        toggler={setShowSavedSearch}
        borderRadius="1rem"
      />
      <AddtoCanvas
        open={showNewCandrwr}
        toggler={setShowNewCandrwr}
        CanvasList={CanvasList}
      />
    </SearchPageWrp>
  );
};

export default SearchResult;
