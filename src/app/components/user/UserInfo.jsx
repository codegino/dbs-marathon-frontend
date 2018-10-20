import React from 'react';
import Centered from '../container';
import styled from 'styled-components';

const Bold = styled.span`
  font-weight: bold;
`

class UserInfo extends React.PureComponent {
  render() {
    const {fullname, mobile, email, race, gender} = this.props.user;
    return (
      <Centered>
        <h2>User Info</h2>
        <p><Bold>Fullname:</Bold> {fullname}</p>
        <p><Bold>Mobile: </Bold> {mobile}</p>
        <p><Bold>Email: </Bold> {email}</p>
        <p><Bold>Gender: </Bold> {gender}</p>
        <p><Bold>Race: </Bold> {race}</p>
      </Centered>
    )
  }
}

export default UserInfo;