import React, { useRef, useEffect, useState } from 'react';

const OutsideClickHandler = ({ onClickOutside,className, children }) => {
  const ref = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isInputFocused) {
        onClickOutside();
        setIsInputFocused(false); // Reset state after calling onClickOutside
      }
    };

    const handleFocus = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        setIsInputFocused(true);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('focusin', handleFocus, true); // Listen for focus events

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('focusin', handleFocus, true);
    };
  }, [onClickOutside, isInputFocused]);

  return <div className={className} ref={ref} style={{width: "100%"}}>{children}</div>;
};

export default OutsideClickHandler;
