/** @format */

import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  //   const [count2] = useState(0);
  useEffect(() => {
    // API call
    // console.log("useEffect");
  });
  //   Console.log("render");
  return (
    <div>
      <h1>Profile</h1>
      <h5>This is the profile component</h5>
      <h3>Name:{props.name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default Profile;
