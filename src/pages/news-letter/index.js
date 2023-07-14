import React, { useState } from 'react';
import NewsLetterTopBar from './newsletter-top-section/top-bar';
import NewsLetterBottomBar from './newsletter-top-section/bottom-bar';
import NewsLetterMiddleSection from './newsletter-middle-section';
import NewsLetterAddSection from './newsletter-add-section';
import { dashboardDetails } from '../../components/search-result/dashboard-mock';
import { MainWrp } from './index.sc';
import AppHeader from '../../components/app-header';
import AppBG from '../../components/app-bg';

const NewsLetter = () => {
  const [searchSelect, setSearchSelect] = useState('');
  const [isScrollable, setIsScrollable] = useState(true);
  return (
    <>
      <AppBG />
      <AppHeader />
      <MainWrp scroll={isScrollable}>
        <NewsLetterTopBar />
        <NewsLetterBottomBar
          searchSelect={searchSelect}
          setSearchSelect={setSearchSelect}
        />
        <NewsLetterMiddleSection />
        <NewsLetterAddSection
          searchSelect={searchSelect}
          data={dashboardDetails}
          setIsScrollable={setIsScrollable}
        />
      </MainWrp>
    </>
  );
};

export default NewsLetter;
