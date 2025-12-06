import { Button } from "@mui/material";
import { useColorModeTheme } from "../../services/theme";

export default function HeaderButton({ children, onClick, component, to }) {
    const { mode } = useColorModeTheme();
    const textColor = mode === "light" ? "#4b2e1e" : "#ffffff";

    return (
        <Button
            component={component}
            to={to}
            onClick={onClick}
            sx={{
                backgroundColor: "transparent",
                color: textColor,
                fontWeight: 500,
                textTransform: "uppercase",
                fontSize: "0.85rem",
                letterSpacing: 1,
                "&:hover": {
                    backgroundColor:
                        mode === "light"
                            ? "rgba(75,46,30,0.08)"
                            : "rgba(255,255,255,0.1)",
                },
            }}
        >
            {children}
        </Button>
    );
}
