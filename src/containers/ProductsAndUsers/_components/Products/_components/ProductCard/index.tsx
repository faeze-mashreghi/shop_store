'use client';

import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { addToPurchase } from '../../../../../../features/pruchaseSlice';
import { Product } from '../../../../../../shared/types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const handleSelectedProductClick = () => {
    dispatch(addToPurchase(product));
  };
  return (
    <button
      className=" mt-4 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
      onClick={handleSelectedProductClick}
    >
      <div className="h-48 w-full object-cover object-center relative">
        <Image src={product.image} alt={product.title} layout="fill" />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900">{product.title}</h2>
        <p className="mb-2 text-base text-gray-700">{product.description}</p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 ">{product.price}$</p>
        </div>
      </div>
    </button>
  );
};
