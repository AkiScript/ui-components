import React, { useState } from "react";
import classnames from "classnames";
import classes from "./ButtonGroup.module.scss";

import "./ButtonGroup.module.scss";

const VARIANT_MAP = {
  pill: "pill",
  block: "block",
};

const ButtonGroup = ({
  buttons = [],
  variant = "pill",
  className = "",
  onClick,
}) => {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div
      className={classnames(
        {
          [classes["button-group"]]: true,
          [classes[`button-group-${VARIANT_MAP[variant]}`]]: variant,
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
            [classes[`button-${VARIANT_MAP[variant]}`]]: variant,
            [classes["button-active"]]: selectedId === i,
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
