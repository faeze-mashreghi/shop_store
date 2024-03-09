import { getListOfProducts } from '../../../../service/product';
import { ProductsList } from './_components/ProductsList';
import { LoadMore } from './_components/LoadMore';
import { SearchItems } from '../SearchItems';

export const Products = async ({ productSearch }) => {
  const products = await getListOfProducts(10);

  return (
    <>
      <SearchItems id="product" />
      <ProductsList products={products} productSearch={productSearch} />
      <LoadMore productSearch={productSearch} />
    </>
  );
};
