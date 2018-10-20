import React from 'react';
import { connect } from 'react-redux';
import Page from '../../components/page';
import { reviewUser } from '../../store/actions/user';
import Container from '../../components/container/Container';
import styled from 'styled-components';

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
    email: ''
  }

  render() {
    const {email, mobile} = this.state
    return (
      <Page id="login" title="Login" description="Register to marathon.">
        <Container>
          <Form onSubmit={e => e.preventDefault()}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Enter email address" value={email}
            onChange={e => this.setState({email: e.target.value})}/>
            <label htmlFor="mobile">Mobile</label>
            <input id="mobile" type="text" placeholder="Enter mobile number" value={mobile}
            onChange={e => this.setState({mobile: e.target.value})}/>
            <input type="button" onClick={() => this.props.reviewUser({email, mobile})} value="Submit"/>
          </Form>
        </Container>
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  reviewUser: (user) => dispatch(reviewUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(RegistrationPage);
