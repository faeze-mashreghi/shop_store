import { baseURL } from '../index';

export async function getListOfProducts() {
  const res = await fetch(`${baseURL}/products`);
  return res.json();
}
