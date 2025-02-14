import { createContext, useState } from "react";

const ModalOverLayContext = createContext();

function ModalOverLayProvider({children}) {
    const [modalComponentContent, setModalComponentContent] = useState(null);
    return ( <ModalOverLayContext value={{modalComponentContent, setModalComponentContent}}>{children}</ModalOverLayContext>);
}

export  {ModalOverLayContext, ModalOverLayProvider};