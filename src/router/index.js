/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date 
 * @modify date 
 * @desc Different routes and their corresponding component are defined here.
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Routes } from "./routes";

import {
  NotFound
} from './../screens';

const RouterApp = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={NotFound} />

        {/* For unknow/non-defined path */}
        <Route path="*" render={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
