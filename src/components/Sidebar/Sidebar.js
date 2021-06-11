import React from "react";
import classes from "./Sidebar.module.css";
import { useDispatch } from "react-redux";

//Ui
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import { openSendMessage } from "../../features/mail-slice";

function Sidebar() {
  const dispatch = useDispatch();

  const showForm = () => {
    dispatch(openSendMessage());
  };
  return (
    <div className={classes.sidebar}>
      <Button
        className={classes.sidebar__compose}
        startIcon={<AddIcon fontSize="large"></AddIcon>}
        onClick={showForm}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      ></SidebarOption>
      <SidebarOption
        Icon={StarIcon}
        title="Starred"
        number={54}
      ></SidebarOption>
      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={54}
      ></SidebarOption>
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={54}
      ></SidebarOption>
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54}></SidebarOption>
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54}></SidebarOption>
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="More"
        number={54}
      ></SidebarOption>

      <div className={classes.sidebar__footer}>
        <div className={classes.sidebar__footerIcons}>
          <IconButton>
            <PersonIcon></PersonIcon>
          </IconButton>
          <IconButton>
            <DuoIcon></DuoIcon>
          </IconButton>
          <IconButton>
            <PhoneIcon></PhoneIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
