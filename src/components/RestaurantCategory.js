import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isItemListVisible, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div
      className="bg-gray-50 shadow-xl p-4 m-2 rounded-md"
      onClick={handleClick}
    >
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold">
          {title} {"(" + itemCards.length + ")"}
        </span>
        <span className="text-4xl">{isItemListVisible ? '˄' : '˅'}</span>
      </div>

      <div>{isItemListVisible && <ItemList items={itemCards} /> }</div>
    </div>
  );
};

export default RestaurantCategory;
