import React, { useState } from 'react';
import NewsLetterTopBar from './newsletter-top-section/top-bar';
import NewsLetterBottomBar from './newsletter-top-section/bottom-bar';
import NewsLetterMiddleSection from './newsletter-middle-section';
import NewsLetterAddSection from './newsletter-add-section';
import { dashboardDetails } from '../../components/search-result/dashboard-mock';
import { MainWrp } from './index.sc';
import AppHeader from '../../components/app-header';
import AppBG from '../../components/app-bg';
import bgsr from '../../assets/img/bg/bg_sr.svg';
import AppFooter from '../../components/app-footer';

const NewsLetter = () => {
  const [searchSelect, setSearchSelect] = useState('');
  return (
    <>
      <AppBG bg1h={'15.5%'} bg1={bgsr} />
      <AppHeader />
      <MainWrp>
        <NewsLetterTopBar />
        <NewsLetterBottomBar
          searchSelect={searchSelect}
          setSearchSelect={setSearchSelect}
        />
        <NewsLetterMiddleSection />
        <NewsLetterAddSection
          searchSelect={searchSelect}
          data={dashboardDetails}
        />
      </MainWrp>
      <AppFooter />
    </>
  );
};

export default NewsLetter;
