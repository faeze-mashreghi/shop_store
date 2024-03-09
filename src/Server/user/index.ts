import { baseURL } from '../index';

export async function getListOfUsers() {
  const res = await fetch(`${baseURL}/users`);
  return res.json();
}
