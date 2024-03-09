import Image from 'next/image';
import Link from 'next/link';
import { USER_DETAIL } from '../../../../../../shared/routes';
export const UserCard = ({ firstName, lastName, id }) => {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <Image src="images/user-default.svg" width={45} height={45} alt="user " />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{firstName}</p>
          <p className="text-slate-500 font-medium">{lastName}</p>
        </div>
        <Link href={`${USER_DETAIL}?id=${id}`}>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            detail
          </button>
        </Link>
      </div>
    </div>
  );
};
