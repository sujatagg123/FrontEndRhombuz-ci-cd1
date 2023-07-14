import React, { useState } from 'react';
import Tabs from '../../../../../components/tabs';
import { theme } from '../../../../../constants/theme';
import { PoptabTitleBox } from '../../../../../components/custom-drawer/mock';
import CustomTable from '../../../../../components/table-component';
import { HeaderSection, Inputwrpr, Searchwpr, TabContent } from './index.sc';
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

const tabs = [
  'Subscription Details',
  'Manage Users',
  'Usage & History',
  'Billing',
  'Profile & Security',
];

const Titletabs = tabs.map((ele, i) => {
  return {
    id: i,
    title: <PoptabTitleBox title={ele} />,
    content: <></>,
  };
});

const addBtnStyle = {
  color: theme.dark.text,
  fontSize: '0.8rem',
  fontWeight: '700',
  lineHeight: '1.125rem',
  letterSpacing: '0.26px',
  textTransform: 'uppercase',
  borderRadius: '0.39rem',
};

const MyAccount = ({ handlePopupClick }) => {
  const [showAddUser, setShowAddUser] = useState(false);
  const pageLimit = 10;
  const queryClient = useQueryClient();

  const handleAddNewUser = (user) => {
    return axiosPostRequest('/add-user', {}, user);
  };

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

  const length = userData?.pages[0].data.total;

  const allTableData = userData?.data?.data?.data;
  // add width as a property to each column and add value -- if required
  const tableHeaders =
    allTableData?.tableHeaders || userData?.pages[0].data.data.tableHeaders;
  const tableData = allTableData?.tableData;
  return (
    <>
      <Tabs
        activeColor={theme.dark.primary}
        inactiveColor={theme.dark.secondaryText}
        items={Titletabs}
        paddingWrapper="0"
        wraperBorderWidth="0"
        gapitems="1rem"
        bottomBorderWidth="3px"
      />
      <div style={{ height: '1.125rem' }}></div>
      <TabContent>
        <HeaderSection>
          <Searchwpr>
            <Inputwrpr placeholder="Search" />
            <SearchIcon />
          </Searchwpr>
          <Button
            title="ADD USER"
            backgroundColor={theme.dark.primary}
            icon={<AddBlue width="10" height="10" color="#ffffff" />}
            btnStyle={addBtnStyle}
            onClick={handleShowAddUser}
          />
          <DashboardPopup
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
    </>
  );
};

MyAccount.propTypes = {
  handlePopupClick: Proptypes.func,
};

export default MyAccount;
