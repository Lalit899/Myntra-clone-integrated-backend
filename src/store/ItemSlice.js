import { createSlice } from "@reduxjs/toolkit";

const Default_Items = [];

const itemSlice = createSlice({
    name: 'items',
    initialState: Default_Items,
    reducers: {
      addInitialitems: (store, action) => {
        return action.payload;
      },
    },
  });

export const itemsActions = itemSlice.actions;

export default itemSlice;