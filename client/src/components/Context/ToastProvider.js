import { createContext, useEffect, useState } from 'react';

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([
    // {
    //   id: 1,
    //   status: 'success',
    //   title: 'success',
    //   content: 'Have some error1',
    // },
    // {
    //   id: 2,
    //   status: 'warning',
    //   title: 'warning',
    //   content: 'Have some error2',
    // },
    // {
    //   id: 3,
    //   status: 'error',
    //   title: 'error',
    //   content: 'Have some error3',
    // },
    // {
    //   id: 4,
    //   status: '',
    //   title: 'Error',
    //   content: 'Have some error4',
    // },
  ]);

  //   useEffect(() => {
  //     if(toastList.length === 0) return;
  //     // add isLeaving to first element
  //     const timeout1 = setTimeout(() => {
  //         setToastList((prevToasts) =>
  //             prevToasts.map((toast, index)=>
  //                 index === 0 ? {...toast, isLeaving: true} : toast
  //             )
  //         );
  //     }, 3000);
  //     // remove toast component
  //     const timeout2 = setTimeout(() => {
  //         setToastList((prevToasts)=>prevToasts.slice(1));
  //         console.log("remove 1 toast");
  //     }, 4000);

  //     return ()=>{
  //         clearTimeout(timeout1);
  //         clearTimeout(timeout2);
  //     }
  //   }, [toastList.length]);

  return <ToastContext.Provider value={{ toastList, setToastList }}>{children}</ToastContext.Provider>;
}

export { ToastContext, ToastProvider };
