import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = () => (
  <div className={classes.BuildControls}>
    <BuildControl label={"hehe"} />
  </div>
);

export default buildControls;
