'use client';

import { PurchaseCard } from '../../../../components/purchaseCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

export const PurchasedList = () => {
  const { purchaseList } = useSelector((redux: RootState) => redux.purchase);

  return (
    <>
      {purchaseList.length ? (
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
          <ul role="list" className=" divide-y divide-gray-200">
            {purchaseList.map(({ id, title, image, price }) => (
              <li className="mt-6" key={id}>
                <PurchaseCard title={title} imageSRC={image} price={price} id={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-base dark:text-gray-300 text-gray-700">you have not selected yet</div>
      )}
    </>
  );
};
