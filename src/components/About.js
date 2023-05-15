/** @format */
import { Outlet } from "react-router-dom";
import FunctionlBaseComponentProfile from "./Profile";
import ClassComponent from "./ClassComponent";
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <div>
//       <h1>about page</h1>
//       <p>this is my about page</p>
//       <Outlet />
//       <FunctionlBaseComponentProfile name={"Inder functional Component"} />
//       <ClassComponent name={"Inder class Component"} />
//     </div>
//   );
// };

// class About extends React.Component{
class About extends Component {
  render() {
    return (
      <div>
        <h1>about page</h1>
        <p>this is my about page</p>
        <UserContext.Consumer>
          {({ user }) => (
            <h5>
              {user.name} - {user.email}
            </h5>
          )}
        </UserContext.Consumer>
        <Outlet />
        <FunctionlBaseComponentProfile name={"Inder functional Component"} />
        <ClassComponent name={"Inder class Component"} />
      </div>
    );
  }
}

export default About;
