import { createContext, useState } from 'react';

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  const addToast = (message)=>{
    setToastList((prev) => [...prev, { id: Date.now(), ...message }]);
  }
    
  return <ToastContext.Provider value={{ toastList, setToastList, addToast }}>{children}</ToastContext.Provider>;
}

export { ToastContext, ToastProvider };
