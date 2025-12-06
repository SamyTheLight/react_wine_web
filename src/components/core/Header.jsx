import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useColorModeTheme } from "../../services/theme";
import { useState } from "react";

import HeaderButton from "../shared/HeaderButton";

export default function Header() {
    const { t, i18n } = useTranslation();
    const { mode, toggleColorMode } = useColorModeTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        handleMenuClose();
    };

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "transparent",
                color: "white",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Logo */}
                <Typography variant="h6" fontWeight="bold">
                    Bodega Montaña Negra
                </Typography>

                {/* DESKTOP MENU */}
                <Box
                    sx={{
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <HeaderButton component={RouterLink} to="/">
                        {t("nav.home")}
                    </HeaderButton>

                    <HeaderButton component={RouterLink} to="/history">
                        {t("nav.history")}
                    </HeaderButton>

                    <HeaderButton component={RouterLink} to="/pricing">
                        {t("nav.pricing")}
                    </HeaderButton>

                    <HeaderButton component={RouterLink} to="/contact">
                        {t("nav.contact")}
                    </HeaderButton>

                    <HeaderButton onClick={() => i18n.changeLanguage("es")}>
                        ES
                    </HeaderButton>

                    <HeaderButton onClick={() => i18n.changeLanguage("ca")}>
                        CA
                    </HeaderButton>

                    <IconButton onClick={toggleColorMode}>
                        {mode === "light" ? (
                            <DarkModeIcon />
                        ) : (
                            <LightModeIcon />
                        )}
                    </IconButton>
                </Box>

                {/* MOBILE MENU */}
                <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                    <IconButton onClick={handleMenuOpen} color="inherit">
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        {/* Pages */}
                        <MenuItem
                            component={RouterLink}
                            to="/"
                            onClick={handleMenuClose}
                        >
                            {t("nav.home")}
                        </MenuItem>
                        <MenuItem
                            component={RouterLink}
                            to="/history"
                            onClick={handleMenuClose}
                        >
                            {t("nav.history")}
                        </MenuItem>
                        <MenuItem
                            component={RouterLink}
                            to="/pricing"
                            onClick={handleMenuClose}
                        >
                            {t("nav.pricing")}
                        </MenuItem>
                        <MenuItem
                            component={RouterLink}
                            to="/contact"
                            onClick={handleMenuClose}
                        >
                            {t("nav.contact")}
                        </MenuItem>

                        <MenuItem disabled>────────</MenuItem>

                        <MenuItem onClick={() => changeLanguage("es")}>
                            ES
                        </MenuItem>
                        <MenuItem onClick={() => changeLanguage("ca")}>
                            CA
                        </MenuItem>

                        <MenuItem onClick={toggleColorMode}>
                            {mode === "light" ? "Dark mode" : "Light mode"}
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
