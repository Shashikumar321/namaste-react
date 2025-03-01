import User from "./User";
import UserClass from "./UserClass";
import React from "react";


// class About extends React.Component {

//   constructor() {
//     super()
//   }

//   componentDidMount() {
//   }

//   render() {
//     return (
//       <div>
//         <h1>About</h1>
//         <h2>This is my food ordering Web App</h2>
  
//         <div className="about-us-cards">
//           <UserClass name={"Shashikumar N"} location={"Bangalore"} />
//         </div>
//       </div>
//     );
//   }

// }


const About = () => {
  return (
    <div className="m-6 p-2 w-[300px] h-[500px] shadow-lg bg-gray-100 rounded-lg">
      <h2>This is my food ordering Web App</h2>

      <div className="about-us-cards">
        {/* <User /> */}
        <UserClass />
      </div>
    </div>
  );
};

export default About;
