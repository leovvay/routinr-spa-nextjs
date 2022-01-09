import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import InputAdornment from '@mui/material/InputAdornment';

import Image from '@components/Image';
import SearchInput from '@components/SearchInput';

const HIDDEN_SEARCH_ROUTES = [
  'login',
  'plan',
  'register',
  'password-reset',
  'complete-registration',
];

export default function Search(): JSX.Element | null {
  const router = useRouter();

  const [value, setValue] = useState('');

  const isVisible = !HIDDEN_SEARCH_ROUTES.includes(router.pathname);

  const onKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key, target } = event;
      if (key === 'Enter') {
        const query = new URLSearchParams(
          router.query as Record<string, string>
        );
        query.set('searchQuery', (target as HTMLInputElement).value);

        router.push(`/search?${query}`);
      }
    },
    [router]
  );

  useEffect(() => {
    if (router.query.searchQuery) {
      setValue(router.query.searchQuery as string);
    }
  }, [router.query]);

  return isVisible ? (
    <div>
      <SearchInput
        id="search"
        onKeyPress={onKeyPress}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder='Try "Keto"'
        fullWidth
        inputProps={{
          autoComplete: 'off',
        }}
        startAdornment={
          <InputAdornment position="start">
            <Image
              src="/search-icon-grey.svg"
              alt="search"
              width={20}
              height={20}
            />
          </InputAdornment>
        }
      />
    </div>
  ) : null;
}
