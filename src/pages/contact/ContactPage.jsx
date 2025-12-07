import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
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

        const mailtoLink = `mailto:info@chateaupicard.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        setSubmitted(true);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                {t("contact.title")}
            </Typography>

            <Grid container spacing={6}>
                {/* FORMULARIO */}
                <Grid item xs={12} md={6}>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label={t("contact.name")}
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            fullWidth
                            label={t("contact.email")}
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            fullWidth
                            label={t("contact.message")}
                            name="message"
                            multiline
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            required
                            sx={{ mb: 3 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="large"
                        >
                            {t("contact.send")}
                        </Button>

                        {submitted && (
                            <Typography sx={{ mt: 2 }} color="secondary">
                                {t("contact.success")}
                            </Typography>
                        )}
                    </Box>
                </Grid>

                {/* MAPA */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            minHeight: 350,
                            borderRadius: 2,
                            overflow: "hidden",
                        }}
                    >
                        <iframe
                            title="map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps?q=Barcelona&output=embed"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
