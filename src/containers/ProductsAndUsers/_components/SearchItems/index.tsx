'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

import { Input } from '../../../../components/Input';
import { useEffect, useState } from 'react';

interface SearchItemsProps {
  id: string;
}
export const SearchItems = ({ id }: SearchItemsProps) => {
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState('');

  const pathname = usePathname();
  const { replace } = useRouter();
  const [query] = useDebounce(searchText, 750);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set(`${id}Search`, query);
    } else {
      params.delete(`${id}Search`);
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  const handleSearchUser = (e) => {
    setSearchText(e.target.value);
  };

  return <Input id={`${id}-search`} onChange={handleSearchUser} value={searchText} placeholder={`${id}-search `} />;
};
