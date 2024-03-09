import { getListOfUsers } from '../../../../service/user';
import { UserCard } from './_components/UserCard';

import { SearchItems } from '../SearchItems';

export const UsersList = async ({ userSearch }) => {
  const users = await getListOfUsers();
  const regex = new RegExp(userSearch, 'i');

  return (
    <>
      <SearchItems id="user" />
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
