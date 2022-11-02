import React, { useState } from "react";
import classnames from "classnames";
import classes from "./ButtonGroup.module.scss";

import "./ButtonGroup.module.scss";

const VARIANT_MAP = {
  pill: "pill",
  block: "block",
};

const SIZE_MAP = {
  base: "base",
  elevated: "elevated",
  reduced: "reduced",
};

const ButtonGroup = ({
  buttons = [],
  variant = "pill",
  className = "",
  size = 'base',
  isOutlined = false,
  onClick,
}) => {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div
      className={classnames(
        {
          [classes["button-group"]]: true,
          [classes[`button-group__${VARIANT_MAP[variant]}`]]: variant,
        },
        className
      )}
    >
      {buttons.map((name, i) => (
        <button
          key={i}
          name={name}
          className={classnames({
            [classes["button"]]: true,
            [classes[`button__${VARIANT_MAP[variant]}-${SIZE_MAP[size]}`]]: true,
            [classes["button__active"]]: selectedId === i,
            [classes["button__active-outlined"]]: selectedId === i && isOutlined,
          })}
          onClick={(event) => {
            setSelectedId(i);
            onClick(event);
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
