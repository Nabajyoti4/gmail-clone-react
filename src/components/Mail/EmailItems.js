import React from "react";
import classes from "./EmailItems.module.css";

//UI
import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function EmailItems(props) {
  const { id, title, subject, description, time } = props;
  return (
    <div className={classes.emailItem}>
      <div className={classes.emailItem__options}>
        <Checkbox></Checkbox>
        <IconButton>
          <StarBorderIcon></StarBorderIcon>{" "}
        </IconButton>
        <IconButton>
          <LabelImportantIcon></LabelImportantIcon>{" "}
        </IconButton>
      </div>
      <div className={classes.emailItem__title}></div>
      <div className={classes.emailItem__message}></div>
      <div className={classes.emailItem__time}></div>
    </div>
  );
}
