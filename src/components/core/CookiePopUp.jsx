import { Snackbar, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function CookiePopUp() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");

        if (!cookiesAccepted) {
            setOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            message="Utilizamos cookies para mejorar la experiencia del usuario."
            action={
                <Button color="secondary" size="small" onClick={handleAccept}>
                    Aceptar
                </Button>
            }
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
    );
}
