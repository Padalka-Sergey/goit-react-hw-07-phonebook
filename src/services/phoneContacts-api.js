import axios from 'axios';

axios.defaults.baseURL = 'https://642b1bf9208dfe2547120a15.mockapi.io/api/v1';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(items) {
  const { data } = await axios.post('/contacts', items);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
