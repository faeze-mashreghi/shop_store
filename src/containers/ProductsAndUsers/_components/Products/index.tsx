import { use } from 'react';
import { getListOfProducts } from '../../../../service/product';
import { ProductsList } from './_components/ProductsList';
import { LoadMore } from './_components/LoadMore';
import { SearchItems } from '../SearchItems';

interface ProductsProps {
  productSearch: string;
}

export const Products = ({ productSearch }: ProductsProps) => {
  const products = use(getListOfProducts(10));

  return (
    <>
      <SearchItems id="product" />
      <ProductsList products={products} productSearch={productSearch} />
      <LoadMore productSearch={productSearch} />
    </>
  );
};
