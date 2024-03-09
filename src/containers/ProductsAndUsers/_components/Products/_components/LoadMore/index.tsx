'use client';
import { useEffect, useState } from 'react';
import { Product } from '../../../../../../shared/types/product';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '../../../../../../components/Spinner';
import { getListOfProducts } from '../../../../../../service/product';
import { ProductsList } from '../ProductsList';

export const LoadMore = ({ productSearch }) => {
  const { inView, ref } = useInView();

  const [products, setProducts] = useState<Product[]>([]);
  const [productNumbersLimit, setProductsNumberLimit] = useState(10);
  const [isFetchAllData, setIsFetchAllData] = useState(false);

  useEffect(() => {
    if (inView) {
      handleLoadMoreProducts();
    }
  }, [inView]);

  const handleLoadMoreProducts = async () => {
    const productsLimit = productNumbersLimit + 10;
    const newProducts = await getListOfProducts(productsLimit);
    // there is a bug in here which the API was so simple that i couldn't limit that i want the 10 next item,
    // since I want to have ssr component for 10 first product
    // in here I get 10 first product here.
    // I could filter them but i didn't

    if (newProducts.length > productNumbersLimit) {
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setProductsNumberLimit(productsLimit);
    } else {
      setIsFetchAllData(true);
    }
  };

  return (
    <div>
      <ProductsList products={products} productSearch={productSearch} />
      {isFetchAllData ? (
        <div className="text-base dark:text-gray-300 text-gray-700">there are no items any more</div>
      ) : (
        <div ref={ref}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
