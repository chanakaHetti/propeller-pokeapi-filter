import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full sm:w-3/4">
      <FiSearch className="absolute left-3 top-[37%] text-gray-500" />
      <input
        type="text"
        placeholder="Search Pokemon by name..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 pl-10 rounded-lg bg-white text-gray-800 shadow focus:outline-none"
        aria-label="Search Pokemon"
      />
    </div>
  );
};

export default SearchBar;
