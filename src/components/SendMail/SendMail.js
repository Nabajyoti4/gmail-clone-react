import React from "react";
import classes from "./SendMail.module.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mail-slice";
import { db } from "../../firebase";
import firebase from "firebase";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const closeForm = () => {
    dispatch(closeSendMessage());
  };

  return (
    <div className={classes.sendmail}>
      <div className={classes.sendmail__header}>
        <h3>New Message</h3>
        <CloseIcon onClick={closeForm}></CloseIcon>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        ></input>
        {errors.to && <p className={classes.sendmail__error}>To is Reqiured</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        ></input>
        {errors.subject && (
          <p className={classes.sendmail__error}>Subject is Reqiured</p>
        )}
        <input
          name="message"
          type="text"
          {...register("message", { required: true })}
          className={classes.sendmail__message}
        ></input>
        {errors.message && (
          <p className={classes.sendmail__error}>Message Body is Reqiured</p>
        )}
        <div className={classes.sendmail__options}>
          <Button
            className={classes.sendmail__send}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
