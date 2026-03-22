import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportReveal } from "../animations/variants";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { ExternalLinkButton } from "../components/ExternalLinkButton";
import { CONTACT } from "../constants/site";

export function ContactPage() {
    return (
        <div className="bg-gray-50">
            <AppHeader />
            <motion.main
                className="mx-auto max-w-6xl py-10 mt-20"
                variants={staggerContainer(0.12)}
                initial="hidden"
                whileInView="show"
                viewport={viewportReveal}
            >
                <motion.h1 variants={fadeUp} className="text-3xl font-bold text-[var(--dark-blue)] md:text-4xl">
                    Contato
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-4 text-black/80 md:text-lg">
                    Entre em contato para agendar uma avaliacao, tirar duvidas sobre terapias e conhecer nossa estrutura.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">
                    <div>
                        <h2 className="text-xl font-semibold text-[var(--blue)]">WhatsApp</h2>
                        <ExternalLinkButton href={CONTACT.whatsappUrl} className="mt-2 block hover:underline">
                            {CONTACT.phoneDisplay}
                        </ExternalLinkButton>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-[var(--blue)]">E-mail</h2>
                        <a href={`mailto:${CONTACT.email}`} className="mt-2 block hover:underline">
                            {CONTACT.email}
                        </a>
                    </div>

                    <div className="md:col-span-2">
                        <h2 className="text-xl font-semibold text-[var(--blue)]">Endereco</h2>
                        <p className="mt-2 text-black/80">{CONTACT.address}</p>
                    </div>
                </motion.div>

                <motion.iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.298770883089!2d-48.04702199999999!3d-15.8408869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3370522b5b61%3A0x39273d2aa8214a95!2sCl%C3%ADnica%20Sensory%20multidisciplinar!5e0!3m2!1spt-BR!2sbr!4v1755881223412!5m2!1spt-BR!2sbr"
                    title="Localizacao Clinica Sensory"
                    className="mt-8 h-96 w-full rounded-md bg-gray-100"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    variants={fadeUp}
                />
            </motion.main>
            <AppFooter />
        </div>
    );
}
