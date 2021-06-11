import React from "react";
import classes from "./Mail.module.css";
import { useSelector } from "react-redux";
import { selectedMail } from "../../features/mail-slice";

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
  const mail = useSelector(selectedMail);

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
          <h2>{mail.subject}</h2>
          <LabelImportantIcon
            className={classes.mail__important}
          ></LabelImportantIcon>
          <p>{mail.to}</p>
          <p className={classes.mail__time}>
            {mail.time}
          </p>
        </div>

        <div className={classes.mail__message}>
          <p>{mail.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
