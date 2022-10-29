import React, { useState } from "react";
import classnames from "classnames";
import classes from "./DropdownButton.module.scss";

const DropdownButton = ({ options = [], className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div
      className={classnames(
        {
          [classes["dropdown-button"]]: true,
        },
        className
      )}
    >
      <div
        className={classnames({
          [classes["dropdown-button__header"]]: true,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Select ..."}
      </div>
      {isOpen && (
        <ul>
          {options.map((option, i) => (
            <li onClick={() => onOptionClicked(option)} key={i}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
