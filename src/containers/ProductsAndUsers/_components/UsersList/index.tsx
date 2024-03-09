import { getListOfUsers } from '../../../../service/user';
import { UserCard } from './_components/UserCard';
import { UserSearch } from './_components/UserSearch';

export const UsersList = async ({ userSearch }) => {
  const users = await getListOfUsers();
  const regex = new RegExp(userSearch, 'i');
  ///todo add debounce
  return (
    <>
      <UserSearch />
      <ul>
        {users
          .filter(({ name }) => regex.test(name.firstname) || regex.test(name.lastname))
          .map(({ name, id }) => (
            <li className="mt-6" key={id}>
              <UserCard firstName={name.firstname} lastName={name.lastname} />
            </li>
          ))}
      </ul>
    </>
  );
};
