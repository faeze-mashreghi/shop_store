import { getListOfUsers } from '../../../../Server/user';
import { UserCard } from './_components/UserCard';

export const UsersList = async () => {
  const users = await getListOfUsers();

  return (
    <ul>
      {users.map(({ name, id }) => (
        <li className="mt-6" key={id}>
          <UserCard firstName={name.firstname} lastName={name.lastname} />
        </li>
      ))}
    </ul>
  );
};
