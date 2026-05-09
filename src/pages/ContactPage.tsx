import { motion } from "framer-motion";
import { fadeUp, softScaleIn, staggerContainer, viewportReveal } from "../animations/variants";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { ExternalLinkButton } from "../components/ExternalLinkButton";
import { Separador } from "../components/Separador";
import { CONTACT, LINKS } from "../constants/site";

const contactCards = [
    {
        label: "WhatsApp",
        description: "Atendimento rápido para agendamentos e dúvidas.",
        type: "whatsapp" as const,
    },
    {
        label: "E-mail",
        description: "Prefere escrever? Nos envie uma mensagem.",
        type: "email" as const,
    },
    {
        label: "Endereço",
        description: "Venha nos visitar. Nosso espaço é pensado para acolher.",
        type: "address" as const,
    },
];

function ContactCardAction({ type }: { type: "whatsapp" | "email" | "address" }) {
    if (type === "whatsapp") {
        return (
            <ExternalLinkButton
                href={CONTACT.whatsappUrl}
                className="mt-4 inline-flex items-center gap-3 rounded-full border-2 border-white bg-[#47C557] px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(71,197,87,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#2A7633]"
                iconSrc="/svg/WhatsApp.svg"
                iconAlt="WhatsApp"
                iconClassName="size-5"
            >
                {CONTACT.phoneDisplay}
            </ExternalLinkButton>
        );
    }

    if (type === "email") {
        return (
            <a
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--baby-blue)] px-6 py-2.5 text-sm font-bold text-[var(--baby-blue)] transition-all hover:bg-[var(--baby-blue)] hover:text-white"
            >
                {CONTACT.email}
            </a>
        );
    }

    return (
        <a
            href={LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--baby-green)] px-6 py-2.5 text-sm font-bold text-black/70 transition-all hover:bg-[var(--baby-green)]"
        >
            {CONTACT.address}
        </a>
    );
}

