import { use } from 'react';
import { getUserById } from '../../service/user';
import Image from 'next/image';

interface UserDetailProps {
  id: string;
}
export const UserDetail = ({ id }: UserDetailProps) => {
  const userDetail = use(getUserById(id));

  const { name, email, phone, address } = userDetail;

  return (
    <div className="p-6">
      <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
          <Image src="images/user-default.svg" width={60} height={60} alt="user " />
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {name.firstname} {name.lastname}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{email}</dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{phone}</dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {address.number} {address.street}
                <br />
                {address.city}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
