import { useState } from "react";
import { Button, Menu, MenuItem, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "ca", label: "Català", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageMenu() {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const currentLang =
        languages.find((l) => l.code === i18n.language) || languages[0];

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (lng) => {
        if (lng) {
            i18n.changeLanguage(lng);
        }
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                sx={{
                    color: "inherit",
                    textTransform: "none",
                    fontWeight: 500,
                }}
                endIcon={<KeyboardArrowDownIcon />}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <span>{currentLang.flag}</span>
                    <Typography variant="body2">
                        {currentLang.code.toUpperCase()}
                    </Typography>
                </Box>
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        onClick={() => handleClose(lang.code)}
                    >
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <span>{lang.flag}</span>
                            <Typography variant="body2">
                                {lang.label}
                            </Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
