import React from 'react';
import {connect} from 'react-redux';
import Centered from '../../components/container'
import Button from '../../components/button';
import styled from 'styled-components';
import { history } from '../../../store';
import Page from '../../components/page';
import { registerUser } from '../../store/actions/user';
import Select from '../../components/select';
import races from './dummyRaces';

const Bold = styled.span`
  font-weight: bold;
`

const Field = styled.div`
  align-self: flex-start;
`

class ReviewForm extends React.PureComponent {
  state = {
    race: ''
  }
  onEditHandler = () => {
    history.replace('register')
  }

  render() {
    const racesMap = races.map(race => (
      <option value={race} key={race}>{race}</option>
    ))

    const {email, mobile, fullname, gender} = this.props.pendingUser;
    const {race} = this.state;

    return (
      <Page id="review" title="Review" description="Review details">
        <Centered>
          <h2>Review</h2>
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
            <Bold>Race:</Bold> <Select value={race} onChange={e => {
              this.setState({race: e.target.value})
            }}>
              <option value=''>Please select to continue</option>
              {racesMap}
            </Select>
          </Centered>
          <Button onClick={this.onEditHandler}>Edit</Button>
          {race ? <Button onClick={() => this.props.registerUser(race)}>Register</Button> : null}
        </Centered>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  pendingUser: state.user.pendingUser
})

const mapDispatchToProps = dispatch => ({
  registerUser: race => dispatch(registerUser(race))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
