import { createContext, ReactNode, useContext, useState } from "react";

type modalContextValueType = boolean

interface modalContextType {
    state: modalContextValueType | null,
    setState: React.Dispatch<React.SetStateAction<modalContextValueType>>,
}

const modalContext = createContext<modalContextType>({
    state: null,
    setState: () => {}
})

export const useModalContext = () => {
    const modalContextObject = useContext(modalContext)
    
    if (!modalContextObject) {
        throw new Error('modalContext must to be initialized within a modalContextProvider')
    }

    return modalContextObject
}

const emptyModalContextValue: modalContextValueType = false

export const ModalContextProvider = ({children}: {children: ReactNode}) => {
    const [state, setState] = useState<modalContextValueType>(emptyModalContextValue)

    return <modalContext.Provider value={{state, setState}}>{children}</modalContext.Provider>
}