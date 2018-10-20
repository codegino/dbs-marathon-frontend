import React from 'react';
import {connect} from 'react-redux';
import Centered from '../../components/container'
import Button from '../../components/button';
import styled from 'styled-components';
import { history } from '../../../store';
import Page from '../../components/page';
import { registerUser } from '../../store/actions/user';

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
      <Page id="review" title="Review" description="Review details">
        <Centered>
          <Centered style={{width: '50%'}}>
            <Field>
              <Bold>Email:</Bold> {email}
            </Field>
            <Field>
              <Bold>Fullname:</Bold> {fullname}
            </Field>
            <Field>
              <Bold>Mobile:</Bold> {mobile}
            </Field>
            <Field>
              <Bold>Gender:</Bold> {gender}
            </Field>
          </Centered>
          <Button onClick={this.onEditHandler}>Edit</Button>
          <Button onClick={this.props.registerUser}>Register</Button>
        </Centered>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  pendingUser: state.user.pendingUser
})

const mapDispatchToProps = dispatch => ({
  registerUser: () => dispatch(registerUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
