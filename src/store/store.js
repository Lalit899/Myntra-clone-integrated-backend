import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import BagSlice from "./BagSlice";

const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default MyntraStore;