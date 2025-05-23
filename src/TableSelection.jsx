import React from "react";

const TableSelection = ({ availableTables, setSelectedTable }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center font-sans">
      <h1 className="text-4xl font-extrabold mb-8" style={{ color: "#fc8019" }}>
        Select Table
      </h1>
      <div className="grid grid-cols-5 gap-6 max-w-md w-full">
        {availableTables.map((tableNum) => (
          <button
            key={tableNum}
            onClick={() => setSelectedTable(tableNum)}
            className="bg-white rounded-lg shadow-lg py-6 text-xl font-semibold hover:bg-orange-100 transition w-24 aspect-square flex items-center justify-center"
          >
            Table {tableNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableSelection;
