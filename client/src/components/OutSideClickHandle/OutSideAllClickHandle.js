import React, { useRef, useEffect } from 'react';

const OutsideAllClickHandler = ({ onClickOutside, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside(); 
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>; 
};

export default OutsideAllClickHandler;
// import React, { useRef, useEffect } from 'react';

// const OutsideAllClickHandler = ({ onClickOutside, children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         onClickOutside();
//       }
//     };

//     document.addEventListener('click', handleClickOutside, true);
//     return () => {
//       document.removeEventListener('click', handleClickOutside, true);
//     };
//   }, [onClickOutside]);

//   return <div ref={ref}>{children}</div>;
// };

// export default OutsideAllClickHandler;