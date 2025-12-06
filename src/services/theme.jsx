import React, { createContext, useContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                setMode((prev) => (prev === "light" ? "dark" : "light"));
            },
        }),
        [mode]
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#8b1538", // tono vino tinto
                    },
                    secondary: {
                        main: "#d1a75f", // dorado suave
                    },
                    background: {
                        default: mode === "light" ? "#faf5f0" : "#121212ff",
                        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
                    },
                    text: {
                        primary: mode === "light" ? "#4b2e1e" : "#ffffff",
                        secondary: mode === "light" ? "#6b4a3a" : "#cccccc",
                    },
                },
                typography: {
                    fontFamily:
                        "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={{ ...colorMode, theme }}>
            {children}
        </ColorModeContext.Provider>
    );
}

export function useColorModeTheme() {
    const ctx = useContext(ColorModeContext);
    if (!ctx) {
        throw new Error(
            "useColorModeTheme must be used within ColorModeProvider"
        );
    }
    return ctx;
}
