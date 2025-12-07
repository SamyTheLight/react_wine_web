import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
    const { t } = useTranslation();

    const plans = [{ key: "basic" }, { key: "premium" }, { key: "reserve" }];

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" align="center" sx={{ mb: 6 }}>
                {t("pricing.title")}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {plans.map((plan) => (
                    <Grid item xs={12} md={4} key={plan.key}>
                        <Card
                            sx={{
                                height: "100%",
                                textAlign: "center",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    {t(`pricing.${plan.key}.title`)}
                                </Typography>

                                <Typography
                                    variant="h4"
                                    color="secondary"
                                    sx={{ mb: 2 }}
                                >
                                    {t(`pricing.${plan.key}.price`)}
                                </Typography>

                                <Typography sx={{ mb: 3 }}>
                                    {t(`pricing.${plan.key}.description`)}
                                </Typography>

                                <Box>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        {t("pricing.button")}
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
