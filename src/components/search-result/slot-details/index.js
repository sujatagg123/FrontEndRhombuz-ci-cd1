import React, { useState } from 'react';
import Proptypes from 'prop-types';
import {
  GraphTypeBtn,
  GraphTypeBtnWrapper,
  SlotBody,
  SlotBodyTabBody,
  SlotBodyTabWrp,
  SlotDetailsMainWrp,
  SlotDetailsWrp,
  SlotHeader,
  SlotHeaderLeft,
  SlotHeaderRight,
  SlotSubTitle,
  SlotTitle,
  TooltipBody,
  TooltipBodyLabel,
  TooltipBodyValue,
  TooltipTitle,
  TooltipWrapper,
} from '../index.sc';
import Loader from '../../loader';
import PortalTooltip from '../../portal-tooltip';
import { graphTypes, widgetMapping } from '../../../constants/widgets';

const generateGraphComponent = (widget, defaultConfig, type, dashboardType) => {
  // console.log(widgetMapping, dashboardType, widget.component);

  const { bentoView } = widgetMapping[dashboardType][widget.component];

  const GraphComponent =
    type === 'dashboard' || type === 'l2'
      ? graphTypes[widget.graphType].component
      : bentoView[type]?.component;

  const finalConfig = {
    ...(type === 'dashboard' || type === 'l2'
      ? graphTypes[widget.graphType].config
      : bentoView[type]?.config),
    ...defaultConfig,
  };

  return <GraphComponent data={widget.data} config={finalConfig} />;
};

const SlotDetails = ({
  widget,
  loader,
  type = 'dashboard',
  dashboardType = 'overview',
}) => {
  const [enableTooltip, setEnableTooltip] = useState(false);
  const [toolTipPos, setToolTipPos] = useState({ left: 0, top: 0 });
  const [tooltipData, setTooltipData] = useState();

  const [activeBtn, setActiveBtn] = useState('trendline');

  const tooltipEnabled =
    widgetMapping[widget.component]?.bentoView?.l2?.config?.enableTooltip;

  const handleMouseEnter = (event, d, i) => {
    if (tooltipEnabled) {
      setEnableTooltip(true);
      setToolTipPos({
        ...toolTipPos,
        left: event.clientX,
        top: event.clientY - 10,
      });
      const tData = d.data || d;
      setTooltipData({ label: tData?.label, value: tData?.value });
    }
  };

  const handleMouseMove = (event, d, i) => {
    if (tooltipEnabled) {
      setToolTipPos({
        ...toolTipPos,
        left: event.clientX,
        top: event.clientY - 10,
      });
    }
  };
  const handleMouseLeave = (event, d, i) => {
    if (tooltipEnabled) {
      setToolTipPos({
        left: 0,
        top: 0,
      });
      setEnableTooltip(false);
      setTooltipData();
    }
  };

  const defaultConfig = {
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
  };

  const handleTabBtnClick = (e, tab) => {
    e.stopPropagation();
    setActiveBtn(tab);
  };

  return (
    <SlotDetailsMainWrp>
      <SlotDetailsWrp>
        <SlotHeader>
          <SlotHeaderLeft>
            <SlotTitle>{widget.title}</SlotTitle>
            <SlotSubTitle>{widget.subTitle}</SlotSubTitle>
          </SlotHeaderLeft>
          {widget.enableTabs && (
            <SlotHeaderRight>
              <GraphTypeBtnWrapper>
                <GraphTypeBtn
                  className={activeBtn === 'trendline' ? 'active' : ''}
                  onClick={(e) => handleTabBtnClick(e, 'trendline')}
                >
                  Trendline
                </GraphTypeBtn>
                <GraphTypeBtn
                  className={activeBtn === 'bar' ? 'active' : ''}
                  onClick={(e) => handleTabBtnClick(e, 'bar')}
                >
                  Bar
                </GraphTypeBtn>
              </GraphTypeBtnWrapper>
            </SlotHeaderRight>
          )}
        </SlotHeader>
        <SlotBody>
          {widget.enableTabs && <SlotBodyTabWrp></SlotBodyTabWrp>}
          <SlotBodyTabBody enableTabs={widget.enableTabs}>
            {loader ? (
              <Loader />
            ) : (
              generateGraphComponent(
                activeBtn === 'trendline' ? widget : widget,
                defaultConfig,
                type,
                dashboardType
              )
            )}
          </SlotBodyTabBody>
          {tooltipEnabled && enableTooltip && (
            <PortalTooltip
              isOpen={true}
              pos={toolTipPos}
              align={toolTipPos.left > window.innerWidth / 2 ? 'left' : 'right'}
              vAlign={
                toolTipPos.top > window.innerHeight / 2 ? 'top' : 'bottom'
              }
            >
              <TooltipWrapper>
                <TooltipTitle>{tooltipData?.label}</TooltipTitle>
                <TooltipBody>
                  <TooltipBodyLabel>Total Articles</TooltipBodyLabel>
                  <TooltipBodyValue>{tooltipData?.value}</TooltipBodyValue>
                </TooltipBody>
              </TooltipWrapper>
            </PortalTooltip>
          )}
        </SlotBody>
      </SlotDetailsWrp>
    </SlotDetailsMainWrp>
  );
};

SlotDetails.defaultProps = {
  type: 'dashboard',
};

SlotDetails.propTypes = {
  widget: Proptypes.object,
  loader: Proptypes.bool,
  type: Proptypes.string,
  dashboardType: Proptypes.string,
};

export default SlotDetails;
