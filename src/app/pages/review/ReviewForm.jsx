import React from 'react';
import {connect} from 'react-redux';
import Centered from '../../components/container/Centered'

class ReviewForm extends React.PureComponent {
  render() {
    const {email, mobile, fullname, gender} = this.props.pendingUser
    return (
      <Centered>
        Review Form {email} {mobile} {fullname} {gender}
      </Centered>
    )
  }
}

const mapStateToProps = state => ({
  pendingUser: state.user.pendingUser
})

export default connect(mapStateToProps)(ReviewForm);
