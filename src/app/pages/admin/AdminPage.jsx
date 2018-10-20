import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page';
import {fetchUser} from '../../store/actions/user';

class AdminPage extends React.PureComponent {
  state = {
    queryString: ''
  }

  render() {
    const {queryString} = this.state;
    const {username} = this.props.admin;
    return (
    <Page id="admin">
      <p>Welcome {username}</p>
      <label htmlFor="search-query">Search User: </label>
      <input id="search-query" type="text" placeholder="Enter email or mobile" value={queryString}
      onChange={e => this.setState({queryString: e.target.value})}/>
      <button onClick={() => this.props.fetchUser({queryString})}>Search</button>
    </Page>
  )}
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
})

const mapStateToProps = state => ({
  admin: state.user.admin
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
