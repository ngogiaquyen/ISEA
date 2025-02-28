import { useState, createContext } from "react";

const activeLoginContext = createContext();


function LoginProvider({children}) {
    const [ isActive, setIsActive ] = useState(false);

    const toggleLoginForm = ()=>{
        setIsActive(!isActive);
    }
    const data = {
        isActive,
        toggleLoginForm
    }

    return (
        <activeLoginContext.Provider value={data}>
            {children}
        </activeLoginContext.Provider>
    );
}

export {activeLoginContext, LoginProvider};