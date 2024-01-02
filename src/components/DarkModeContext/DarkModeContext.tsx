import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DarkModeContextProps {
    children: ReactNode;
}

interface DarkModeContextState {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextState | undefined>(undefined);

const DarkModeProvider: React.FC<DarkModeContextProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const contextValue: DarkModeContextState = {
        darkMode,
        toggleDarkMode,
    };

    return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
};

const useDarkMode = (): DarkModeContextState => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export { DarkModeProvider, useDarkMode };
