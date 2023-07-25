import React, { useEffect, useRef, useState } from 'react';
import {
  Boldtxtwpr,
  BottomBarWrp,
  BtnWrp,
  EmailBox,
  EmailPop,
  ErrorText,
  Inputwpr,
  Lightwpr,
  Popbtnwpr,
  PopupBottonWrp,
  Popupheader,
  SelectedText,
  SelectedWrp,
  SwichBox,
  TimeBox,
  VerticalLine,
} from './index.sc';
import DashboardPopup from '../../../../components/dasboard-popup';
import Nwsbtnpop from '../../../../components/icon-popup';
import {
  Days,
  NewsletterFrames,
  Times,
  Types,
  // contents,
} from '../../../../components/search-popup/contents';
import Proptypes from 'prop-types';
import SearchPopup from '../../../../components/search-popup/SearchPopContent';
import Close from '../../../../assets/icons/Close';
import { theme } from '../../../../constants/theme';
import { useSelector } from 'react-redux';
import { Button } from '../../../../components/button';

const NewsLetterBottomBar = ({ searchSelect, setSearchSelect }) => {
  const [openSearch, setopenSearch] = useState(false);
  const [time, setTime] = useState();
  const [type, setType] = useState();
  const [day, setDay] = useState();
  const [emailPop, setEmailPop] = useState(false);
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const handleTime = (id) => {
    const item = Times.filter((item) => item.id === id)[0];
    setTime(item);
  };

  const handleType = (id) => {
    const item = Types.filter((item) => item.id === id)[0];
    setType(item);
  };

  const handleDays = (id) => {
    const item = Days.filter((item) => item.id === id)[0];
    setDay(item);
  };

  const handleSearched = (content) => {
    setSearchSelect(content.title);
  };

  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmails = (e) => {
    e.stopPropagation();
    if (validateEmail(email)) {
      setEmails([...emails, email]);
      setEmail('');
      setIsValidEmail(true);
      setEmailPop(false);
    } else {
      setIsValidEmail(false);
      setEmailPop(true);
      setTimeout(() => {
        setIsValidEmail(true);
      }, 5000);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const emailPopRef = useRef(null);

  const handleClickOutside = (event) => {
    if (emailPopRef.current && !emailPopRef.current.contains(event.target)) {
      setEmailPop(false);
    }
  };

  const handleEmailInputClick = (e) => {
    e.stopPropagation();
  };

  const handleCancel = (e, type, emailToRemove) => {
    e.stopPropagation();
    if (type === 'search') {
      setSearchSelect(null);
    } else if (type === 'day') {
      setDay(null);
    } else if (type === 'time') {
      setTime(null);
    } else if (type === 'type') {
      setType(null);
    } else if (type === 'email') {
      setEmails(emails.filter((email) => email !== emailToRemove));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <BottomBarWrp>
      <SwichBox width="25%">
        <Boldtxtwpr>Select Search</Boldtxtwpr>
        <Lightwpr opacity={searchSelect} onClick={() => setopenSearch(true)}>
          {searchSelect ? (
            <>
              <SelectedWrp>
                <SelectedText>{searchSelect}</SelectedText>
                <BtnWrp onClick={(e) => handleCancel(e, 'search')}>
                  <Close
                    color={theme[selectedTheme].text}
                    height="16"
                    width="16"
                  />
                </BtnWrp>
              </SelectedWrp>
            </>
          ) : (
            <Popbtnwpr>
              <span>{'Select'}</span>
            </Popbtnwpr>
          )}
        </Lightwpr>
        <DashboardPopup
          toggler={setopenSearch}
          open={openSearch}
          popContent={
            <SearchPopup
              toggler={setopenSearch}
              handleClick={handleSearched}
              isNewsletter={true}
              Frames={NewsletterFrames}
              isIcons={false}
            />
          }
          padding="0px"
          Cross={true}
          borderRadius="0"
        />
      </SwichBox>

      <VerticalLine />
      <SwichBox width="25%">
        <Boldtxtwpr>Add Recipients</Boldtxtwpr>
        <Popbtnwpr ref={emailPopRef} onClick={() => setEmailPop(!emailPop)}>
          <EmailBox>
            {emails.length ? (
              emails.map((email, i) => {
                return (
                  <SelectedWrp key={i}>
                    <SelectedText>{email}</SelectedText>
                    <BtnWrp onClick={(e) => handleCancel(e, 'email', email)}>
                      <Close
                        color={theme[selectedTheme].text}
                        height="16"
                        width="16"
                      />
                    </BtnWrp>
                  </SelectedWrp>
                );
              })
            ) : (
              <span>{'Add Email ids'}</span>
            )}
          </EmailBox>
          {emailPop && (
            <EmailPop>
              <Popupheader>Enter Email Address</Popupheader>
              <Inputwpr
                onClick={handleEmailInputClick}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
              />
              <PopupBottonWrp>
                {!isValidEmail && (
                  <ErrorText>Please enter a valid email address</ErrorText>
                )}
                <Button
                  title="Add"
                  backgroundColor={theme[selectedTheme].primary}
                  onClick={(e) => handleEmails(e)}
                ></Button>
              </PopupBottonWrp>
            </EmailPop>
          )}
        </Popbtnwpr>
      </SwichBox>

      <VerticalLine />

      <TimeBox>
        <SwichBox width="100%">
          <Boldtxtwpr>Send On</Boldtxtwpr>
          <Nwsbtnpop handleClick={handleDays} Items={Days} currentItem={day}>
            <Lightwpr opacity={true} handleClick={handleDays}>
              {day ? (
                <>
                  <SelectedWrp>
                    <SelectedText>{day.label}</SelectedText>
                    <BtnWrp onClick={(e) => handleCancel(e, 'day')}>
                      <Close
                        color={theme[selectedTheme].text}
                        height="16"
                        width="16"
                      />
                    </BtnWrp>
                  </SelectedWrp>
                </>
              ) : (
                <SelectedWrp>
                  <SelectedText>
                    {'Daily - Mon, Tue, Wed, Thu, Fri'}
                  </SelectedText>
                  <BtnWrp onClick={(e) => handleCancel(e, 'day')}></BtnWrp>
                </SelectedWrp>
              )}
            </Lightwpr>
          </Nwsbtnpop>
        </SwichBox>

        <VerticalLine />

        <SwichBox width="50%">
          <Boldtxtwpr>Send Time</Boldtxtwpr>
          <Nwsbtnpop handleClick={handleTime} Items={Times} currentItem={time}>
            <Lightwpr opacity={time} handleClick={handleTime}>
              {time ? (
                <>
                  <SelectedWrp>
                    <SelectedText>{time.label}</SelectedText>
                    <BtnWrp onClick={(e) => handleCancel(e, 'time')}>
                      <Close
                        color={theme[selectedTheme].text}
                        height="16"
                        width="16"
                      />
                    </BtnWrp>
                  </SelectedWrp>
                </>
              ) : (
                <Popbtnwpr>
                  <span>{'Select'}</span>
                </Popbtnwpr>
              )}
            </Lightwpr>
          </Nwsbtnpop>
        </SwichBox>
      </TimeBox>

      <VerticalLine />

      <SwichBox width="10%">
        <Boldtxtwpr>Publish as</Boldtxtwpr>
        <Nwsbtnpop handleClick={handleType} Items={Types} currentItem={type}>
          <Lightwpr opacity={type} handleClick={handleTime}>
            {type ? (
              <>
                <SelectedWrp>
                  <SelectedText>{type.label}</SelectedText>
                  <BtnWrp onClick={(e) => handleCancel(e, 'type')}>
                    <Close
                      color={theme[selectedTheme].text}
                      height="16"
                      width="16"
                    />
                  </BtnWrp>
                </SelectedWrp>
              </>
            ) : (
              <Popbtnwpr>
                <span>{'Select'}</span>
              </Popbtnwpr>
            )}
          </Lightwpr>
        </Nwsbtnpop>
      </SwichBox>
    </BottomBarWrp>
  );
};

NewsLetterBottomBar.propTypes = {
  setSearchSelect: Proptypes.func.isRequired,
  searchSelect: Proptypes.string,
};

export default NewsLetterBottomBar;
