import { ProductCard } from '../ProductCard';
import { Product } from '../../../../../../shared/types/product';

export interface ProductsListProps {
  products: Product[];
  productSearch: string;
}

export const ProductsList = ({ products, productSearch }: ProductsListProps) => {
  const regex = new RegExp(productSearch, 'i');
  const filteredProduct = products.filter((product) => regex.test(product.title));

  return (
    <>
      <ul role="list">
        {filteredProduct.map((product) => (
          <li className="mt-6 flex justify-center" key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};
