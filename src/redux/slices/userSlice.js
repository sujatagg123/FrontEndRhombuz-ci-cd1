import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userDetails } from '../constants';
import { axiosPostRequest } from '../../service/index';

export const getUserDetails = createAsyncThunk(
  'user/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const resp = await axiosPostRequest('/auth/login', {}, arg);
      return resp.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: userDetails,
  reducers: {
    userName: (state, action) => {
      state.name = action.payload;
    },
    userEmail: (state, action) => {
      state.email = action.payload;
    },
    userToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state, { payload }) => {
        state.loading = true;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(getUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.token = payload?.token || '';
        state.userName = payload?.username || '';
        state.email = payload?.email || '';
        state.isSuccess = true;
      })
      // You can match a range of action types
      .addMatcher(
        getUserDetails.rejected,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, { payload }) => {
          state.message = payload;
          state.loading = false;
        }
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  },
  // extraReducers: {
  //   [getUserDetails.pending]: (state, { payload }) => {
  //     state.loading = true;
  //   },
  //   [getUserDetails.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.data = payload;
  //     state.isSuccess = true;
  //   },
  //   [getUserDetails.rejected]: (state, { payload }) => {
  //     state.message = payload;
  //     state.loading = false;
  //   },
  // },
});

export const { userName, userEmail, userToken } = userSlice.actions;

export default userSlice.reducer;
