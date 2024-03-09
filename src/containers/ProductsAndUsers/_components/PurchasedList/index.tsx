'use client';

import { PurchaseCard } from '../../../../components/purchaseCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import Image from 'next/image';

export const PurchasedList = () => {
  const { purchaseList } = useSelector((redux: RootState) => redux.purchase);

  return (
    <>
      <div className="flex justify-center mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
        {purchaseList.length ? (
          <ul role="list" className="divide-y divide-gray-200">
            {purchaseList.map(({ id, title, image, price }) => (
              <li className="mt-6" key={id}>
                <PurchaseCard title={title} imageSRC={image} price={price} id={id} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <div className="text-base text-gray-700 ">you have not selected yet</div>
            <Image src="/images/empty-shopping-bag.jpg" alt="empty-shopping-bag" width={250} height={200} />
          </div>
        )}
      </div>
    </>
  );
};
