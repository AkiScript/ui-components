import React, { useMemo } from "react";
import cn from "classnames";
import { createSizeClassNames } from "./utils";
import classes from "./Grid.module.scss";

// Columns = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
// Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
// JustifyContent = 'flex-start' | 'center' | 'space-between' | 'flex-end';
// AlignContent = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
// AlignItems = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
// Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const Grid = ({
  children,
  container,
  item,
  spacing,
  sizing = { xs: 12, sm: 6, md: 4, lg: 1 },
  skippedScreens = [],
  justifyContent,
  alignContent = "stretch",
  alignItems = "stretch",
  direction = "row",
  style,
}) => {
  const sizeClassNames = useMemo(
    () => createSizeClassNames({ sizing }, skippedScreens, classes),
    [sizing, skippedScreens]
  );

  const gridClassNames = cn(
    {
      [classes["grid"]]: true,
      [classes["grid__container"]]: container,
      [classes["grid__item"]]: item && !container,
      [classes[`grid__spacing-${spacing}`]]: spacing && container,
      [classes[`grid__justifyContent-${justifyContent}`]]: justifyContent,
      [classes[`grid__alignContent-${alignContent}`]]: alignContent,
      [classes[`grid__alignItems-${alignItems}`]]: alignItems,
      [classes[`grid__direction-${direction}`]]: direction,
    },
    ...[!container && sizeClassNames]
  );

  return (
    <div className={gridClassNames} style={style}>
      {children}
    </div>
  );
};

export default Grid;
