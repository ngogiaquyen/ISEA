import { faL } from '@fortawesome/free-solid-svg-icons';
import { createContext, useState } from 'react';

const LoadBarContext = createContext();

function LoadBarPovider({ children }) {
  const [isAcitveLoadBar, setIsAcitveLoadBar] = useState(false);
  const showLoadBar = () => {
    setIsAcitveLoadBar(true)
  };
  const hideLoadBar = () => {
    setTimeout(() => setIsAcitveLoadBar(false), 1000);
  };
  return <LoadBarContext.Provider value={{isAcitveLoadBar, showLoadBar, hideLoadBar }}>{children}</LoadBarContext.Provider>;
}

export { LoadBarContext, LoadBarPovider };
