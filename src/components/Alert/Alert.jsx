import React from "react";
import cn from "classnames";
import classes from "./Alert.module.scss";

const VIEW_MAP = {
  default: "default",
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

const Alert = ({ view = "default", title, className, children }) => {
  const classNames = cn(
    {
      [classes["alert"]]: true,
      [classes[`alert__${VIEW_MAP[view]}`]]: view,
    },
    className
  );

  return (
    <div className={classNames}>
      {title && <div className="alert__title">{title}</div>}
      {children}
    </div>
  );
};

export default Alert;
