import RestaurantCard from "./RestaurantCard";
import { useState } from "react"
import resList from "../utils/mockData";

const Body = () => {

let [resListData, setResList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resListData.filter((res) => res.info.avgRating > 4.3);
            setResList(filteredResList);
            console.log(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resListData.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
