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
                heroTitle: "Si tienes cualquier duda, rellena este formulario",
                subtitle: "Vinos de tradición estelar",
                name: "Nombre",
                email: "Correo electrónico",
                message: "Mensaje",
                send: "Enviar mensaje",
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
            pricing: {
                title: "Nuestros precios",
                button: "Más información",
                basic: {
                    title: "Vino Básico",
                    price: "12€",
                    description:
                        "Un vino joven, fresco y perfecto para el día a día.",
                },
                premium: {
                    title: "Vino Premium",
                    price: "25€",
                    description:
                        "Seleccionado de viñedos especiales con mayor crianza.",
                },
                reserve: {
                    title: "Gran Reserva",
                    price: "45€",
                    description:
                        "Nuestro vino más exclusivo, elaborado con uvas seleccionadas.",
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
                heroTitle: "Si teniu cap pregunta, empleneu aquest formulari",
                subtitle: "Vins amb tradició estel·lar",
                name: "Nom",
                email: "Correu electrònic",
                message: "Missatge",
                send: "Enviar missatge",
            },
            history: {
                title: "La nostra història",
                stage1: {
                    title: "1900 – Els inicis",
                    text: "El celler va ser fundat com un projecte familiar, amb vinyes cultivades de manera tradicional.",
                },
                stage2: {
                    title: "1950 – Expansió",
                    text: "La segona generació va ampliar la producció i va portar els nostres vins a nous mercats.",
                },
                stage3: {
                    title: "2000 – Innovació",
                    text: "Combinem tècniques modernes amb la tradició per crear vins d'alta qualitat.",
                },
            },
            pricing: {
                title: "Els nostres preus",
                button: "Més informació",
                basic: {
                    title: "Vi Bàsic",
                    price: "12€",
                    description:
                        "Un vi jove, fresc i perfecte per al dia a dia.",
                },
                premium: {
                    title: "Vi Premium",
                    price: "25€",
                    description:
                        "Seleccionat de vinyes especials amb més criança.",
                },
                reserve: {
                    title: "Gran Reserva",
                    price: "45€",
                    description:
                        "El nostre vi més exclusiu, elaborat amb raïm seleccionat.",
                },
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
                heroTitle: "If you have any questions, fill out this form",
                subtitle: "Wines with stellar tradition",
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send message",
            },
            history: {
                title: "Our history",
                stage1: {
                    title: "1900 – Beginnings",
                    text: "The winery was founded as a family project, with vineyards cultivated using traditional methods.",
                },
                stage2: {
                    title: "1950 – Expansion",
                    text: "The second generation expanded production and brought our wines to new markets.",
                },
                stage3: {
                    title: "2000 – Innovation",
                    text: "We combine modern techniques with tradition to create high-quality wines.",
                },
            },
            pricing: {
                title: "Our pricing",
                button: "More information",
                basic: {
                    title: "Basic Wine",
                    price: "€12",
                    description:
                        "A young and fresh wine, perfect for everyday enjoyment.",
                },
                premium: {
                    title: "Premium Wine",
                    price: "€25",
                    description:
                        "Selected from special vineyards with longer aging.",
                },
                reserve: {
                    title: "Grand Reserve",
                    price: "€45",
                    description:
                        "Our most exclusive wine, made from selected grapes.",
                },
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
