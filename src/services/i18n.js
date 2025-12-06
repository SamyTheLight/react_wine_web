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
