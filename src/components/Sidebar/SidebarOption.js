import React from "react";
import classes from "./SidebarOption.module.css";

function SidebarOption(props) {
  const { Icon, title, number } = props;
  return (
    <div className={classes.sidebaroption}>
      <Icon></Icon>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
