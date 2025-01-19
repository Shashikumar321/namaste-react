import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FETCH_RESTAURANTS_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resListData, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const [loggedInUserText, setLoggedInUserText] = useState("");

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection.{" "}
      </h1>
    );
  }

  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="filter flex justify-between m-2">
        <div className="search">
          <input
            type="text"
            className="p-[2px] shadow-lg border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-5 py-1 m-4 bg-green-200 rounded-lg"
            onClick={() => {
              const searchedData = resListData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchedData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-5 py-1 m-4 bg-green-200 rounded-lg"
          onClick={() => {
            const filteredResList = resListData.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label className="p-2">UserName: </label>
          <input
            className="p-[2px] shadow-lg border border-solid border-black rounded-md"
            type="text"
            value={loggedInUserText}
            onChange={(e) => setLoggedInUserText(e.target.value)}
          ></input>

          <button
            className="px-5 py-1 m-4 bg-green-200 rounded-lg"
            onClick={() => {
              setUserName(loggedInUserText);
            }}
          >
            Update
          </button>
        </div>
      </div>
      <div className="flex flex-wrap rounded-md">
        {filteredRestaurant.map((res) => (
          <Link
            className="body-links"
            to={"/restaurant/" + res.info.id}
            key={res.info.id}
          >
            {res.info.avgRating > 4.4 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
