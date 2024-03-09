import { UserDetail } from '../../containers/UserDetail';
const MainPage = ({ searchParams }) => {
  return <UserDetail id={searchParams.id} />;
};
export default MainPage;
