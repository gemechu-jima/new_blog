import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else if (searchTerm.trim()) {
      // Perform your search logic here
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <div className="relative flex items-center gap-0">
      {/* Search Icon */}
      <SearchIcon
        onClick={(e) => {
          handleSearch();
          e.stopPropagation();
        }}
        className="cursor-pointer"
      />

      {/* Conditional Input Display */}
      {isOpen && (
        <div className="absolute top-0 right-10 transition-all duration-300 ease-in-out">
          <input
            type="search"
            placeholder="Search by typing here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="w-auto outline-none border-b-2"
          />
        </div>
      )}
    </div>
  );
}