import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ sampleMenu, selectedCategory, incrementItem, decrementItem, orders, selectedTable }) => {
  return (
    <section className="flex-1 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4" style={{ color: "#2a2a2a" }}>
        {selectedCategory || "Select a category"}
      </h2>
      <div className="flex flex-col sm:flex-row md:flex-wrap gap-10">
        {sampleMenu
          .filter((item) => item.category === selectedCategory)
          .map((item) => {
            const tableOrder = orders[selectedTable];
            const orderItem = tableOrder ? tableOrder.items.find((i) => i.id === item.id) : null;
            const quantity = orderItem ? orderItem.quantity : 0;

            return (
              <MenuItem
                key={item.id}
                item={item}
                quantity={quantity}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Menu;
