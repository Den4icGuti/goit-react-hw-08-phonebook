import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

//==Получаем список контактов==//
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

//===Добавляем новый контакт===//

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

//===Удаляем контакт===//

export const removeContact = createAsyncThunk(
  'contacts/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${id}`);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
