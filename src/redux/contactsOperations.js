// import * as contactsActions from "./contactsActions";

import * as phoneContactsAPI from 'services/phoneContacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // создатель payload + правильная обработка ошибок
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phoneContactsAPI.fetchContacts();
      return contacts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (obj, { rejectWithValue }) => {
    try {
      const response = await phoneContactsAPI.addContact(obj);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await phoneContactsAPI.deleteContact(id);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId: number, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );
