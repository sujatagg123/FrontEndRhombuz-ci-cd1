import React from 'react';
import {
  NewsLetterBackground,
  NewsletterTitle,
  NewsletterTitleText,
  TitleBox,
  TitleBoxBottomText,
  TitleBoxBottomWrp,
  TitleBoxWrp,
} from './index.sc';

const NewsLetterMiddleSection = () => {
  return (
    <NewsLetterBackground>
      <TitleBox>
        <TitleBoxWrp>
          <NewsletterTitle>Title</NewsletterTitle>
          <NewsletterTitleText>
            This is a placeholder text used for demonstration purposes. Please
            replace this text with your own content when you are ready.
          </NewsletterTitleText>
        </TitleBoxWrp>
        <TitleBoxBottomWrp>
          <TitleBoxBottomText>AlphametricX</TitleBoxBottomText>
          <TitleBoxBottomText>Published On:</TitleBoxBottomText>
        </TitleBoxBottomWrp>
      </TitleBox>
    </NewsLetterBackground>
  );
};

export default NewsLetterMiddleSection;