export function ContactPage() {
    const sectionMotionProps = {
        variants: fadeUp,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: viewportReveal,
    };

    return (
        <div className="overflow-hidden bg-gray-50">
            <AppHeader />

            {/* Hero */}
            <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-24">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full opacity-25 blur-3xl"
                    style={{ background: "var(--baby-green)" }}
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-full opacity-15 blur-3xl"
                    style={{ background: "var(--baby-blue)" }}
                />

                <motion.div
                    className="relative px-5 md:px-10"
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportReveal}
                >
                    <motion.p
                        variants={fadeUp}
                        className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black/40"
                    >
                        Fale conosco
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="brand-title relative inline-block text-3xl text-[var(--baby-blue)] md:text-5xl xl:text-6xl"
                        style={{ lineHeight: 1.1 }}
                    >
                        <span
                            className="relative z-10 px-2"
                            style={{
                                background: "var(--baby-green)",
                                boxDecorationBreak: "clone",
                                WebkitBoxDecorationBreak: "clone",
                            }}
                        >
                            Entre em contato
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={fadeUp}
                        className="my-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2"
                    >
                        <span className="h-2 w-2 rounded-full bg-[var(--baby-green)]" />
                        <p className="text-sm font-medium text-black/70 md:text-base">
                            Atendemos de segunda a sexta, das 8h às 18h
                        </p>
                    </motion.div>

                    <motion.blockquote variants={fadeUp} className="border-l-4 border-[var(--baby-green)] pl-5">
                        <p className="text-xl font-semibold leading-snug text-black/80 md:text-2xl">
                            "Agende uma avaliação e dê o primeiro passo para o desenvolvimento do seu filho."
                        </p>
                    </motion.blockquote>
                </motion.div>
            </section>

            {/* Cards de contato */}
            <motion.section className="bg-white px-5 pb-20 md:px-10" {...sectionMotionProps}>
                <div >
                    <motion.div
                        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
                        variants={staggerContainer(0.1, 0.05)}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportReveal}
                    >
                        {contactCards.map((card) => (
                            <motion.div
                                key={card.label}
                                variants={softScaleIn}
                                className="flex flex-col rounded-2xl border border-black/5 bg-gray-50 p-6 shadow-sm"
                            >
                                <p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                                    {card.label}
                                </p>
                                <p className="text-sm leading-relaxed text-black/60">{card.description}</p>
                                <ContactCardAction type={card.type} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Divisor */}
            <div className="mx-auto max-w-5xl px-5 md:px-10">
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-black/10" />
                    <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[var(--baby-green)]" />
                        <span className="h-2 w-2 rounded-full bg-[var(--baby-blue)] opacity-60" />
                        <span className="h-2 w-2 rounded-full bg-[var(--baby-green)] opacity-40" />
                    </div>
                    <div className="h-px flex-1 bg-black/10" />
                </div>
            </div>

            {/* Mapa */}
            <motion.section className="bg-white px-5 py-20 md:px-10" {...sectionMotionProps}>
                <div >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                        Localização
                    </p>
                    <h2 className="mb-2 text-xl font-semibold md:text-2xl xl:text-3xl">
                        Onde você pode nos encontrar
                    </h2>
                    <p className="mb-8 text-sm text-black/50 md:text-base">{CONTACT.address}</p>

                    <div
                        className="overflow-hidden rounded-2xl shadow-lg"
                        style={{ outline: "4px solid var(--baby-green)" }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.298770883089!2d-48.04702199999999!3d-15.8408869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3370522b5b61%3A0x39273d2aa8214a95!2sCl%C3%ADnica%20Sensory%20multidisciplinar!5e0!3m2!1spt-BR!2sbr!4v1755881223412!5m2!1spt-BR!2sbr"
                            title="Localização Clínica Sensory"
                            className="h-96 w-full bg-gray-100 md:h-[480px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <ExternalLinkButton
                            href={CONTACT.whatsappUrl}
                            className="inline-flex items-center gap-3 rounded-full border border-white bg-[#47C557] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#2A7633]"
                            iconSrc="/svg/WhatsApp.svg"
                            iconAlt="WhatsApp"
                            iconClassName="size-5"
                        >
                            WhatsApp
                        </ExternalLinkButton>
                        <ExternalLinkButton
                            href={LINKS.googleMaps}
                            className="inline-flex items-center gap-3 rounded-full border border-white bg-[#4285F4] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#16548F]"
                            iconSrc="/svg/GoogleMaps.svg"
                            iconAlt="Google Maps"
                            iconClassName="size-6"
                        >
                            Abrir no Maps
                        </ExternalLinkButton>
                    </div>
                </div>
            </motion.section>

            {/* CTA final */}
            <section className="relative overflow-hidden bg-[url('/img/backgrounds/background-1.webp')] bg-cover bg-center px-5 py-20 md:px-10 md:py-28">
                <div className="absolute inset-0 z-10 bg-black/50" />
                <motion.div
                    {...sectionMotionProps}
                    className="relative z-20 mx-auto flex max-w-3xl flex-col items-center text-center"
                >
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--baby-green)]">
                        Clínica Sensory
                    </p>
                    <h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-4xl xl:text-5xl">
                        Pronto para começar a jornada do seu filho?
                    </h2>
                    <Separador className="relative my-4" />
                    <p className="mb-8 max-w-xl text-base text-gray-200 md:text-lg">
                        Nossa equipe está pronta para acolher sua família e traçar o melhor caminho
                        para o desenvolvimento da sua criança.
                    </p>
                    <ExternalLinkButton
                        href={CONTACT.whatsappUrl}
                        className="inline-flex items-center gap-3 rounded-full border-2 border-white bg-[#47C557] px-8 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(71,197,87,0.5)] transition-all duration-300 hover:scale-105 hover:bg-[#2A7633] md:text-lg"
                        iconSrc="/svg/WhatsApp.svg"
                        iconAlt="WhatsApp"
                        iconClassName="size-6 md:size-7"
                    >
                        Quero Agendar Agora
                    </ExternalLinkButton>
                </motion.div>
            </section>

            <AppFooter />
        </div>
    );
}