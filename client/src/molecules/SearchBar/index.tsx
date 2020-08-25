import React from 'react';

// block
import SearchBarLarge from 'molecules/SearchBar/searchbar.large';
import SearchBarMedium from 'molecules/SearchBar/searchbar.medium';
import SearchBarSmall from 'molecules/SearchBar/searchbar.small';

type SearchBarProps = {
  type: string;
};

interface mapProps {
  [key: string]: JSX.Element;
}

export const SearchBar = ({ type, ...props }: SearchBarProps) => {
  const types: mapProps = {
    sm: <SearchBarSmall {...props} />,
    md: <SearchBarMedium {...props} />,
    lg: <SearchBarLarge {...props} />,
  };
  return types[type];
};
