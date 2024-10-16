/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Redirect } from '@americanexpress/one-app-router';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => [
  <Redirect from="/" to="/login" />,
  <ModuleRoute path="/register" moduleName="register" />,
  <ModuleRoute path="/login" moduleName="login" />,
  <ModuleRoute path="/account" moduleName="account" />,
];

export default childRoutes;
