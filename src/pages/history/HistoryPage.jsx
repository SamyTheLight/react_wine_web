import { Container, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function HistoryPage() {
    const { t } = useTranslation();

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" align="center" sx={{ mb: 6 }}>
                {t("history.title")}
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    height: 350,
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1200&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    mb: 8,
                }}
            />

            <Box sx={{ maxWidth: 700, mb: 6 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    {t("history.stage1.title")}
                </Typography>
                <Typography color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </Box>

            <Box sx={{ maxWidth: 700, mb: 6 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    {t("history.stage2.title")}
                </Typography>
                <Typography color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </Box>

            <Box sx={{ maxWidth: 700 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    {t("history.stage3.title")}
                </Typography>
                <Typography color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </Box>
        </Container>
    );
}
