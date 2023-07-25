import React, { useEffect, useMemo, useState } from 'react';
import NotificationIncreaseIcon from '../../assets/icons/NotificationIncrease';
import PropTypes from 'prop-types';
import {
  ContentWrp,
  CountText,
  DayText,
  DayTextWrp,
  HeaderText,
  HeaderWrp,
  MainWrp,
  NotificationCloseIconWrp,
  NotificationCountWrp,
  NotificationSettingIconWrp,
  NotificationWrp,
  PopupWrp,
} from './index.sc';
import Close from '../../assets/icons/Close';
import NotificationSettingIcon from '../../assets/icons/NotificationSettingIcon';
import IconNotificationComponent from './icon-notification-component';
import ImageNotificationComponent from './image-notification-component';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { axiosGet } from '../../service';

const NotificationPopup = ({
  notificationPopupIsOpen,
  handleNotificationPopup,
}) => {
  const currentDate = useMemo(() => new Date(), []);
  const [currentData, setCurrentData] = useState([]);

  const initialData = useMemo(
    () => [
      {
        day: 'Today',
        notifications: [],
      },
      {
        day: 'Older',
        notifications: [],
      },
    ],
    []
  );

  const getNotifications = () => {
    return axiosGet('/notifications', {}, {});
  };

  const { data: notifications = [] } = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
    refetchOnWindowFocus: false,
  });

  const allNotificationData = notifications?.data?.data;
  const navigate = useNavigate();

  useEffect(() => {
    if (allNotificationData) {
      const finalNotificationData = JSON.parse(JSON.stringify(initialData));
      allNotificationData.forEach((notification) => {
        const updatedNotification = {
          ...notification,
          icon: notification?.isIncreased ? <NotificationIncreaseIcon /> : '',
        };
        const timeStamp = new Date(notification.timeStamp);
        if (timeStamp.toDateString() === currentDate.toDateString()) {
          finalNotificationData[0].notifications.push(updatedNotification);
        } else {
          finalNotificationData[1].notifications.push(updatedNotification);
        }
      });

      setCurrentData(finalNotificationData);
    }
  }, [currentDate, allNotificationData, initialData]);

  // function checkTimestamp(date) {
  //   const currentDate = new Date();

  //   const timestampDate = new Date(date);

  //   currentDate.setHours(0, 0, 0, 0);
  //   timestampDate.setHours(0, 0, 0, 0);

  //   const timeDiff = currentDate.getTime() - timestampDate.getTime();

  //   const oneDay = 24 * 60 * 60 * 1000;

  //   if (timeDiff < oneDay && timeDiff >= 0) {
  //     return 'today';
  //   } else if (timeDiff < 2 * oneDay && timeDiff >= oneDay) {
  //     return 'yesterday';
  //   } else {
  //     return 'Neither today nor yesterday';
  //   }
  // }

  const handleClickNotificationSettings = () => {
    navigate('/settings/notifications/alerts');
    handleNotificationPopup();
  };

  return (
    <>
      {notificationPopupIsOpen && <MainWrp isOpen={notificationPopupIsOpen} />}
      <PopupWrp isOpen={notificationPopupIsOpen}>
        <HeaderWrp>
          <NotificationCloseIconWrp onClick={() => handleNotificationPopup()}>
            <Close />
          </NotificationCloseIconWrp>
          <NotificationSettingIconWrp onClick={handleClickNotificationSettings}>
            <NotificationSettingIcon />
          </NotificationSettingIconWrp>
          <HeaderText>Notifications</HeaderText>
          <NotificationCountWrp>
            <CountText>{allNotificationData?.length || 0} New</CountText>
          </NotificationCountWrp>
        </HeaderWrp>
        <ContentWrp>
          {currentData.map((element) => (
            <div key={element.day}>
              <DayTextWrp>
                <DayText>{element.day}</DayText>
              </DayTextWrp>
              <NotificationWrp>
                {element.notifications.map((notification, i) => {
                  return (
                    <React.Fragment key={i}>
                      {notification.type === 'icon' && (
                        <IconNotificationComponent data={notification} />
                      )}
                      {notification.type === 'image' && (
                        <ImageNotificationComponent data={notification} />
                      )}
                    </React.Fragment>
                  );
                })}
              </NotificationWrp>
            </div>
          ))}
        </ContentWrp>
      </PopupWrp>
    </>
  );
};

NotificationPopup.propTypes = {
  notificationPopupIsOpen: PropTypes.bool,
  handleNotificationPopup: PropTypes.func,
};

export default NotificationPopup;
