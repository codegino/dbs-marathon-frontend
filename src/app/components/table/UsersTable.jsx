import React from 'react';
import ReactTable from 'react-table';

class UserTable extends React.PureComponent {
  render() {
    const columns = [{
      Header: 'Fullname',
      accessor: 'fullname'
    }, {
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Mobile',
      accessor: 'mobile'
    }, {
      Header: 'Gender',
      accessor: 'gender'
    }, {
      Header: 'Race Type',
      accessor: 'race'
    }]
    return (
      <ReactTable data={this.props.users} columns={columns} />
    )
  }
}

export default UserTable;
