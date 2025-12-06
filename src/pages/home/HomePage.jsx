import { Box, Typography, Container } from "@mui/material";
import HeroSection from "../../components/home/HeroSection";
import FeaturedWines from "../../components/home/FeaturedWines";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const { t } = useTranslation();
    return (
        <Box>
            <HeroSection />

            <Container
                maxWidth="xl"
                sx={{
                    px: { xs: 2, sm: 4, md: 6 },
                }}
            >
                <Box sx={{ mt: 6, textAlign: "center" }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        {t("home.title")}
                    </Typography>

                    <Typography sx={{ maxWidth: 700, mx: "auto" }}>
                        {t("home.subtitle")}
                    </Typography>
                </Box>

                <FeaturedWines />
            </Container>
        </Box>
    );
}
