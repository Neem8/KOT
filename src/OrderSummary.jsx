import React from "react";

const OrderSummary = ({ orders, selectedTable, placeOrder, taxper }) => {
  const tableOrder = orders[selectedTable];

  return (
    <aside className="w-96 overflow-y-auto border-l border-gray-200 p-2">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: "#2a2a2a" }}>
        Order Summary
      </h2>
      {tableOrder ? (
        <div className="border rounded p-4 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold" style={{ color: "#2a2a2a" }}>
              Table {selectedTable} - <span className="font-normal">{tableOrder.status}</span>
            </h3>
            <button
              onClick={placeOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
            >
              Place Order
            </button>
          </div>
          <table className="w-full text-left text-sm max-h-96 overflow-auto">
            <thead>
              <tr>
                <th className="pb-2 text-gray-500">Item</th>
                <th className="pb-2 text-gray-500">Qty</th>
                <th className="pb-2 text-gray-500 text-right">Price</th>
                <th className="pb-2 text-gray-500 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableOrder.items.map((item) => (
                <tr key={item.id} className="align-top border-t-2" style={{ borderBlockColor: "#fc8019" }}>
                                    <td className="py-2 text-gray-800 font-medium">{item.name}</td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-right">₹{item.price.toFixed(2)}</td>
                  <td className="py-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="align-top border-t-2" style={{ borderBlockColor: "#fc8019" }}>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2 text-right font-bold" colSpan={2}>
                  Tax ({taxper}%): ₹{" "}
                  {((calculateTotal(tableOrder.items) * taxper) / 100).toFixed(2)}
                </td>
              </tr>
              <tr className="align-top border-t-2" style={{ borderBlockColor: "#fc8019" }}>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2 text-right font-bold" colSpan={2}>
                  Total Amount: ₹{" "}
                  {(calculateTotal(tableOrder.items) + (calculateTotal(tableOrder.items) * taxper) / 100).toLocaleString('en-IN', {minimumFractionDigits: 2,maximumFractionDigits: 2})}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ color: "#4a4a4a" }}>No orders for Table {selectedTable}.</p>
      )}
    </aside>
  );
};

const calculateTotal = (items) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export default OrderSummary;
