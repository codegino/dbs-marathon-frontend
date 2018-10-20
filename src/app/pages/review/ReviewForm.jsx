import React from 'react';
import {connect} from 'react-redux';
import Centered from '../../components/container'
import Button from '../../components/button';
import styled from 'styled-components';
import { history } from '../../../store';

const Bold = styled.span`
  font-weight: bold;
`

const Field = styled.div`
  align-self: flex-start;
`

class ReviewForm extends React.PureComponent {
  onEditHandler = () => {
    history.replace('register')
  }

  render() {
    const {email, mobile, fullname, gender} = this.props.pendingUser
    return (
      <Centered>
        <Centered style={{width: '50%'}}>
          <Field>
            <Bold>Email:</Bold>{email}
          </Field>
          <Field>
            <Bold>Fullname:</Bold>{fullname}
          </Field>
          <Field>
            <Bold>Mobile:</Bold>{mobile}
          </Field>
          <Field>
            <Bold>Gender:</Bold>{gender}
          </Field>
        </Centered>
        <Button onClick={this.onEditHandler}>Edit</Button>
        <Button>Register</Button>
      </Centered>
    )
  }
}

const mapStateToProps = state => ({
  pendingUser: state.user.pendingUser
})

export default connect(mapStateToProps)(ReviewForm);
