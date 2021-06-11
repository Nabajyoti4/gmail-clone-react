import React, { useEffect, useState } from "react";
import classes from "./EmailList.module.css";
import { useSelector } from "react-redux";
import { authUser } from "../../features/user-slice";

//Componet
import Section from "./Section";

//UI
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailItems from "./EmailItems";

import { db } from "../../firebase";

function EmailList() {
  const [emailList, setEmailList] = useState([]);
  const user = useSelector(authUser);

  //get the list of emails
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmailList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [emailList]);

  return (
    <div className={classes.emailList}>
      <div className={classes.emailList__settings}>
        {/* 
        Left pane */}
        <div className={classes.emailList__settingsLeft}>
          <Checkbox></Checkbox>
          <IconButton>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </IconButton>
          <IconButton>
            <RedoIcon></RedoIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>

        {/*Right pane*/}
        <div className={classes.emailList__settingsRight}>
          <IconButton>
            <ChevronLeftIcon></ChevronLeftIcon>
          </IconButton>
          <IconButton>
            <ChevronRightIcon></ChevronRightIcon>
          </IconButton>

          <IconButton>
            <KeyboardHideIcon></KeyboardHideIcon>
          </IconButton>
          <IconButton>
            <SettingsIcon></SettingsIcon>
          </IconButton>
        </div>
      </div>

      <div className={classes.emailList__sections}>
        <Section
          Icon={InboxIcon}
          title="Primary"
          color="red"
          selected
        ></Section>
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8"></Section>
        <Section
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
        ></Section>
      </div>

      {/* Email list of user */}

      <div className={classes.emailList__list}>
        {emailList.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailItems
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          ></EmailItems>
        ))}
      </div>
    </div>
  );
}

export default EmailList;
