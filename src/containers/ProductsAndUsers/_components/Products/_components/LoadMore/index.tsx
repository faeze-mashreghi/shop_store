'use client';
import { useEffect, useState } from 'react';
import { Product } from '../../../../../../shared/types/product';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '../../../../../../components/Spinner';
import { getListOfProducts } from '../../../../../../service/product';
import { ProductsList } from '../ProductsList';
import Image from 'next/image';

interface LoadMoreProps {
  productSearch: string;
}

export const LoadMore = ({ productSearch }: LoadMoreProps) => {
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
    // there is a bug in here which the API was so simple that I couldn't limit that I want the 10 next item,
    // since I want to have ssr component for 10 first product
    // in here I get 10 first product here.
    // I could filter them but I didn't

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
        <div className="flex justify-center mt-8">
          <Image src="/images/no-search-results.svg" alt="not-found" width={200} height={200} />
        </div>
      ) : (
        <div ref={ref}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
