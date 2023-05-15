/** @format */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restrauntList } from "../contant";
import RestraunCart from "./RestraunCart";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [allRestaurantd, setallRestaurants] = useState([]);
  const [filterRestaurants, setfilterRestaurants] = useState([]);
  const [seacrhTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setallRestaurants(json.data.cards[2].data.data.cards);
    setfilterRestaurants(json.data.cards[2].data.data.cards);
  }

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>offline, please check your internet connection!!</h1>;
  // }

  return filterRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='search'
          value={seacrhTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className='search-button'
          onClick={() => {
            const data = filterData(seacrhTxt, allRestaurantd);
            setfilterRestaurants(data);
          }}>
          search
        </button>
      </div>
      <div className='restaurant-List'>
        {filterRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restraunt/" + restaurant.data.id}
              key={restaurant.data.id}>
              <RestraunCart {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default Body;
