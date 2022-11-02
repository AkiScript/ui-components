import React, { useState, useRef } from "react";
import cn from "classnames";
import { useOutsideClick } from "../../hooks/use-outside-click";
import ArrowIcon from "../../icons/arrow-icon";
import classes from "./DropdownButton.module.scss";

const DropdownButton = ({ options = [], className, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      ref={ref}
      className={cn(
        {
          [classes["dropdown-button"]]: true,
        },
        className
      )}
    >
      <div
        className={cn({
          [classes["dropdown-button__header"]]: true,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span
          className={cn({
            [classes["dropdown-button__arrow-up"]]: isOpen,
          })}
        >
          <ArrowIcon />
        </span>
      </div>
      {isOpen && (
        <ul>
          {options.map(({ id, text, onClick }) => (
            <li
              onClick={() => {
                onClick(id);
                setIsOpen(false);
              }}
              key={id}
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
