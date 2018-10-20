import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page';
import {fetchUser} from '../../store/actions/user';
import Centered from '../../components/container';
import Button from '../../components/button';
import UserInfo from '../../components/user/UserInfo';

class HomePage extends React.PureComponent {
  state = {
    queryString: ''
  }
  render() {
    const {queryString} = this.state;
    return (
    <Page id="homepage">
      <Centered>
        <h2>Here's our homepage. All are welcome.</h2>
        <label htmlFor="search-query">Search User: </label>
        <input id="search-query" type="text" placeholder="Enter email or mobile" value={queryString}
        onChange={e => this.setState({queryString: e.target.value})}/>
        <Button onClick={() => this.props.fetchUser({queryString})}>Search</Button>
        {this.props.currentUser ? <UserInfo user={this.props.currentUser}/> : null}
      </Centered>
    </Page>
  )}
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
})

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
