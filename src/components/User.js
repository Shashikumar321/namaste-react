import { useState } from "react";

const User = (props) => {

    const [like, setLike] = useState(0);
    const { name, location } = props;

    return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact: @Shashi</h4>
      <button onClick={() => setLike(like + 1)} >Like</button>
      <h4>Likes : {like}</h4>
    </div>
  );
};

export default User;
