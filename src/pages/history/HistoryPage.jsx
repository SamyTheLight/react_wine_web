import { Container, Typography, Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function HistoryPage() {
    const { t } = useTranslation();

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                {t("history.title")}
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    height: 350,
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    mb: 6,
                }}
            />

            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        {t("history.stage1.title")}
                    </Typography>
                    <Typography color="text.secondary">
                        {t("history.stage1.text")}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        {t("history.stage2.title")}
                    </Typography>
                    <Typography color="text.secondary">
                        {t("history.stage2.text")}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        {t("history.stage3.title")}
                    </Typography>
                    <Typography color="text.secondary">
                        {t("history.stage3.text")}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
