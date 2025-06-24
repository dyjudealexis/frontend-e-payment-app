import React from "react";
import SearchIcon from "../../../components/SearchIcon";

const List = ({ filteredBillers, searchQuery, setSearchQuery, totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <main className="w-full md:w-3/4 p-4">
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="relative search-billers">
          <SearchInput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <SearchIcon />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBillers.map(biller => (
          <div key={biller.BillerTag} className="p-4 bg-white rounded-3xl border hover:bg-gray-50 transition duration-300">
            <p className="text-gray-800 break-words">{biller.BillerTag}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </main>
  );
};

const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search biller partners here"
    className="w-full md:max-w-[400px] pl-14 pr-6 border border-gray-300 rounded-99 focus:outline-none focus:border-blue-500"
    style={{ height: "56.8px" }}
  />
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="flex flex-wrap gap-2 justify-center">
        {pages.map(page => (
          <li key={page} className="flex-grow md:flex-grow-0">
            <button
              onClick={() => onPageChange(page)}
              className={`w-full md:w-auto px-2 py-1 md:px-4 md:py-2 border rounded-full ${page === currentPage ? 'bg-blue-700 text-white' : 'bg-white text-blue-500'} hover:opacity-80 transition duration-300 ease-in-out`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default List;
