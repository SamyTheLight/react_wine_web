import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const wines = [
    {
        name: "Reserva Tinto",
        description: "Vino tinto con cuerpo, elaborado con uvas seleccionadas.",
        image: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc",
    },
];

export default function FeaturedWines() {
    const { t } = useTranslation();
    return (
        <Box sx={{ mt: 8, px: 2, mb: 6 }}>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                {t("home.featuredTitle")}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {wines.map((wine, index) => (
                    <Grid item xs={12} sm={4} md={4} key={index}>
                        <Card
                            sx={{
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="240"
                                image={wine.image}
                                alt={wine.name}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {wine.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {wine.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
