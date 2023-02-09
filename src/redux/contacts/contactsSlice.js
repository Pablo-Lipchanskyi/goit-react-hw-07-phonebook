import { createSlice } from '@reduxjs/toolkit';

const initialState = { contactsList: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, { payload }) {
      state.contactsList.push(payload);
    },
    remove(state, { payload }) {
      state.contactsList = state.contactsList.filter(
        ({ id }) => id !== payload
      );
    },
  },
});
export default contactsSlice.reducer;
export const { add, remove } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contactsList;