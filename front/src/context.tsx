import { createContext, ReactNode, useState } from "react";


type UserContextType = {
    isDark: boolean;
    setIsDark: (newState: boolean) => void;
}

type UserContextProps = {
    children: ReactNode;
}

const initialValue = {
    isDark: false,
    setIsDark: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({children}: UserContextProps) => {
    const [isDark, setIsDark] = useState(initialValue.isDark)
    return(
        <UserContext.Provider value={{isDark, setIsDark}}>{children}</UserContext.Provider>
    )
}