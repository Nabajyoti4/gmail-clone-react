import React from "react";
import classes from "./EmailItems.module.css";

//UI
import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useHistory } from "react-router";

export default function EmailItems(props) {
  const { id, title, subject, description, time } = props;

  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className={classes.emailItem}>
      <div className={classes.emailItem__options}>
        <Checkbox></Checkbox>
        <IconButton>
          <StarBorderIcon></StarBorderIcon>{" "}
        </IconButton>
        <IconButton>
          <LabelImportantIcon></LabelImportantIcon>{" "}
        </IconButton>
      </div>
      <h3 className={classes.emailItem__title}>{title}</h3>
      <div className={classes.emailItem__message}>
        <h4>
          {subject}{" "}
          <span className={classes.emailItem__description}>{description}</span>
        </h4>
      </div>
      <div className={classes.emailItem__time}>{time}</div>
    </div>
  );
}
