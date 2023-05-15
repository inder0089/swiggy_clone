/** @format */

import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    //   count2: 0,
    // };
    // console.log("Constructor");

    this.state = {
      userInfo: "Dummy Name",
      location: "Dummy location",
    };
  }
  async componentDidMount() {
    // API calls
    console.log("componentDidMount");
    const data = await fetch("URL");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  //   render() {
  //     const { count } = this.state;
  //     return (
  //       <div>
  //         <h1> Class Base Component</h1>
  //         <h2>Name:{this.props.name}</h2>
  //         <h2>Count: {count}</h2>
  //         <button
  //           onClick={() => {
  //             we Do Not Mutate State Directly
  //             Never do this.state = something
  //             this.setState({
  //               count: 1,
  //             });
  //           }}>
  //           count
  //         </button>
  //       </div>
  //     );
  //   }

  render() {
    return (
      //   <div>
      //     <h1> Class Base Component</h1>
      //     <h2>Name:{this.props.userInfo.name}</h2>
      //     <h2>Name:{this.props.userInfo.location}</h2>
      //   </div>
      <div>inder</div>
    );
  }
}

export default ClassComponent;
