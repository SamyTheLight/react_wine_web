import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: 2,
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
        }}
      />

      {/* Contenido */}
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Bodega Montaña Negra
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          Vinos de alta calidad elaborados con tradición y pasión desde 1970
        </Typography>

        <Button variant="contained" color="secondary" size="large">
          Descubrir nuestros vinos
        </Button>
      </Box>
    </Box>
  );
}
