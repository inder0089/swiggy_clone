/** @format */
import { IMG_CDN_URL } from "../contant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestraunCart = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  //   console.log(props);
  const { user } = useContext(UserContext);
  return (
    <div className='card'>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className='cart-data'>
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <h4>{lastMileTravelString}</h4>
        <h6>{user.name}</h6>
        <h6>{user.email}</h6>
      </div>
    </div>
  );
};
export default RestraunCart;
