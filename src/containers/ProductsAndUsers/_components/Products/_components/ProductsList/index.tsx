import { ProductCard } from '../ProductCard';
import Image from 'next/image';

export const ProductsList = ({ products, productSearch }) => {
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
