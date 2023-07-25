import React, { useEffect, useState } from 'react';
import Tabs from '../../../../../components/tabs';
import { theme } from '../../../../../constants/theme';
import { PoptabTitleBox } from '../../../../../components/custom-drawer/mock';
import CustomTable from '../../../../../components/table-component';
import {
  HeaderSection,
  Inputwrpr,
  LeftSection,
  RightSection,
  Searchwpr,
  TabContent,
  UserCountText,
  UserCountWrp,
  UsersText,
} from './index.sc';
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { axiosGet, axiosPostRequest } from '../../../../../service';
import { SearchIcon } from '../../../../../assets/icons/SearchIcon';
import { Button } from '../../../../../components/button';
import AddBlue from '../../../../../assets/icons/AddBlue';
import DashboardPopup from '../../../../../components/dasboard-popup';
import AddUserPopup from './add-user';
import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const myAccountTabs = [
  {
    label: 'Subscription Details',
    type: 'subscription_details',
  },
  {
    label: 'Manage Users',
    type: 'manage_users',
  },
  {
    label: 'Usage & History',
    type: 'usage_history',
  },
  {
    label: 'Billing',
    type: 'billing',
  },
  {
    label: 'Profile & Security',
    type: 'profile_security',
  },
];

const tabToIndex = {};
const indexToTab = {};
myAccountTabs.forEach((tab, i) => {
  tabToIndex[tab.type] = i;
});
myAccountTabs.forEach((tab, j) => {
  indexToTab[j] = tab.type;
});

const Titletabs = myAccountTabs.map((ele, i) => {
  return {
    id: i,
    title: <PoptabTitleBox title={ele.label} />,
    content: <>hello</>,
  };
});

const addBtnStyle = {
  color: theme.dark.text,
  fontFamily: 'Inter',
  fontSize: '0.9375rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: ' 1.125rem' /* 120% */,
  letterSpacing: '-0.01875rem',
};

const MyAccount = ({ handlePopupClick }) => {
  const { tab1, tab2 } = useParams();
  const navigate = useNavigate();
  const [showAddUser, setShowAddUser] = useState(false);
  const pageLimit = 10;
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!tab2) {
      navigate(`/settings/${tab1}/${indexToTab[0]}`);
    }
  }, [navigate, tab1, tab2]);

  const handleAddNewUser = (user) => {
    return axiosPostRequest('/add-user', {}, user);
  };

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const {
    mutate: addNewUser,
    data: newUserData,
    isSuccess,
    //  isError,
    //  error: addNewUserError,
  } = useMutation({
    mutationFn: (newUser) => handleAddNewUser(newUser),
    onSuccess: () => {
      console.log(newUserData, 'newuserdata', isSuccess, 'Success');
      queryClient.invalidateQueries({ queryKey: ['users-data'] });
    },
  });

  const handleShowAddUser = () => {
    setShowAddUser((old) => !old);
  };

  const handleSaveAddUser = (data) => {
    console.log(data, 'add new user');
    addNewUser(data);
  };

  const getUserData = async ({ pageParam = 1 }) => {
    return axiosGet('/users', {
      limit: pageLimit,
      page: pageParam,
    });
  };
  const {
    data: userData,
    error,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['users-data'],
    queryFn: getUserData,
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    refetchOnWindowFocus: false,
  });

  const handleLoad = () => {
    fetchNextPage();
  };

  const handleTabs = (index) => {
    setIndex(index);
    navigate(`/settings/${tab1}/${indexToTab[index]}`);
  };

  const [index, setIndex] = useState(tabToIndex[tab2] || 0);

  const length = userData?.pages[0].data.total;

  const allTableData = userData?.data?.data?.data;
  // add width as a property to each column and add value -- if required
  const tableHeaders =
    allTableData?.tableHeaders || userData?.pages[0].data.data.tableHeaders;
  const tableData = allTableData?.tableData;

  const isOneofTabs = myAccountTabs.find((tab) => tab.type === tab2);

  return (
    <>
      <Tabs
        activeColor={theme[selectedTheme].primary}
        inactiveColor={theme[selectedTheme].tabInactive}
        items={Titletabs}
        paddingWrapper="0"
        wraperBorderWidth="0"
        gapitems="1rem"
        bottomBorderWidth="3px"
        onChange={handleTabs}
        currentTab={index}
      />
      <div style={{ height: '1.88rem' }}></div>
      {!isOneofTabs ? (
        <div>Something went wrong</div>
      ) : index === 1 ? (
        <TabContent>
          <HeaderSection>
            <LeftSection>
              <UsersText>Users</UsersText>
              <UserCountWrp>
                <UserCountText>{length} Users</UserCountText>
              </UserCountWrp>
            </LeftSection>
            <RightSection>
              <Searchwpr>
                <Inputwrpr placeholder="Search" />
                <SearchIcon />
              </Searchwpr>
              <Button
                title="Add User"
                backgroundColor={theme[selectedTheme].primary}
                icon={
                  <AddBlue
                    width="10"
                    height="10"
                    color={theme[selectedTheme].background}
                  />
                }
                btnStyle={addBtnStyle}
                onClick={handleShowAddUser}
              />
              <DashboardPopup
                width={'35vw'}
                open={showAddUser}
                toggler={setShowAddUser}
                popContent={
                  <AddUserPopup
                    toggler={setShowAddUser}
                    heading="Add New User"
                    handleSave={handleSaveAddUser}
                  />
                }
                padding="0"
                borderRadius="0.75rem"
              />
            </RightSection>
          </HeaderSection>
          <CustomTable
            isLoading={isLoading}
            isError={error}
            tableHeaders={tableHeaders}
            tableData={tableData}
            handlePopupClick={handlePopupClick}
            length={length}
            data={userData}
            pageLimit={pageLimit}
            handleLoad={handleLoad}
            infiniteLoading={true}
          />
        </TabContent>
      ) : (
        myAccountTabs[index].label + ' tab In Progress'
      )}
    </>
  );
};

MyAccount.propTypes = {
  handlePopupClick: Proptypes.func,
};

export default MyAccount;
