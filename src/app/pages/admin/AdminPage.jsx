import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page';
import {fetchUser, fetchUserReport} from '../../store/actions/user';
import Button from '../../components/button';
import Centered from '../../components/container';

class AdminPage extends React.PureComponent {
  state = {
    queryString: ''
  }

  render() {
    const {queryString} = this.state;
    const {username} = this.props.admin;
    return (
    <Page id="admin">
      <Centered>
        <p>Welcome {username}</p>
        <label htmlFor="search-query">Search User: </label>
        <input id="search-query" type="text" placeholder="Enter email or mobile" value={queryString}
        onChange={e => this.setState({queryString: e.target.value})}/>
        <Button onClick={() => this.props.fetchUser({queryString})}>Search</Button>
        <Button onClick={() => this.props.fetchUserReport()}>Fetch Users</Button>
      </Centered>
    </Page>
  )}
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchUserReport: (user) => dispatch(fetchUserReport())
})

const mapStateToProps = state => ({
  admin: state.user.admin
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
