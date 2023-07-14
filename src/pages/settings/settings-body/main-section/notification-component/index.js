import React, { useState } from 'react';
import { BottomWrp, MainWrp } from './index.sc';
import Tabs from '../../../../../components/tabs';
import { TitleBox } from '../../../../../components/tabs/TabTitle';
import NotificationsSettings from './notification-settings';
import Alerts from './notification-alerts';
import { theme } from '../../../../../constants/theme';

const NotificationTabs = [
  {
    id: 0,
    content: '',
    label: 'Notifications',
    type: 'notifications',
  },
  {
    id: 1,
    content: '',
    label: 'Alerts',
    type: 'alerts',
  },
];

const NotificationComponent = () => {
  const [index, setIndex] = useState(0);

  const tabs = NotificationTabs?.map((ele, i) => ({
    ...ele,
    title: <TitleBox title={ele.label} />,
    id: i,
  }));

  const handleTabs = (index) => {
    setIndex(index);
  };

  return (
    <MainWrp>
      <Tabs
        items={!tabs ? [{}] : tabs}
        widthItem={'6rem'}
        variant="underline"
        activeColor={theme.dark.primary}
        inactiveColor="#000000"
        onChange={handleTabs}
        isContent={false}
        bottomBorderWidth="3px"
        paddingWrapper="0.75rem 1rem"
        activeIndex={index}
      />

      <BottomWrp>
        {index === 0 ? <NotificationsSettings /> : <Alerts />}
      </BottomWrp>
    </MainWrp>
  );
};

export default NotificationComponent;
