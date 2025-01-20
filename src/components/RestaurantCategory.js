import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const { title, itemCards } = data;

  const [showList, setShowList] = useState(true);

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="bg-gray-50 shadow-xl p-4 m-2 rounded-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {title} {"(" + itemCards.length + ")"}
        </span>
        <span className="text-4xl">{showList ? "˄" : "˅"}</span>
      </div>

      <div>{showList && <ItemList items={itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
