import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page';
import {fetchUserReport} from '../../store/actions/user';
import Button from '../../components/button';
import Centered from '../../components/container';
import UsersTable from '../../components/table/UsersTable';

class AdminPage extends React.PureComponent {
  state = {
    queryString: ''
  }

  render() {
    const {admin: {username}, users} = this.props;

    return (
    <Page id="admin">
      <Centered>
        <h2>Welcome {username}</h2>
        <Button onClick={() => this.props.fetchUserReport()}>Get All Users</Button>
      </Centered>
      <Centered>
        {users.length > 0 ? <UsersTable users={users} /> : null}
      </Centered>
    </Page>
  )}
}

const mapDispatchToProps = dispatch => ({
  fetchUserReport: (user) => dispatch(fetchUserReport())
})

const mapStateToProps = state => ({
  admin: state.user.admin,
  users: state.user.users
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
