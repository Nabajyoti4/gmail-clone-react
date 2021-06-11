import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./app.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/UI/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";
import { selectSendMessageIsOpen } from "./features/mail-slice";
import { authUser, login } from "./features/user-slice";
import Login from "./components/Auth/Login";
import { auth } from "./firebase";

//components

function App() {
  const sendMessageState = useSelector(selectSendMessageIsOpen);
  const user = useSelector(authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login></Login>
      ) : (
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

          {sendMessageState && <SendMail></SendMail>}
        </div>
      )}
    </Router>
  );
}

export default App;
