import React from "react";
import classes from "./Typography.module.scss";
import cn from "classnames";

const SIZE_MAP = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
};

const Typography = ({
    size = 1,
    inline = false,
    children,
    className = '',
    fontWeight,
    textColor
}) => {
  const classNames = cn(
    {
      [classes["typography"]]: true,
      [classes[`typography__${SIZE_MAP[size]}`]]: SIZE_MAP[size],
      [classes["typography__inline"]]: inline,
    },
    className
  );
  return <div className={classNames} style={{color: textColor, fontWeight}}>{children}</div>;
};

export default Typography;
