import React, { useState } from 'react';
import {
  DashboardGraphheaderwpr,
  DashbordCmnentwpr,
  DashbrdGraphconrwpr,
  HeaderLeft,
  IconsBoxwpr,
  Iconwpr,
  Titletxtwpr,
} from './index.sc';
import DashboardList from '../../DashbordList';
import RedirectIcon from '../../../assets/icons/RedirectIcon';
import Edit3 from '../../../assets/icons/Edit3';
import BookmarkIcon from '../../../assets/icons/BookmarkIcon';
import Share2 from '../../../assets/icons/Share2';
import Download2 from '../../../assets/icons/Download2';
import Trash2 from '../../../assets/icons/Trash2';
import { useDashboardData } from '../../../hooks/useSearch';
import { useParams } from 'react-router-dom';
import DashboardInnerContainer from '../../search-result/dashboard-section/DashboardInnerContainer';
import Spinner from '../../spinner';

const GridDashboard = () => {
  const [active, setActive] = useState(0);
  const { searchId } = useParams();
  const handleListClick = (id) => {
    setActive(id);
  };

  const {
    isLoading: dashboardDataLoading,
    // error: searchError,
    data: dashboardData,
    // isFetching,
  } = useDashboardData(searchId);

  const tileDetails = dashboardData?.data?.data?.summary || [];
  const dashboardDetails = dashboardData?.data?.data?.dashboardDetails || [];

  if (dashboardDataLoading) {
    return <Spinner />;
  }

  return (
    <DashbordCmnentwpr>
      <DashboardList active={active} setActive={handleListClick} />
      <DashbrdGraphconrwpr>
        <DashboardGraphheaderwpr>
          <HeaderLeft>
            <Titletxtwpr>{dashboardDetails.title || 'GUCCI'}</Titletxtwpr>
            <Iconwpr>
              <RedirectIcon />
            </Iconwpr>
          </HeaderLeft>
          <IconsBoxwpr>
            <Iconwpr>
              <Edit3 />
            </Iconwpr>
            <Iconwpr>
              <BookmarkIcon />
            </Iconwpr>
            <Iconwpr>
              <Share2 />
            </Iconwpr>
            <Iconwpr>
              <Download2 />
            </Iconwpr>
            <Iconwpr>
              <Trash2 />
            </Iconwpr>
          </IconsBoxwpr>
        </DashboardGraphheaderwpr>
        <DashboardInnerContainer
          dashboardDetails={dashboardDetails}
          tileDetails={tileDetails}
          selected={null}
          loader={false}
        />
      </DashbrdGraphconrwpr>
    </DashbordCmnentwpr>
  );
};

export default GridDashboard;
