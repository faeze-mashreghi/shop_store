import { ProductCard } from '../ProductCard';

export const ProductsList = ({ products, productSearch }) => {
  const regex = new RegExp(productSearch, 'i');

  return (
    <>
      {products.length ? (
        <ul role="list">
          {products
            .filter((product) => regex.test(product.title))
            ?.map((product) => (
              <li className="mt-6" key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
        </ul>
      ) : (
        <div className="text-base dark:text-gray-300 text-gray-700">no products available </div>
      )}
    </>
  );
};
