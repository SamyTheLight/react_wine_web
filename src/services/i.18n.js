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
            header: {
                title: "Bodega Montaña Negra",
                subtitle: "Vinos de alta calidad desde 1970",
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
            header: {
                title: "Celler Muntanya Negra",
                subtitle: "Vins d'alta qualitat des de 1970",
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
            header: {
                title: "Montaña Negra Winery",
                subtitle: "High quality wines since 1970",
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
