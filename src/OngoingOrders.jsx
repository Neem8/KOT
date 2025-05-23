import React from "react";

const OngoingOrders = ({ orders, deliverOrder }) => {
  return (
    <div className="w-full overflow-y-auto border border-gray-200 p-2">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: "#2a2a2a" }}>
        Ongoing Orders
      </h2>
      {Object.keys(orders).length === 0 ? (
        <p style={{ color: "#4a4a4a" }}>No ongoing orders.</p>
      ) : (
        Object.keys(orders).map((table) => {
          const tableOrder = orders[table];
          return (
            <div key={table} className="border rounded p-4 mb-2 shadow-sm">
              <h3 className="text-xl font-bold" style={{ color: "#2a2a2a" }}>
                Table {table} - {tableOrder.status}
              </h3>
              <ul>
                {tableOrder.items.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>Qty: {item.quantity}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => deliverOrder(table)}
                className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Mark as Delivered
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OngoingOrders;
