'use client';

import { Poppins } from 'next/font/google';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

type ThemeContextType = {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    mode: 'light',
});

export const AppThemeProvider = ({ children }: { children: React.ReactNode; }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedMode = localStorage.getItem('themeMode') as 'light' | 'dark';
            if (storedMode) {
                setMode(storedMode);
            }
        }
    }, []);

    const toggleTheme = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('themeMode', newMode);
        setMode(newMode);
    };

    const theme = useMemo(() => createTheme({
        palette: { mode },
        typography: { fontFamily: poppins.style.fontFamily },
        components: { MuiCard: { styleOverrides: { root: { border: '1px solid #e0e0e0' } } } },
    }), [mode]);

    const contextValue = useMemo(() => ({
        toggleTheme,
        mode,
    }), [toggleTheme, mode]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
