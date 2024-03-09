import { getListOfUsers } from '../../../../service/user';
import { UserCard } from './_components/UserCard';
import Image from 'next/image';
import { SearchItems } from '../SearchItems';

export const UsersList = async ({ userSearch }) => {
  const users = await getListOfUsers();
  const regex = new RegExp(userSearch, 'i');
  const filteredUser = users.filter(({ name }) => regex.test(name.firstname) || regex.test(name.lastname));
  return (
    <>
      <SearchItems id="user" />
      <ul>
        {filteredUser?.length ? (
          <div className="flex justify-center mt-8">
            <Image src="/images/no-search-results.svg" alt="not-found" width={200} height={200} />
          </div>
        ) : (
          filteredUser.map(({ name, id }) => (
            <li className="mt-6" key={id}>
              <UserCard firstName={name.firstname} lastName={name.lastname} id={id} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
