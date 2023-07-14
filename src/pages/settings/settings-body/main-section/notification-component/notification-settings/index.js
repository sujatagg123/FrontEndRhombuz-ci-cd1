import React, { useState } from 'react';
import {
  HeaderText,
  MainWrp,
  NotificationsWrp,
  OptionDescrWrp,
  OptionLabel,
  OptionText,
  OptionWrp,
  OptionsWrp,
  SubText,
} from './index.sc';
import ToggleSwitch from '../../../../../../components/toggle-switch';
import { theme } from '../../../../../../constants/theme';
import { Notifications } from '../../../../../../constants/mock';

const NotificationsSettings = () => {
  const [notifications, setNotifications] = useState(Notifications);

  function handleClick(optionType, optionNumber) {
    const updatedNotifications = [...notifications];

    updatedNotifications[optionType].options[optionNumber].selected =
      !updatedNotifications[optionType].options[optionNumber].selected;

    setNotifications(updatedNotifications);
  }

  return (
    <MainWrp>
      {notifications.map((item, i) => {
        return (
          <NotificationsWrp key={i}>
            <HeaderText>{item.label}</HeaderText>
            <SubText>{item.subText}</SubText>
            <OptionsWrp>
              {item.options.map((option, j) => {
                return (
                  <OptionWrp key={j}>
                    <ToggleSwitch
                      accentColor={theme.dark.primary}
                      checked={option.selected}
                      onChange={() => handleClick(i, j)}
                    />
                    <OptionDescrWrp>
                      <OptionLabel>{option.optionLabel}</OptionLabel>
                      <OptionText>{option.optionText}</OptionText>
                    </OptionDescrWrp>
                  </OptionWrp>
                );
              })}
            </OptionsWrp>
          </NotificationsWrp>
        );
      })}
    </MainWrp>
  );
};

export default NotificationsSettings;
