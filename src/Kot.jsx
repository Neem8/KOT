import React, { useState } from "react";
import TableSelection from "./TableSelection";
import Menu from "./Menu";
import OrderSummary from "./OrderSummary";
import CategoryMenu from "./CategoryMenu";
import OngoingOrders from "./OngoingOrders"; // Import the new component
import sampleMenu from "./SampleMenu"; // Assuming sampleMenu is exported from a separate file

const availableTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const taxper = 18;

export default function Kot() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [orders, setOrders] = useState({});
  const categories = Array.from(new Set(sampleMenu.map((item) => item.category)));
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const incrementItem = (item) => {
    if (!selectedTable) return;
    setOrders((prev) => {
      const tableOrder = prev[selectedTable] || { items: [], status: "Preparing Order" };
      const existingIndex = tableOrder.items.findIndex((i) => i.id === item.id);
      let newItems;
      if (existingIndex >= 0) {
        newItems = [...tableOrder.items];
        newItems[existingIndex] = { ...newItems[existingIndex], quantity: newItems[existingIndex].quantity + 1 };
      } else {
        newItems = [...tableOrder.items, { ...item, quantity: 1 }];
      }
      return { ...prev, [selectedTable]: { ...tableOrder, items: newItems } };
    });
  };

  const decrementItem = (item) => {
    if (!selectedTable) return;
    setOrders((prev) => {
      const tableOrder = prev[selectedTable];
      if (!tableOrder) return prev;
      const existingIndex = tableOrder.items.findIndex((i) => i.id === item.id);
      if (existingIndex === -1) return prev;
      const currentQty = tableOrder.items[existingIndex].quantity;
      let newItems;
      if (currentQty <= 1) {
        newItems = tableOrder.items.filter((i) => i.id !== item.id);
      } else {
        newItems = [...tableOrder.items];
        newItems[existingIndex] = { ...newItems[existingIndex], quantity: newItems[existingIndex].quantity - 1 };
      }
      return { ...prev, [selectedTable]: { ...tableOrder, items: newItems } };
    });
  };

  const placeOrder = () => {
    if (!selectedTable) return;
    setOrders((prev) => {
      const tableOrder = prev[selectedTable];
      if (!tableOrder || tableOrder.items.length === 0) return prev;

      // Update the order status to "Preparing Order" and add to ongoing orders
      return {
        ...prev,
        [selectedTable]: { ...tableOrder, status: "Preparing Order" },
      };
    });

    alert(`Order placed for Table ${selectedTable}!`);
  };

  const deliverOrder = (table) => {
    setOrders((prev) => ({
      ...prev,
      [table]: {
        ...prev[table],
        status: "Order Delivered",
      },
    }));
  };

  // Render initial table selection
  if (!selectedTable) {
    return <TableSelection availableTables={availableTables} setSelectedTable={setSelectedTable} />;
  }

  // Render main UI for orders and menu
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans flex flex-col">
      <h1 className="text-4xl font-extrabold mb-4 self-center" style={{ color: "#fc8019" }}>
        Restaurant KOT System - Table {selectedTable}
      </h1>
      <button
        onClick={() => setSelectedTable(null)}
        className="mb-4 self-start px-4 py-2 rounded text-white transition bg-orange-500"
      >
        Change Table
      </button>
      <div className="bg-white rounded-lg shadow-lg p-4 flex gap-6 flex-1 max-h-[calc(100vh-150px)]" style={{ border: `1px solid #e6e6e6` }}>
        {/* Left Sidebar: Category Menu */}
        <CategoryMenu categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        {/* Middle: Items Grid */}
        <Menu
          sampleMenu={sampleMenu}
          selectedCategory={selectedCategory}
          incrementItem={incrementItem}
          decrementItem={decrementItem}
          orders={orders}
          selectedTable={selectedTable}
        />

        {/* Right Side: Order Summary */}
        <OrderSummary
          orders={orders}
          selectedTable={selectedTable}
          placeOrder={placeOrder}
          taxper={taxper}
        />
      </div>

      {/* Ongoing Orders Section */}
      <OngoingOrders orders={orders} deliverOrder={deliverOrder} />
    </div>
  );
}
