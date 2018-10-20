import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page';
import {fetchUser} from '../../store/actions/user';
import Centered from '../../components/container';
import Button from '../../components/button';

class HomePage extends React.PureComponent {
  state = {
    queryString: ''
  }
  render() {
    const {queryString} = this.state;
    return (
    <Page id="homepage">
      <Centered>
        <p>Here's our homepage. All are welcome.</p>
        <label htmlFor="search-query">Search User: </label>
        <input id="search-query" type="text" placeholder="Enter email or mobile" value={queryString}
        onChange={e => this.setState({queryString: e.target.value})}/>
        <Button onClick={() => this.props.fetchUser({queryString})}>Search</Button>
      </Centered>
    </Page>
  )}
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
