import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                mt: "auto",
                textAlign: "center",
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Château Picard · All rights
                reserved.
            </Typography>
        </Box>
    );
}
