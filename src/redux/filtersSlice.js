import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const filtersSlice = createSlice({
  name: "changeFilter",
  initialState: INITIAL_STATE,
  reducers: {
    selectNameFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const changeFilterReducer = filtersSlice.reducer;
export const { selectNameFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
