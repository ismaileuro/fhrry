import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Welcome from "../Welcome/Welcome";

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
