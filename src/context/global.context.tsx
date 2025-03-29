import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
    value: number | null,
    setValue: React.Dispatch<React.SetStateAction<number>>
};

export const GlobalContext = createContext<GlobalContextType>({
    value: null,
    setValue: () => {}
});

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context.value && context.value !== 0) {
        throw new Error('GlobalContext must to be use within a GlobalContextProvider');
    };

    return context;
};

interface GlobalContextProviderParams {
    children: ReactNode
};

const EmptyGlobalContextValue: number = 0;

export const GlobalContextProvider = ({ children }: GlobalContextProviderParams) => {
    const [ value, setValue ] = useState<typeof EmptyGlobalContextValue>(EmptyGlobalContextValue);

    return (
        <GlobalContext.Provider value={{value, setValue}}>
            {children}
        </GlobalContext.Provider>
    );
};
