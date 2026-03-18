export const ROUTES = {
    home: "/",
    about: "/about",
    contact: "/contact-us",
    treatments: {
        aba: "/treatments/ABA",
        caa: "/treatments/CAA",
        prompt: "/treatments/PROMPT",
        team: "/treatments/Equipe_Multidisciplinar"
    }
} as const;

export const LEGACY_ROUTES = {
    contactUppercase: "/Contact-us"
} as const;

export const SECTION_IDS = {
    clinicInfo: "clinica-info",
    services: "lista-servicos",
    testimonials: "avaliacoes"
} as const;

export const CONTACT = {
    phoneDisplay: "(61) 8540-1978",
    whatsappUrl: "https://wa.me/6185401978",
    email: "clinicasensorytea@gmail.com",
    address: "St. D Sul QSD 05 CL Spazio Duo Sala 501 - Taguatinga, Brasilia - DF"
} as const;

export const LINKS = {
    googleMaps: "https://www.google.com/maps?ll=-15.840887,-48.047022&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4118327637672282773",
    instagram: "https://www.instagram.com/clinicasensorytea",
    developerPortfolio: "https://portifolio-taupe-beta.vercel.app/"
} as const;

export const NAV_LINKS = [
    { label: "Home", to: ROUTES.home },
    { label: "Sobre", to: ROUTES.about },
    { label: "Contate-nos", to: ROUTES.contact }
] as const;
