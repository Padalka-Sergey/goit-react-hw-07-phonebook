import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      // return {...state, isLoading: true};
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      // return {...state, items: action.payload};
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // addContact: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
// export const contactsReducer = contactsSlice.reducer;

// Selectors
// export const getContactsValue = state => state.persons.value;

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
// export const getContactsValue = state => state.persons.value;
