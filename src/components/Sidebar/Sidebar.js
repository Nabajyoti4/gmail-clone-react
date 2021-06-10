import React from "react";
import classes from "./Sidebar.module.css";

//Ui
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Button
        className={classes.sidebar__compose}
        startIcon={<AddIcon fontSize="large"></AddIcon>}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54}></SidebarOption>
    </div>
  );
}

export default Sidebar;
