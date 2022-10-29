import React from "react";
import cn from "classnames";
import classes from "./Button.module.scss";

const VARIANT_MAP = {
  pill: "pill",
  block: "block",
};

const SIZE_MAP = {
  base: "base",
  elevated: "elevated",
  reduced: "reduced",
};

const COLOR_MAP = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
    neutral: "neutral",
    danger: "danger",
  };

const Button = ({
  size = "base",
  color = 'neutral',
  variant = "pill",
  disabled = false,
  className = "",
  onClick,
  children,
}) => {
  const classNames = cn(
    {
      [classes["button"]]: true,
      [classes[`button__${SIZE_MAP[size]}`]]: size,
      [classes[`button__${VARIANT_MAP[variant]}`]]: variant,
      [classes[`button__${COLOR_MAP[color]}`]]: color,
      [classes[`button__${COLOR_MAP[color]}-disabled`]]: disabled,
    },
    className,
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
