import React, { useState } from 'react';
import Leftbar from './leftbar';
import MainSection from './main-section';
import { MainWrp } from './index.sc';
import { leftbarItems } from './utils';
import Proptypes from 'prop-types';

const SettingsBody = ({ handlePopupClick }) => {
  const [selected, setSelected] = useState('myaccount');
  const onLeftbarTabChange = (tab) => {
    setSelected(tab);
  };
  const getSelectedTabComponent = () => {
    const selectedComponent = leftbarItems.find(
      (item) => item.value === selected
    ).component;
    if (selectedComponent) {
      if (selected === 'myaccount') {
        const MyAccountComponent = React.cloneElement(selectedComponent, {
          handlePopupClick,
        });

        return MyAccountComponent;
      }

      return selectedComponent;
    }
    return <div>Something went wrong</div>;
  };
  return (
    <MainWrp>
      <Leftbar selected={selected} onLeftbarTabChange={onLeftbarTabChange} />
      <MainSection
        component={getSelectedTabComponent()}
        handlePopupClick={handlePopupClick}
      />
    </MainWrp>
  );
};

SettingsBody.propTypes = {
  handlePopupClick: Proptypes.func,
};

export default SettingsBody;
