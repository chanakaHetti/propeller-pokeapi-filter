import React from 'react';
import { capitalizeFirstLetter } from '../utils/formatUtils';

interface TypeFilterProps {
  types: string[];
  selectedType: string;
  onChange: (value: string) => void;
}

const TypeFilter = ({ types, selectedType, onChange }: TypeFilterProps) => {
  return (
    <div className="w-full sm:w-1/4">
      <select
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded bg-white text-gray-800"
        aria-label="Filter Pokemon by type"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {capitalizeFirstLetter(type)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
