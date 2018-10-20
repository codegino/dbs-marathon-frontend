// The basics
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';

// Action creators and helpers
import Header from './components/header/Header';
import Routes from './routes';

import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align:center;
`

const Content = styled.div`
  margin-top: 10px;
`

class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <Header
          current={this.props.location.pathname}
        />
        <Content>
          <Routes />
        </Content>
        <ToastContainer />
      </AppWrapper>
    );
  }
}

export default withRouter(App);
