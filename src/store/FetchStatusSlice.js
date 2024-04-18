import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchdone: false,
        currentlyfetching: false,
    },
    reducers: {
      fetched: (store) => {
        store.fetchdone = true;
      },
      fetchingStart: (store) => {
        store.currentlyfetching = true;
      },
      fetchingDone: (store) => {
        store.currentlyfetching = false;
      },
    }
  });

export const fetchStatusActions = FetchStatusSlice.actions;

export default FetchStatusSlice;