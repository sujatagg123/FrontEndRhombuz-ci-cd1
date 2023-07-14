import React, { useState } from 'react';
import AppBG from '../app-bg';
import AppHeader from '../app-header';
import {
  DashboardBoxwpr,
  DashboardHeader,
  DashboardPagewpr,
  Dashboardwpr,
  HeaderRight,
  HeaderTitlewpr,
  Iconwpr,
} from './index.sc';
import GridDashboard from './GridDashboard';
import NpLeftSidebar from '../../assets/icons/Np_left_sidebar';
import ListIcon2 from '../../assets/icons/ListIcon2';
import SearchPopup from '../search-popup/SearchPopContent';
import { useQuery } from '@tanstack/react-query';
import { axiosGet } from '../../service';
import { Frames } from '../search-popup/contents';

const Dashboard = () => {
  const [view, setView] = useState('dashboard');

  const { data } = useQuery({
    queryKey: ['saved-searches'],
    queryFn: async ({ pageParam = 1 }) =>
      axiosGet('/saved-search', {
        limit: 0,
        page: pageParam,
        fiterType: '',
      }),

    refetchOnWindowFocus: false,
  });
  const length = data?.data?.total;

  return (
    <DashboardPagewpr>
      <AppBG />
      <AppHeader />
      <Dashboardwpr>
        <DashboardHeader>
          <HeaderTitlewpr>All Dashboards ({length})</HeaderTitlewpr>
          <HeaderRight>
            <Iconwpr
              active={view === 'dashboard'}
              onClick={() => setView('dashboard')}
            >
              <NpLeftSidebar />
            </Iconwpr>
            <Iconwpr active={view === 'list'} onClick={() => setView('list')}>
              <ListIcon2 />
            </Iconwpr>
          </HeaderRight>
        </DashboardHeader>
        <DashboardBoxwpr>
          {view === 'dashboard' && <GridDashboard setView={setView} />}
          {view === 'list' && <SearchPopup isPopup={false} Frames={Frames} />}
        </DashboardBoxwpr>
      </Dashboardwpr>
    </DashboardPagewpr>
  );
};

export default Dashboard;
