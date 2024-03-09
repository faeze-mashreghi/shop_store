'use client';
import { Input } from '../../../../../../components/Input';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const UserSearch = () => {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    router.push(`/?userSearch=${searchText}`);
  }, [searchText, router]);

  const handleSearchUser = (e) => {
    setSearchText(e.target.value);
  };

  return <Input id="user-search" onChange={handleSearchUser} value={searchText} placeholder="serach User" />;
};
