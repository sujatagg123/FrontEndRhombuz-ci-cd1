import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import dashbaordSlice from './slices/dashboardSlice';
import themeSlice from './slices/themeSlice';
import searchSlice from './slices/searchSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    dashboard: dashbaordSlice,
    theme: themeSlice,
    search: searchSlice,
  },
});

export default store;
