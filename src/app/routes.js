import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import {defaultStore} from '../store';

import NotFound from './pages/not-found';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './pages/homepage'),
  loading: () => null,
  modules: ['homepage']
});

const Register = Loadable({
  loader: () => import(/* webpackChunkName: "register" */ './pages/register/RegistrationForm'),
  loading: () => null,
  modules: ['register']
});

const Review = Loadable({
  loader: () => import(/* webpackChunkName: "review" */ './pages/review/ReviewForm'),
  loading: () => null,
  modules: ['review']
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './pages/login/Login'),
  loading: () => null,
  modules: ['login']
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "admin" */ './pages/admin/AdminPage'),
  loading: () => null,
  modules: ['admin']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin"
      render={() =>
        defaultStore.store.getState().user.admin ? (
          <Admin />
        ) : (
          <Redirect to={`/`} />
        )
      }
    />
    <Route exact path="/review"
      render={() =>
        defaultStore.store.getState().user.pendingUser ? (
          <Review />
        ) : (
          <Redirect to={`/`} />
        )
      }
    />
    <Route component={NotFound} />
  </Switch>
);
