import React from 'react';
import { connect } from 'react-redux';
import Page from '../../components/page';
import { reviewUser } from '../../store/actions/user';
import Centered from '../../components/container';
import styled from 'styled-components';
import Button from '../../components/button/InputButton';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  border: 1px solid black;
  border-radius: 6px;
  width: 100%;
  padding: 5px 1rem;
`

class RegistrationPage extends React.PureComponent {
  state = {
    mobile: '',
    email: '',
    fullname: '',
    gender: 'male'
  }

  componentDidMount() {
    if (this.props.pendingUser) {
      const {email, mobile, fullname, gender} = this.props.pendingUser

      this.setState(prev => ({
        ...prev, email, mobile, fullname, gender
      }))
    }
  }

  onReviewHandler = ({email, mobile, fullname, gender}) => {
    this.props.reviewUser({email, mobile, fullname, gender})
  }

  render() {
    const {email, mobile, fullname, gender} = this.state
    return (
      <Page id="login" title="Login" description="Register to marathon.">
        <Centered>
          <h2>Register</h2>
          <Form onSubmit={e => e.preventDefault()}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Enter email address" value={email}
            onChange={e => this.setState({email: e.target.value})}/>

            <label htmlFor="mobile">Mobile</label>
            <input id="mobile" type="text" placeholder="Enter mobile number" value={mobile}
            onChange={e => this.setState({mobile: e.target.value})}/>

            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="Enter your fullname" value={fullname}
            onChange={e => this.setState({fullname: e.target.value})}/>

            <label htmlFor="gender">Gender</label>
            <select value={gender} onChange={e => this.setState({gender: e.target.value})}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <Button type="button" onClick={() => this.onReviewHandler({email, mobile, fullname, gender})} value="Submit" />
          </Form>
        </Centered>
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  reviewUser: (user) => dispatch(reviewUser(user))
})

const mapStateToProps = state => ({
  pendingUser: state.user.pendingUser
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
