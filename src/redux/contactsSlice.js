import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export default contactsSlice.reducer;
