import React from 'react';
import Centered from '../container';

class UserInfo extends React.PureComponent {
  render() {
    const {fullname, mobile, email, race, gender} = this.props.user;
    return (
      <Centered>
        <h2>User Info</h2>
        <p>Fullname: {fullname}</p>
        <p>Mobile: {mobile}</p>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
        <p>Race: {race}</p>
      </Centered>
    )
  }
}

export default UserInfo;