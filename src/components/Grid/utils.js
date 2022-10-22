export const createSizeClassNames = (props, skippedScreens, classes) => {
    const classNames = [];
  
    Object.keys(props).forEach((name) => {
      const prop = props[name];
  
      if (!prop) {
        return;
      }
      if (typeof prop !== "object") {
        classNames.push(classes[`${name}-${prop}`]);
        return;
      }
  
      Object.keys(prop).forEach((breakpoint) => {
        if (prop[breakpoint] === null) {
          return;
        }
  
        if (skippedScreens.includes(String(breakpoint))) {
          classNames.push(classes[`grid__${breakpoint}-none`]);
        } else {
          const value = prop[breakpoint];
          classNames.push(classes[`grid__${breakpoint}-${value}`]);
        }
      });
    });
  
    return classNames;
  };