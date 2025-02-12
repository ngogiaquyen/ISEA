import { createContext, useEffect, useState } from 'react';

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);
    
  return <ToastContext.Provider value={{ toastList, setToastList }}>{children}</ToastContext.Provider>;
}

export { ToastContext, ToastProvider };
