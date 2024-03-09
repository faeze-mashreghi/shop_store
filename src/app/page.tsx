import { ProductsAndUsers } from '../containers/ProductsAndUsers';
const MainPage = ({ searchParams }) => {
  return (
    <div>
      <ProductsAndUsers searchParams={searchParams} />
    </div>
  );
};
export default MainPage;
