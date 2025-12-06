import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import { ColorModeProvider, useColorModeTheme } from "./services/theme";
import "./services/i18n"; // inicializar i18next

function AppWithTheme() {
    const { theme } = useColorModeTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ColorModeProvider>
            <AppWithTheme />
        </ColorModeProvider>
    </React.StrictMode>
);
