import React from "react";
import classes from "./Typography.module.scss";
import cn from "classnames";

const TYPE_MAP = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "body1",
  body2: "body2",
  caption: "caption",
  overline: "overline",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
};

const Typography = ({
    type = "body1",
    inline = false,
    children,
    className = '',
    fontWeight,
    textColor
}) => {
  const classNames = cn(
    {
      [classes["typography"]]: true,
      [classes[`typography__${TYPE_MAP[type]}`]]: TYPE_MAP[type],
      [classes["typography__inline"]]: inline,
    },
    className
  );
  return <div className={classNames} style={{color: textColor, fontWeight}}>{children}</div>;
};

export default Typography;
