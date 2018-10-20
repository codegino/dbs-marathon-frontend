import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page';
import {fetchUser} from '../../store/actions/user';
import Container from '../../components/container/Container';

class HomePage extends React.PureComponent {
  state = {
    queryString: ''
  }
  render() {
    const {queryString} = this.state;
    return (
    <Page id="homepage">
      <Container>
        <p>Here's our homepage. All are welcome.</p>
        <label htmlFor="search-query">Search User: </label>
        <input id="search-query" type="text" placeholder="Enter email or mobile" value={queryString}
        onChange={e => this.setState({queryString: e.target.value})}/>
        <button onClick={() => this.props.fetchUser({queryString})}>Search</button>
      </Container>
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
