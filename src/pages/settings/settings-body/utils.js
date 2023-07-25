import React from 'react';
import MyAccount from './main-section/my-account';
import Tags from './main-section/tags';
import Themes from './main-section/themes';
import NotificationComponent from './main-section/notification-component';

export const leftbarItems = [
  {
    label: 'My Account',
    value: 'myaccount',
    component: <MyAccount />,
  },
  {
    label: 'Notifications',
    value: 'notifications',
    component: <NotificationComponent />,
  },
  {
    label: 'Tags',
    value: 'tags',
    component: <Tags />,
  },
  {
    label: 'Themes',
    value: 'themes',
    component: <Themes />,
  },
];

const createLeftbarItems = (handlePopupClick) => [
  {
    label: 'My Account',
    value: 'myaccount',
    component: <MyAccount handlePopupClick={handlePopupClick} />,
  },
  {
    label: 'Notifications',
    value: 'notifications',
    component: <NotificationComponent />,
  },
  {
    label: 'Tags',
    value: 'tags',
    component: <Tags />,
  },
  {
    label: 'Themes',
    value: 'themes',
    component: <Themes />,
  },
];

export default createLeftbarItems;
