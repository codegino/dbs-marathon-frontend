import React from 'react';
import {connect} from 'react-redux';

class ReviewForm extends React.PureComponent {
  render() {
    const {email, mobile} = this.props.pendingUser
    return (
      <div>
        Review Form {email} {mobile}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  pendingUser: state.user.pendingUser
})

export default connect(mapStateToProps)(ReviewForm);
