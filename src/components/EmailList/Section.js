import React from "react";
import classes from "./Section.module.css";

function Section(props) {
  const { Icon, title, color, selected } = props;
  return (
    <div
      className={`${classes.section} ${selected && classes.section__selected}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon></Icon>
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
