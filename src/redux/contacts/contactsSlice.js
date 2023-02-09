import { createSlice } from '@reduxjs/toolkit';
import { fetchList } from 'redux/operations';

const initialState = { contactsList: [], isLoading: false, error:null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchList.pending](state) {
      state.isLoading = true
    },
    [fetchList.fulfilled](state, action) {
      state.isLoading = false
        state.error = null
        state.contactsList.push(action.payload)
    },
    [fetchList.rejected](state, action) {
      state.isLoading = false
      state.error = action.payload
    }
  } 
})
export default contactsSlice.reducer

export const getContacts = state => state.contacts.contactsList;  


/*reducers: {
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
export const getContacts = state => state.contacts.contactsList;*/