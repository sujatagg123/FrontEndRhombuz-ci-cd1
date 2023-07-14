import React from 'react';
import {
  AlertWrp,
  AlertsWrp,
  ContentText,
  HeaderText,
  IconWrp,
  MainWrp,
  OptionContent,
  OptionLabel,
  OptionText,
  OtherText,
  StatusText,
  StatusWrp,
  SubText,
  TitleWrp,
} from './index.sc';
import MoreOptions from '../../../../../../assets/icons/MoreOptions';
import PlayCircle from '../../../../../../assets/icons/PlayCircle';
import PauseCircle from '../../../../../../assets/icons/PauseCircle';
import { AlertsOptions } from '../../../../../../constants/mock';

const Alerts = () => {
  return (
    <MainWrp>
      <HeaderText>{AlertsOptions.label}</HeaderText>
      <SubText>{AlertsOptions.subText}</SubText>
      <AlertsWrp>
        {AlertsOptions.options.map((option, i) => {
          return (
            <AlertWrp key={i}>
              <TitleWrp>
                <OptionLabel>{option.optionLabel}</OptionLabel>
                <IconWrp>
                  <MoreOptions />
                </IconWrp>
              </TitleWrp>
              <OptionText>{option.optionText}</OptionText>
              <OptionContent>
                {option.alertsIsActive ? (
                  <StatusWrp>
                    <PlayCircle />
                    <StatusText alertsIsActive={option.alertsIsActive}>
                      Alerts Active for
                    </StatusText>
                  </StatusWrp>
                ) : (
                  <StatusWrp>
                    <PauseCircle />
                    <StatusText alertsIsActive={option.alertsIsActive}>
                      Alerts Paused
                    </StatusText>
                  </StatusWrp>
                )}
                <ContentText>
                  Search Volume increases by {option.searchVolIncreasedBy} %
                </ContentText>
                <ContentText>
                  Search Volume decreases by {option.searchVolDecreasedBy} %
                </ContentText>
                <OtherText>{option.someText}</OtherText>
              </OptionContent>
            </AlertWrp>
          );
        })}
      </AlertsWrp>
    </MainWrp>
  );
};

export default Alerts;
