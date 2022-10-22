import React from 'react';
import classes from './TextBox.module.scss';

const TextBox = ({ children }) => (
  <div className={classes.textBox}>{ children }</div>
);

export default TextBox