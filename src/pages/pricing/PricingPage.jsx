import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const wines = [
    {
        id: 1,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: 2,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: 3,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: 4,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: 5,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: 6,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: 7,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: 8,
        name: "Napa di Fiore",
        price: "220€",
        image: "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function PricingPage() {
    const { t } = useTranslation();

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" align="center" sx={{ mb: 6 }}>
                {t("pricing.title")}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {wines.map((wine) => (
                    <Grid item xs={12} sm={6} md={4} key={wine.id}>
                        <Card sx={{ height: "100%" }}>
                            <CardMedia
                                component="img"
                                height="320"
                                image={wine.image}
                                alt={wine.name}
                                sx={{ objectFit: "contain", p: 2 }}
                            />

                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    {wine.name}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 1 }}
                                >
                                    {wine.price}
                                </Typography>
                            </CardContent>

                            <CardActions
                                sx={{ justifyContent: "center", pb: 2 }}
                            >
                                <Button variant="outlined" size="small">
                                    {t("pricing.moreInfo")}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
