import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="m-10 p-8 bg-gray-100 rounded-2xl">
      <h1 className="font-bold py-4 text-lg">{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>Menu</h3>
      <div className="py-2 w-4/5 bg-white rounded-2xl">
        <ul className="m-2">
          {itemCards.map((menuItem) => (
            <li className="p-2 m-2 bg-gray-50 rounded-2xl flex justify-between hover:bg-gray-100" key={menuItem.card.info.id}>
              <div>{menuItem.card.info.name}</div>
              <div>
                <div>{menuItem.card.info.price / 100}{'/-'}</div>
                <div>+</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
