import axios from 'axios';

axios.defaults.baseURL = 'https://642b1bf9208dfe2547120a15.mockapi.io/api/v1';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
