import React from "react";
import classes from "./Mail.module.css";

//UI
import { Button, IconButton } from "@material-ui/core";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Mail() {
  const history = useHistory();

  return (
    <div className={classes.mail}>
      <div className={classes.mail__tools}>
        <div className={classes.mail__toolsLeft}>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon></ArrowBackIcon>
          </IconButton>
          <IconButton>
            <MoveToInboxIcon></MoveToInboxIcon>
          </IconButton>
          <IconButton>
            <ErrorIcon></ErrorIcon>
          </IconButton>
          <IconButton>
            <DeleteIcon></DeleteIcon>
          </IconButton>
          <IconButton>
            <EmailIcon></EmailIcon>
          </IconButton>
          <IconButton>
            <WatchLaterIcon></WatchLaterIcon>
          </IconButton>
          <IconButton>
            <CheckCircleIcon></CheckCircleIcon>
          </IconButton>
          <IconButton>
            <LabelImportantIcon></LabelImportantIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
        <div className={classes.mail__toolsRight}>
          <IconButton>
            <UnfoldMoreIcon></UnfoldMoreIcon>
          </IconButton>
          <IconButton>
            <PrintIcon></PrintIcon>
          </IconButton>
          <IconButton>
            <ExitToAppIcon></ExitToAppIcon>
          </IconButton>
        </div>
      </div>

      <div className={classes.mail__body}>
        <div className={classes.mail__bodyHeader}>
          <h2>Header</h2>
          <LabelImportantIcon
            className={classes.mail__important}
          ></LabelImportantIcon>
          <p>Title</p>
          <p className={classes.mail__time}>10pm</p>
        </div>

        <div className={classes.mail__message}>
          <p>This is message</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
