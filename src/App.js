/** @format */

import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
// Named import
import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./contant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntManu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Store";

const Instamart = lazy(() => import("./components/Instamart"));

// import Instamart from "./components/Instamart";
// const heading = React.createElement(
//     "h1",
//     {
//         id:"title"
//     },
//     "Heading 1"
// );

// const RestraunCart = ({restrauntList}) => {
//     console.log(props);

//     return (
//       <div className='card'>
//         <img
//           src={
//             "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//             restrauntList.data.cloudinaryImageId
//           }
//         />
//         <div className='cart-data'>
//           <h2>{restrauntList.data.name}</h2>
//           <p>{restrauntList.data.cuisines.join(", ")}</p>
//           <h4>{restrauntList.data.lastMileTravelString} Stars</h4>
//         </div>
//       </div>
//     );
//   };
// const RestraunCart = ({ restrauntList }) => {
//   //   console.log(props);
//   const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
//     restrauntList.data;
//   return (
//     <div className='card'>
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <div className='cart-data'>
//         <h2>{name}</h2>
//         <p>{cuisines.join(", ")}</p>
//         <h4>{lastMileTravelString} Stars</h4>
//       </div>
//     </div>
//   );
// };
// const RestraunCart = (props) => {
//   console.log(props);
//   return (
//     <div className='card'>
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           props.restrauntList.data.cloudinaryImageId
//         }
//       />
//       <div className='cart-data'>
//         <h2>{props.restrauntList.data.name}</h2>
//         <p>{props.restrauntList.data.cuisines.join(", ")}</p>
//         <h4>{props.restrauntList.data.lastMileTravelString} Stars</h4>
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//     return (
//       <div className='restaurant-List'>

//         <RestraunCart {...restrauntList[0].data} />
//         <RestraunCart {...restrauntList[1].data} />
//       </div>
//     );
//   };
// const Body = () => {
//     return (
//       <div className='restaurant-List'>
//         <RestraunCart
//           name={restrauntList[0].data.name}
//           cuisines={restrauntList[0].data.cuisines}
//         />
//  <RestraunCart
//           name={restrauntList[1].data.name}
//           cuisines={restrauntList[1].data.cuisines}
//         />
//       </div>
//     );
//   };

// const Body = () => {
//   return (
//     <div className='restaurant-List'>
//       {/*RestraunCart(restrauntList[0])*/}

//       <RestraunCart restrauntList={restrauntList[0]} />
//     </div>
//   );
// };
//ttttt

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "inder khanna",
    email: "inder@gmail.com",
  });
  return (
    <div>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading......</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntManu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
