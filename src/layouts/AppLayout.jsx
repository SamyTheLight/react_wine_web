import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import CookiePopup from "../components/core/CookiePopUp";

export default function AppLayout() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />

            <Box component="main" sx={{ flexGrow: 1 }}>
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Outlet />
                </Container>
            </Box>

            <Footer />

            <CookiePopup />
        </Box>
    );
}
