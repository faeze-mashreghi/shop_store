import { ProductsList } from './_components/ProductsList';
import { UsersList } from './_components/UsersList';
import { PurchasedList } from './_components/PurchasedList';

export const ProductsAndUsers = ({ searchParams }) => {
  return (
    <div className="flex  flex-col  items-center justify-center w-100% sm:items-start sm:flex-row sm:justify-evenly">
      <div>
        <ProductsList />
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
