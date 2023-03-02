import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://63ff8c0b63e89b09139ea222.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});

export const addContact = createAsyncThunk(
  'contacts/addContact', async (contact, thunkApi) => {
    try {
      const {data} = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', async (contactId, thunkApi) => {
    console.log(contactId);
    try {
      const {data} = await axios.delete(`/contacts/${contactId}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


