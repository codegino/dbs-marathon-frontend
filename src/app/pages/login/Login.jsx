import React from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Page from '../../components/page';
import { login} from '../../store/actions/user';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  border: 1px solid black;
  border-radius: 6px;
  width: 90%;
  padding: 5px 1rem;
`

class LoginPage extends React.PureComponent {
  state = {
    username: '',
    password: ''
  }

  onLoginHandler = () => {
    const {username, password} = this.state
    this.props.login({username, password}) 
    .catch(() => {
      toast.warn('Invalid username or password!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      });
    })
  }

  render() {
    const {username, password} = this.state
    return (
      <Page id="login" title="Login" description="Register to marathon.">
        <Form onSubmit={e => e.preventDefault()}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Enter username" value={username}
          onChange={e => this.setState({username: e.target.value})}/>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter password" value={password}
          onChange={e => this.setState({password: e.target.value})}/>
          <input type="button" onClick={this.onLoginHandler} value="Login"/>
        </Form>
        <ToastContainer />
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
