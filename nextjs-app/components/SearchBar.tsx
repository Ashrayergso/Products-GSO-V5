import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Call the searchProduct function from utils here
    // searchProduct(searchTerm);
  };

  return (
    <div className="flex items-center justify-center w-full my-5">
      <form onSubmit={handleSearch} className="w-full max-w-lg">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for a product"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;