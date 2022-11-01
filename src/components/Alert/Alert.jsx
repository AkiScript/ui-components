import React, { useState, useEffect } from "react";
import cn from "classnames";
import classes from "./Alert.module.scss";
import CloseIcon from "../../icons/close-icon";

const TYPE_MAP = {
  default: "default",
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

const Alert = ({
  type = "default",
  title,
  className,
  children,
  subtitle,
  leftAddons,
  leftAddonsClassName,
  autodisapearSeconds,
}) => {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (!autodisapearSeconds) {
      return;
    }

    const timeId = setTimeout(() => {
      setIsShown(false);
    }, autodisapearSeconds);

    return () => {
      clearTimeout(timeId);
    };
  }, [autodisapearSeconds]);

  const classNames = cn(
    {
      [classes["alert"]]: true,
      [classes[`alert__${TYPE_MAP[type]}`]]: type,
    },
    className
  );

  const leftAddonsClassNames = cn(
    {
      [classes["alert__left-addons"]]: true,
    },
    leftAddonsClassName
  );

  return isShown ? (
    <div className={classNames}>
      {leftAddons && <div className={leftAddonsClassNames}>{leftAddons}</div>}
      <div>
        {title && <h3>{title}</h3>}
        {subtitle && <p>{subtitle}</p>}
        {children}
        <span
          className={cn({ [classes["alert__close"]]: true })}
          onClick={() => setIsShown(false)}
        >
          <CloseIcon />
        </span>
      </div>
    </div>
  ) : null;
};

export default Alert;
