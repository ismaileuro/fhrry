import React from "react";
import styles from "./Home.module.css";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const Home = () => {
  let match = useRouteMatch();

  return (
    <div className={styles.home}>
        <div className={styles.left}></div>
        <div className={styles.right}>
        <Switch>
        <Route path={`${match.path}/signup`}>
          <Signup />
        </Route>
        <Route path={match.path}>
          <Login />
        </Route>
      </Switch>
        </div>
        
      
    </div>
  );
};

export default Home;
