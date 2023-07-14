import React, { useEffect, useState, useCallback } from 'react';
import {
  BentoSectionWrp,
  Custombtntxt,
  Custombtnwpr,
  // Imgwpr,
  // Imgwpr,
  TabAdd,
  // TabBtn,
  // TabBtnWrp,
  // TabIcon,
  TabSectionMainWrp,
  TabSectionWrp,
  Tabwpr,
} from './index.sc';
import BentoBox from '../../bento-box';
// import grid from '../../../assets/img/homePage/grid.svg';
import DashboardPopup from '../../dasboard-popup';
import CustomDrawer from '../../custom-drawer';
import NewCanDrawer from '../../custom-drawer/new-canvas';
import { NewCanvas } from '../../custom-drawer/mock';
import Tabs from '../../tabs';
import CardTitle from '../../tabs/CardTitle';
import WorkSpot from '../../work-spot-slider/WorkSpot';
import AddBlue from '../../../assets/icons/AddBlue';
import ComponentIcon from '../../../assets/img/ComponentIcon';
import CutomIcon from '../../../assets/icons/CutomIcon';
import { axiosGet } from '../../../service';
import SlotDetails from '../../search-result/slot-details';
import GraphSummaryView from '../../l0-view';
import HalfFull from '../../half-full';
import { workspaceConfig } from '../../../constants/widgets';
import { theme } from '../../../constants/theme';
import { useSelector } from 'react-redux';

const TabSection = () => {
  const [showCustom, setShowCustom] = useState(false);
  const [newCanvaspop, setNewCanvaspop] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [tab, setTab] = useState('');
  const [tabSwithLoader, setTabSwitchLoader] = useState(false);
  const [cutomItems, setCustomItems] = useState([]);
  const loader = false;

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const getTabData = useCallback(
    (item) => {
      let res = [];
      const arrayLength = item.data.length;
      const isEvenLength = arrayLength % 2 === 0;
      switch (item.tabVale) {
        case 'spotlight':
          res = item?.data.map((ele) => {
            return {
              id: Math.random().toString,
              data: <HalfFull data={ele} />,
            };
          });
          break;
        case 'my_workspace':
          res = item?.data.map((ele) => {
            const isGraphItem = ele?.dashboardType;
            const ItemComponent = workspaceConfig[ele?.component]?.component;
            const data = ele?.data;

            return {
              id: Math.random().toString,
              data: !isGraphItem ? (
                <ItemComponent data={data} />
              ) : (
                <SlotDetails widget={ele} loader={loader} />
              ),
            };
          });
          break;
        default:
          res = item.data.reduce((acc, curr, index) => {
            const transformedObject = {
              title: curr?.title,
              subTitle: curr?.subTitle,
              components: {
                l0: (
                  <GraphSummaryView
                    data={{
                      title: curr?.title,
                      subText:
                        curr?.data?.summary?.subtext ||
                        curr?.data?.summary?.label,
                      value: curr?.data?.summary?.value,
                    }}
                  />
                ),
                l1: <SlotDetails widget={curr} loader={loader} type="l1" />,
                l2: <SlotDetails widget={curr} loader={loader} type="l2" />,
              },
            };
            if (index % 2 === 0) {
              // Creating a new array for every even index
              acc.push([transformedObject]);
            } else {
              acc[acc.length - 1].push(transformedObject);
            }
            return acc;
          }, []);
          if (!isEvenLength) {
            // Adding dummy element to the last sub-array
            res[res.length - 1].push({
              label: 'Dummy',
              subLabel: 'Dummy',
              components: {
                l0: <div>Dummy</div>,
                l1: <div>Dummy</div>,
                l2: <div>Dummy</div>,
              },
            });
          }
          break;
      }
      return res;
    },
    [loader]
  );

  const fetchTabsData = useCallback(async () => {
    try {
      const response = await axiosGet('/canvas-data', {}, {});
      const data = response.data.data;
      const newData = data.map((item, index) => ({
        id: index,
        title: <CardTitle title={item?.tabLable} />,
        article: getTabData(item),
      }));
      setTabs(newData);
      setTab(newData[0]);
      setCustomItems(data);
    } catch (error) {
      console.error('Error fetching tabs data:', error);
    }
  }, [getTabData]);

  useEffect(() => {
    fetchTabsData();
  }, [fetchTabsData]);

  const handleTabs = (index) => {
    setTabSwitchLoader(true);
    setTab(tabs[index]);
    setTimeout(() => {
      setTabSwitchLoader(false);
    }, 500);
  };

  return (
    <TabSectionMainWrp>
      <TabSectionWrp>
        <Tabwpr>
          {/* <TabIcon src={grid} /> */}
          <ComponentIcon />
          {/* <TabBtnWrp>
            {[
              'Trending',
              'GUCCI',
              'CHANEL',
              'ROCKSTAR',
              'RED BULL',
              'SEPHORA',
            ].map((ele, i) => (
              <TabBtn key={`${ele}-${i}`}>{ele}</TabBtn>
            ))}
          </TabBtnWrp> */}
          <Tabs
            items={tabs}
            variant="card"
            activeColor={theme[selectedTheme].background}
            inactiveColor={theme[selectedTheme].text}
            onChange={handleTabs}
            isContent={false}
            gapitems="1rem"
            bottomBorderWidth="0"
            wraperBorderWidth="0"
            activeCardBGColor={theme[selectedTheme].primary}
            inactiveCardBGColor="transparent"
            cardBorderRadius="5px"
            paddingWrapper="0 .625rem"
          />
          <TabAdd onClick={() => setNewCanvaspop(true)}>
            <AddBlue />
          </TabAdd>
          <DashboardPopup
            open={newCanvaspop}
            toggler={setNewCanvaspop}
            popContent={
              <NewCanDrawer NewCanvas={NewCanvas} toggler={setNewCanvaspop} />
            }
            padding="0"
            borderRadius="0.75rem"
          />
        </Tabwpr>
        <Custombtnwpr onClick={() => setShowCustom(true)}>
          {/* <Imgwpr height="1.5rem" width="1.5rem" src={Img.NpCustomis} alt="" /> */}
          <CutomIcon />
          <Custombtntxt>Customize</Custombtntxt>
        </Custombtnwpr>
        <DashboardPopup
          open={showCustom}
          toggler={setShowCustom}
          popContent={
            <CustomDrawer
              Items={cutomItems}
              toggler={setShowCustom}
              // isList={false}
            />
          }
          padding="0"
          borderRadius="0.75rem"
        />
      </TabSectionWrp>
      <BentoSectionWrp>
        {tab.id === 0 || tab.id === 1 ? (
          <WorkSpot isWorkspace={tab.id === 1} workspotdata={tab.article} />
        ) : tabSwithLoader ? (
          <>loading</>
        ) : (
          <BentoBox
            colWidth={20}
            colCount={6}
            gridGap={0.75}
            boxes={tab?.article || []}
          />
        )}
      </BentoSectionWrp>
    </TabSectionMainWrp>
  );
};

export default TabSection;
