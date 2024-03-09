import { ProductsList } from './_components/ProductsList';
import { UsersList } from './_components/UsersList';
import { PurchasedList } from './_components/PurchasedList';

export const ProductsAndUsers = () => {
  return (
    <div className="  flex  flex-col  items-center justify-center w-100% sm:items-start sm:flex-row sm:justify-evenly">
      <div>
        <ProductsList />
      </div>
      <div>
        <UsersList />
      </div>
      <div>
        <PurchasedList />
      </div>
    </div>
  );
};
