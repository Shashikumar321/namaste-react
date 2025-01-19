import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="m-2 p-4 w-[280px] h-[400px] bg-gray-100 hover:bg-gray-200 rounded-md shadow-md">
      <img
        className="w-[260px] h-[200px] rounded-md"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="flex justify-between pt-1">
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="mx-[24px] mt-[24px] px-1 absolute bg-gray-700 text-gray-200 rounded-sm">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
