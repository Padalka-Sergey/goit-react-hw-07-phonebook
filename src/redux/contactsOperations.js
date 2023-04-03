// import * as contactsActions from "./contactsActions";

import * as phoneContactsAPI from 'services/phoneContacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// First, create the thunk
const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  // создатель payload
  async () => {
    const contacts = await phoneContactsAPI.fetchContacts();
    return contacts;
  }
);

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId: number, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );
