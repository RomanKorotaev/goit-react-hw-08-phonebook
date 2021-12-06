// export const getContacts = state =>state.contacts;
// export const getFilterValue = state =>state.filterValue;
// export const getLoading = state =>state.loading;

export const getContacts = state =>state.phonebook.contacts;
export const getFilterValue = state =>state.phonebook.filterValue;
export const getLoading = state =>state.phonebook.loading;