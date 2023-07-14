import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  BackDrop,
  DashboardInnerSection,
  FullSlot,
  HalfSlot,
  SlotWrp,
  UberTextTitle,
  UberTilesWrp,
  UserTilesMainWrp,
} from '../index.sc';
import SlotDetails from '../slot-details';
import UberTiles from '../../uber-tiles';

const DashboardInnerContainer = ({
  dashboardDetails,
  loader,
  selected,
  setSelected,
  tileDetails,
  setArticleType,
}) => {
  const handleClick = (i) => {
    setArticleType([dashboardDetails[i].title, dashboardDetails[i].subTitle]);
    setSelected(i);
  };
  return (
    <DashboardInnerSection id="download-content" selected={selected !== null}>
      <UserTilesMainWrp>
        <UberTextTitle>Results In Figure</UberTextTitle>
        <UberTilesWrp>
          {tileDetails.map((tile, i) => (
            <UberTiles
              key={i}
              data={tile.data}
              change={tile.change}
              isIncreased={tile.isIncreased}
              title={tile.title}
            />
          ))}
        </UberTilesWrp>
      </UserTilesMainWrp>
      <SlotWrp>
        {selected !== null && <BackDrop onClick={() => setSelected(null)} />}
        {dashboardDetails.map((widget, i) =>
          widget.slotType === 'full' ? (
            <FullSlot
              className="graph-widget"
              key={`widget-${i}`}
              selected={i === selected}
              onClick={() => handleClick(i)}
            >
              <SlotDetails widget={widget} loader={loader} selected={i === 0} />
            </FullSlot>
          ) : (
            <HalfSlot
              className="graph-widget"
              key={`widget-${i}`}
              selected={i === selected}
              onClick={() => handleClick(i)}
            >
              <SlotDetails widget={widget} loader={loader} />
            </HalfSlot>
          )
        )}
      </SlotWrp>
    </DashboardInnerSection>
  );
};

DashboardInnerContainer.propTypes = {
  dashboardDetails: PropTypes.arrayOf(object),
  tileDetails: PropTypes.arrayOf(object),
  selected: PropTypes.any,
  loader: PropTypes.bool,
  setSelected: PropTypes.func,
  setArticleType: PropTypes.func,
};

export default DashboardInnerContainer;
