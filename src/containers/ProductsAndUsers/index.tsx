import { Products } from './_components/Products';
import { UsersList } from './_components/UsersList';
import { PurchasedList } from './_components/PurchasedList';

export const ProductsAndUsers = ({ searchParams }) => {
  return (
    <div className="flex  flex-col  items-center justify-center w-100% sm:items-start sm:flex-row sm:justify-evenly">
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
