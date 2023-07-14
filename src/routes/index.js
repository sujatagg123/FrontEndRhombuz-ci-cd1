import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../components/error';
// import { useSelector } from 'react-redux';
import { contents } from '../constants/mock';
import LoginPage from '../pages/login';
import RequireAuth from '../hooks/useAuth';
import { roles } from '../constants';
import Unauthorized from '../components/unauthorized';
import { profile } from '../components/media-database-page/mock';
import DashboardIcon from '../assets/icons/DashboardIcon';
import NewslettersIcon from '../assets/icons/NewslettersIcon';
import MediaDatabashIcon from '../assets/icons/MediaDatabashIcon';
import SettingIcon from '../assets/icons/SettingIcon';

const LazyHome = lazy(() => import('../pages/home'));
const LazyPageNotFound = lazy(() => import('../components/page-not-fount'));
const LazySearchResults = lazy(() => import('../pages/search-results'));
const LazyPopup = lazy(() => import('../components/map-popups/Demo'));
const LazyMediaDatabase = lazy(() => import('../pages/media-database/index'));
const LazyProfilePage = lazy(() => import('../pages/profile-page/index'));
const LazySettings = lazy(() => import('../pages/settings'));
const LazyNewsLetter = lazy(() => import('../pages/news-letter'));
const LazyDashoboard = lazy(() => import('../pages/dashboard'));
const LazyAllWidgets = lazy(() => import('../pages/all-widgets'));
// const LazyPageNotFound = lazy(() => import());

export const navMenu = [
  {
    label: 'Login',
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LoginPage />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    label: 'Home',
    path: '/',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazyHome />
      </Suspense>
    ),
    errorElement: <Error />,
    protected: true,
  },
  {
    label: 'News Letter',
    path: 'news-letter',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazyNewsLetter />
      </Suspense>
    ),
    errorElement: <Error />,
    menuItem: true,
    protected: true,
    icon: <NewslettersIcon />,
  },
  {
    label: 'Media Database',
    path: 'media-database',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazyMediaDatabase />
      </Suspense>
    ),
    errorElement: <Error />,
    menuItem: true,
    icon: <MediaDatabashIcon />,
  },
  {
    label: 'Dashboards',
    path: 'dashboards',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazyDashoboard />
      </Suspense>
    ),
    errorElement: <Error />,
    menuItem: true,
    protected: true,
    icon: <DashboardIcon />,
  },
  {
    label: 'Search Results',
    path: 'search-results/',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazySearchResults />
      </Suspense>
    ),
    errorElement: <Error />,
    menuItem: false,
    protected: true,
  },
  {
    label: 'Search Results',
    path: 'search-results/:searchId',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazySearchResults />
      </Suspense>
    ),
    errorElement: <Error />,
    protected: false,
  },
  {
    label: 'Profile Page',
    path: 'media-database/:profileId',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazyProfilePage profile={profile} />
      </Suspense>
    ),
    errorElement: <Error />,
    protected: false,
  },
  {
    label: 'Settings',
    path: 'settings',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazySettings />
      </Suspense>
    ),
    errorElement: <Error />,
    menuItem: true,
    icon: <SettingIcon />,
  },
  {
    label: 'Popup',
    path: 'popup',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazyPopup recentSearchData={contents} />
      </Suspense>
    ),
    errorElement: <Error />,
    // protected: true,
  },
  {
    label: 'AllWidget',
    path: 'all-widgets',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <LazyAllWidgets />
      </Suspense>
    ),
    errorElement: <Error />,
    // protected: true,
  },
  {
    label: 'Admin',
    path: 'admin',
    element: <div>admin page</div>,
    errorElement: <Error />,
    protected: true,
    role: ['admin'],
  },
];

const AMXRoutes = () => {
  // const token = useSelector((store) => {
  //   return store?.user?.data?.token || '';
  // });

  return (
    <Routes>
      {/* Unprotected routes */}
      {navMenu
        .filter((ele) => !ele.protected)
        .map((ele, i) => (
          <Route
            key={`${ele.path}-${i}`}
            path={ele.path}
            element={ele.element}
            errorElement={ele.errorElement}
          />
        ))}

      {/* Protected routes with roles */}
      {roles.map((role, i) => (
        <Route
          key={`access-control-routes-${i}`}
          element={<RequireAuth allowedRoles={[role.access_type]} />}
        >
          {navMenu
            .filter(
              (ele) => ele.protected && ele?.role?.includes(role.access_type)
            )
            .map((ele, i) => (
              <Route
                key={`${ele.path}-${i}`}
                path={ele.path}
                element={ele.element}
                errorElement={ele.errorElement}
              />
            ))}
        </Route>
      ))}

      {/* Protected routes all roles allowed */}
      <Route
        element={
          <RequireAuth allowedRoles={roles.map((role) => role.access_type)} />
        }
      >
        {navMenu
          .filter((ele) => ele.protected && !ele.role)
          .map((ele, i) => (
            <Route
              key={`${ele.path}-${i}`}
              path={ele.path}
              element={ele.element}
              errorElement={ele.errorElement}
            />
          ))}
      </Route>

      <Route
        label={'Unauthorized'}
        path="/Unauthorized"
        element={<Unauthorized />}
        errorElement={<Error />}
      />
      <Route
        label={'Page Not Fount'}
        path="*"
        element={
          <Suspense fallback={<div>Loading</div>}>
            <LazyPageNotFound />
          </Suspense>
        }
        errorElement={<Error />}
      />
    </Routes>
  );
};

export default AMXRoutes;
