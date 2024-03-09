'use service';

import { baseURL } from '../index';
import { Product } from '../../shared/types/product';

export async function getListOfProducts(limit: number) {
  const apiUrl = `${baseURL}/products?limit=${limit}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as Product[];
  } catch (error) {
    throw error;
  }
}
