import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            nav: {
                home: "Inicio",
                history: "Historia",
                pricing: "Precios",
                contact: "Contacto",
            },
            hero: {
                title: "Château Picard",
                subtitle:
                    "Vinos con legado estelar, elaborados con tradición familiar desde 2234.",
                button: "Descubrir nuestros vinos",
            },
            home: {
                title: "Nuestra filosofía",
                subtitle:
                    "Cuidamos cada detalle del proceso de elaboración del vino.",
                featuredTitle: "Vinos destacados",
            },
            contact: {
                title: "Contacto",
                name: "Nombre",
                email: "Correo electrónico",
                message: "Mensaje",
                send: "Enviar mensaje",
                success: "Mensaje enviado correctamente.",
            },

            history: {
                title: "Nuestra historia",
                stage1: {
                    title: "1900 – Los inicios",
                    text: "La bodega fue fundada como un proyecto familiar, con viñedos cultivados de forma tradicional.",
                },
                stage2: {
                    title: "1950 – Expansión",
                    text: "La segunda generación amplió la producción y llevó nuestros vinos a nuevos mercados.",
                },
                stage3: {
                    title: "2000 – Innovación",
                    text: "Combinamos técnicas modernas con la tradición para crear vinos de alta calidad.",
                },
            },
        },
    },
    ca: {
        translation: {
            nav: {
                home: "Inici",
                history: "Història",
                pricing: "Preus",
                contact: "Contacte",
            },
            hero: {
                title: "Château Picard",
                subtitle:
                    "Vins amb un llegat estel·lar, fet amb tradició familiar des del 2234.",
                button: "Descobrir els nostres vins",
            },
            home: {
                title: "La nostra filosofia",
                subtitle:
                    "Cuidamos cada detalle del proceso de elaboración del vino.",
                featuredTitle: "Vins destacats",
            },
            contact: {
                title: "Contacte",
                name: "Nom",
                email: "Correu electrònic",
                message: "Missatge",
                send: "Enviar missatge",
                success: "Missatge enviat correctament.",
            },
        },
    },
    en: {
        translation: {
            nav: {
                home: "Home",
                history: "Our History",
                pricing: "Pricing",
                contact: "Contact",
            },
            hero: {
                title: "Château Picard",
                subtitle:
                    "Wines with a stellar legacy, made with family tradition since 2234.",
                button: "Discover our wines",
            },
            home: {
                title: "Our philosophy",
                subtitle:
                    "We take care of every detail of the winemaking process.",
                featuredTitle: "Featured wines",
            },
            contact: {
                title: "Contact",
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send message",
                success: "Message sent successfully.",
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
