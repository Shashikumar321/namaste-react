import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo : {
        name : '',
        location: ''
      }
    }
  }

  async componentDidMount() {
    //API Call
    const userData = await fetch('https://api.github.com/users/Shashikumar321');
    const json = await userData.json();

    this.setState({
      userInfo: json
    })
  }

  render() {

    const {name, location, bio, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="p-3 rounded-xl" src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Bio : {bio }</h3>
        <h4>Contact: @Shashi</h4>
      </div>
    );
  }
}

export default UserClass;
