import { Button } from "@mui/material";

export default function HeaderButton({ children, onClick, component, to }) {
    return (
        <Button
            component={component}
            to={to}
            onClick={onClick}
            sx={{
                backgroundColor: "transparent",
                color: "white",
                fontWeight: 500,
                textTransform: "uppercase",
                fontSize: "0.85rem",
                letterSpacing: 1,
                "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                },
            }}
        >
            {children}
        </Button>
    );
}
