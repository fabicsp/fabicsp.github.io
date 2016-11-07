import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Game from "./pages/Game";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app =   document.getElementById('root')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      // <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives" name="archives" component={Archives}></Route>
      <Route path="featured" name="featured" component={Featured}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="game" name="game" component={Game}></Route>
    </Route>
  </Router>,
app);
