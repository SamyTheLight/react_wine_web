import { Box, Typography } from "@mui/material";
import HeroSection from "../../components/home/HeroSection";

export default function HomePage() {
  return (
    <Box>
      <HeroSection />

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Nuestra filosofía
        </Typography>

        <Typography sx={{ maxWidth: 700, mx: "auto" }}>
          En nuestra bodega cuidamos cada detalle del proceso de elaboración
          del vino, combinando tradición e innovación para ofrecer una
          experiencia única en cada copa.
        </Typography>
      </Box>
    </Box>
  );
}
