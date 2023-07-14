import { useMutation, useQuery } from '@tanstack/react-query';
import { axiosGet, axiosPostRequest } from '../service';

const getArticleData = (page, type) => {
  return axiosGet('/articles', {
    limit: 50,
    page: page * 50,
    tab: type,
  });
};

const getSearchData = (searchId) => {
  return axiosGet('/searchData', {
    searchId,
  });
};

const handleSearchPost = (payload) => {
  return axiosPostRequest('/api/search', {}, payload);
};

// const handleSearchUpdate = (payload) => {
//   return axiosPutRequest(
//     '/api/search',
//     {
//       searchId,
//     },
//     payload
//   );
// };

const getDashboardData = (searchId) => {
  return axiosGet('/dashboard-data', {
    searchId,
  });
};

const getSearchFilterData = () => {
  return axiosGet('/search-filter', {});
};

export const useSearchData = (searchId) => {
  return useQuery({
    queryKey: ['search-data', searchId],
    queryFn: () => getSearchData(searchId),
    refetchOnWindowFocus: false,
  });
};

export const usePostSearchData = () => {
  return useMutation({ mutationFn: handleSearchPost });
};

// export const useUpdateSearchData = (searchId, onSuccess, onMutate) => {
//   return useMutation(handleSearchUpdate, {
//     onSuccess: () => {
//       onSuccess();
//     },
//     onMutate: () => {
//       onMutate();
//     },
//   });
// };

export const useDashboardData = (searchId) => {
  return useQuery({
    queryKey: ['dashboard-data', searchId],
    queryFn: () => getDashboardData(searchId),
    refetchOnWindowFocus: false,
  });
};

export const useArticleData = (page, type) => {
  return useQuery({
    queryKey: ['articles', page, type],
    queryFn: () => getArticleData(page, type),
    refetchOnWindowFocus: false,
  });
};

export const useSearchFilterData = () => {
  return useQuery({
    queryKey: ['search-filter'],
    queryFn: () => getSearchFilterData(),
    refetchOnWindowFocus: false,
  });
};
