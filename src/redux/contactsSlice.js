import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
