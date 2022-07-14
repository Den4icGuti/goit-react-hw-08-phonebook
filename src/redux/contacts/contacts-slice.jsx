import { createSlice, isFulfilled } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addNewContact,
  removeContact,
} from './contacts-operation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    [addNewContact.fulfilled](state, action) {},
  },
});
