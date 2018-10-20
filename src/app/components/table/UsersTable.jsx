import React from 'react';
import ReactTable from 'react-table';

class UserTable extends React.PureComponent {
  render() {
    const columns = [{
      Header: 'Fullname',
      accessor: 'fullname' // String-based value accessors!
    }, {
      Header: 'Email',
      accessor: 'email' // String-based value accessors!
    }, {
      Header: 'Mobile',
      accessor: 'mobile' // String-based value accessors!
    }, {
      Header: 'Gender',
      accessor: 'gender' // String-based value accessors!
    }]
    return (
      <ReactTable data={this.props.users} columns={columns} />
    )
  }
}

export default UserTable;
