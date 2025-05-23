import React from "react";

const MenuItem = ({ item, quantity, incrementItem, decrementItem }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition w-[200px] flex-none">
      <img
        src={item.image}
        alt={item.name}
        className="h-36 w-36 object-cover rounded mb-2"
      />
      <h3 className="text-center font-semibold text-lg" style={{ color: "#2a2a2a" }}>
        {item.name}
      </h3>
      <p className="text-sm text-gray-600 mb-2">₹{item.price.toFixed(2)}</p>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => decrementItem(item)}
          disabled={quantity === 0}
          className={`px-3 py-1 rounded border border-orange-400 text-orange-600 font-semibold ${
            quantity === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-100"
          } transition`}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          -
        </button>
        <span className="w-8 text-center font-semibold" style={{ color: "#2a2a2a" }}>
          {quantity}
        </span>
        <button
          onClick={() => incrementItem(item)}
          className="px-3 py-1 rounded border border-orange-400 text-orange-600 font-semibold hover:bg-orange-100 transition "      >
          +
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
