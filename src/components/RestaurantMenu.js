import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mt-6 ml-56 mr-56 p-8 bg-gray-50">
      <h1 className="font-bold py-4 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg"> {cuisines.join(", ")} </h2>
      <h2 className="font-bold text-lg"> {} </h2>
      <h2 className="font-normal text-sm">
        {" "}
        {"★ " + avgRating + " (" + totalRatingsString + ") · "}{" "}
        {costForTwoMessage}
      </h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card} 
          isItemListVisible={ index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index) }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
