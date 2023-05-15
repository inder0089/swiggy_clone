/** @format */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../contant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauntManu = () => {
  const { resId } = useParams();
  console.log(resId);

  //   const [restraunt, setRestraunt] = useState(null);

  const restraunt = useRestaurant(resId);

  if (!restraunt) {
    return <Shimmer />;
  }
  console.log(restraunt);
  return (
    <div>
      <h1>Restraunt id: {resId}</h1>
      <h2>{restraunt[0].card.card.info.name}</h2>
      <img src={IMG_CDN_URL + restraunt[0].card.card.info.cloudinaryImageId} />
      <h3>{restraunt[0].card.card.info.areaName}</h3>
      <h3>{restraunt[0].card.card.info.city}</h3>
      <h3>{restraunt[0].card.card.info.avgRating}</h3>
      <h3>{restraunt[0].card.card.info.costForTwoMessage}</h3>
    </div>
  );
};

export default RestrauntManu;
