import React, { useCallback, useRef } from "react";

export const useOutsideClick = (ref, handler) => {
  const handleClick = useCallback(
    (e) => {
      const { target } = e;

      if (!(target instanceof Node)) {
        return;
      }
      if (!document.body.contains(target)) {
        return;
      }
      const refList = Array.isArray(ref) ? ref : [ref];
      const clickedInside = refList.some(
        (oneRef) => oneRef.current !== null && oneRef.current.contains(target)
      );

      if (!clickedInside) {
        handler();
      }
    },
    [handler, ref]
  );
  const handleClickRef = useRef();

  React.useEffect(() => {
    handleClickRef.current = handleClick;
    document.addEventListener("click", handleClick);

    return () => {
      if (handleClickRef.current !== undefined) {
        document.removeEventListener("click", handleClickRef.current);
      }
    };
  }, [handleClick]);
};
