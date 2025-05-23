import React from "react";

const CategoryMenu = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <nav className="w-48 border-r border-gray-200 p-2 overflow-y-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`block py-2 px-4 w-full text-left rounded mb-1 transition ${
            selectedCategory === cat
              ? "bg-orange-500 text-white"
              : "hover:bg-orange-100 text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
      {!selectedCategory && (
        <button
          className="mt-4 w-full text-center text-gray-500"
          onClick={() => setSelectedCategory(categories[0])}
        >
          Select category
        </button>
      )}
    </nav>
  );
};

export default CategoryMenu;
