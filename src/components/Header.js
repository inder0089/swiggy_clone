/** @format */
import { useState, useContext } from "react";
import logo from "../assests/images/foodvillalogo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

export const Title = () => (
  <a href='/'>
    <img className='logo' alt='logo' src={logo} />
  </a>
);
const Header = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <div className='header'>
      <Title />
      <div className='nav-item'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/instamart'>Insatamart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <h5>{user.name}</h5>
      <h1>{isOnline ? "online" : "offLine"}</h1>
    </div>
  );
};
export default Header;
