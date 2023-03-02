export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = (state) => state.contacts.filter;
export const selectFilteredContacts = (state) => selectContacts(state).filter(contact =>
  contact.name.toLowerCase().includes(selectFilter(state).toLowerCase())
);