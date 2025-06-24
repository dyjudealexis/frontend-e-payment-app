import React from "react";

const Sidebar = ({ categories, selectedCategory, handleShowAllClick, setSelectedCategory }) => {
  return (
    <aside className="w-full md:w-1/4 bg-gray-50 p-6 h-full rounded-3xl">
      <ul>
        <li className="mb-2">
          <button
            onClick={handleShowAllClick}
            className={`text-gray-600 hover:opacity-40 ${selectedCategory === null ? 'font-bold' : ''}`}
          >
            Show All
          </button>
        </li>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`text-gray-600 hover:opacity-40 ${selectedCategory === category.toLowerCase() ? 'font-bold' : ''}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
