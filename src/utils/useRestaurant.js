/** @format */

import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../contant";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getResrauntInfo();
  }, []);

  async function getResrauntInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data?.cards);
    // console.log(json);
  }
  return restaurant;
};
export default useRestaurant;
