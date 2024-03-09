import { Products } from './_components/Products';
import { UsersList } from './_components/UsersList';
import { PurchasedList } from './_components/PurchasedList';

export const ProductsAndUsers = ({ searchParams }) => {
  return (
    <div className=" grid  grid-cols-1  w-100%  sm:grid-cols-3 sm:gap-8 p-6 ">
      <div>
        <Products productSearch={searchParams.productSearch} />
      </div>
      <div>
        <UsersList userSearch={searchParams.userSearch} />
      </div>
      <div>
        <PurchasedList />
      </div>
    </div>
  );
};
