import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ''
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
      handleFilterSlice: (state, actions) => {
        state.filter = actions.payload;
  },
},

  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.contacts.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.error = null;
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.contacts.isLoading = false;
    })
    .addCase(addContact.pending, (state) => {
      state.contacts.isLoading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.error = null;
      state.contacts.isLoading = false;
      state.contacts.items = [...state.contacts.items, action.payload]
    })
    .addCase(addContact.rejected, (state, action) => {
      state.error = action.payload;
      state.contacts.isLoading = false;
    })
    .addCase(deleteContact.pending, (state) => {
      state.contacts.isLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.error = null;
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload)

    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.error = action.payload;
      state.contacts.isLoading = false;
    })  
  },
}
);


export const { handleFilterSlice } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

