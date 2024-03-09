'use service';

import { baseURL } from '../index';
import { User } from '../../types/user';

export async function getListOfUsers() {
  const apiUrl = `${baseURL}/users`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as User[];
  } catch (error) {
    throw error;
  }
}
