import React from "react";
import classes from "./app.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/UI/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";

//components

function App() {
  return (
    <Router>
      <div className={classes.app}>
        <Header></Header>

        <div className={classes.app__body}>
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/mail">
              <Mail></Mail>
            </Route>
            <Route path="/">
              <EmailList></EmailList>
            </Route>
          </Switch>
        </div>

        <SendMail></SendMail>
      </div>
    </Router>
  );
}

export default App;
