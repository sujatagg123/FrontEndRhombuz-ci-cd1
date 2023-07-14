import React, { useEffect, useRef, useState } from 'react';
import {
  Boldtxtwpr,
  BottomBarWrp,
  EmailBox,
  EmailPop,
  Inputwpr,
  Lightwpr,
  Popbtnwpr,
  SwichBox,
  TimeBox,
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

const NewsLetterBottomBar = ({ searchSelect, setSearchSelect }) => {
  const [openSearch, setopenSearch] = useState(false);
  const [time, setTime] = useState(Times[0]);
  const [type, setType] = useState(Types[0]);
  const [day, setDay] = useState(Days[0]);
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

  const handleEmails = () => {
    if (email) setEmails([...emails, email]);
    setEmail('');
  };

  const emailPopRef = useRef(null);

  const handleClickOutside = (event) => {
    if (emailPopRef.current && !emailPopRef.current.contains(event.target)) {
      setEmailPop(false);
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
      <SwichBox style={{ border: 'none' }}>
        <Boldtxtwpr>Select Search</Boldtxtwpr>
        <Lightwpr opacity={searchSelect} onClick={() => setopenSearch(true)}>
          {searchSelect || 'Select'}
        </Lightwpr>
        <DashboardPopup
          toggler={setopenSearch}
          open={openSearch}
          popContent={
            <SearchPopup
              toggler={setopenSearch}
              handleClick={handleSearched}
              isNewsletter={true}
              NewsletterFrames={NewsletterFrames}
              isIcons={false}
            />
          }
          padding="0px"
          Cross={true}
          borderRadius="0"
        />
      </SwichBox>

      <SwichBox>
        <Boldtxtwpr>Add Recipients</Boldtxtwpr>
        <Popbtnwpr ref={emailPopRef}>
          <EmailBox onClick={() => setEmailPop(!emailPop)}>
            {emails.length
              ? emails.map((email, i) => email + ',')
              : 'Add Email ids'}
          </EmailBox>
          {emailPop && (
            <EmailPop>
              <Inputwpr
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
              />
              <button onClick={handleEmails}>Save</button>
            </EmailPop>
          )}
        </Popbtnwpr>
      </SwichBox>
      <TimeBox>
        <SwichBox>
          <Boldtxtwpr>Send On</Boldtxtwpr>
          <Nwsbtnpop handleClick={handleDays} Items={Days}>
            <Popbtnwpr>
              <span>{day.label || 'Daily - Mon, Tue, Wed, Thu, Fri'}</span>
            </Popbtnwpr>
          </Nwsbtnpop>
        </SwichBox>

        <SwichBox>
          <Boldtxtwpr>Send Time</Boldtxtwpr>
          <Nwsbtnpop handleClick={handleTime} Items={Times}>
            <Popbtnwpr>
              <span>{time.label}</span>
            </Popbtnwpr>
          </Nwsbtnpop>
        </SwichBox>
      </TimeBox>
      <SwichBox width="10%">
        <Boldtxtwpr>Publish as</Boldtxtwpr>
        <Nwsbtnpop handleClick={handleType} Items={Types}>
          <Popbtnwpr>
            <span>{type.label}</span>
          </Popbtnwpr>
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
