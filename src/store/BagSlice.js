import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
      addtoBag: (store, action) => {
        store.push(action.payload);
      },
      removefromBag: (store, action) => {
        return store.filter(itemId => itemId !== action.payload);
      },
    },
  });

export const bagActions = BagSlice.actions;

export default BagSlice;