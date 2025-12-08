import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function ContactPage() {
    const { t } = useTranslation();
    const theme = useTheme();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Contacto desde la web - ${form.name}`;
        const body = `
            Nombre: ${form.name}
            Email: ${form.email}

            Mensaje:
            ${form.message}
        `;

        window.location.href = `mailto:info@chateaupicard.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, md: 6 },
                    py: { xs: 8, md: 12 },
                }}
            >
                <Grid
                    container
                    spacing={6}
                    alignItems="center"
                    justifyContent="center"
                    maxWidth="lg"
                    margin="0 auto"
                >
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            sx={{ mb: 2, letterSpacing: 2 }}
                        >
                            {t("contact.heroTitle")}
                        </Typography>

                        <Typography sx={{ mb: 3, color: "text.secondary" }}>
                            {t("contact.subtitle")}
                        </Typography>

                        <Typography sx={{ mb: 1 }}>
                            · 885 Avenue de la Montagne Noire
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            · Villeneuve-de-la-Raho, France
                        </Typography>
                        <Typography>· 00 123 45 678</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label={t("contact.name")}
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                variant="outlined"
                                label={t("contact.email")}
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                variant="outlined"
                                label={t("contact.message")}
                                name="message"
                                multiline
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                sx={{ mb: 3 }}
                            />

                            <Button
                                type="submit"
                                variant="outlined"
                                color="secondary"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    letterSpacing: 1,
                                }}
                            >
                                {t("contact.send")}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: "100%", height: 400 }}>
                <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps?q=Carcassonne&output=embed"
                />
            </Box>
        </>
    );
}
