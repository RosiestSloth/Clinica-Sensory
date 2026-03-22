import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportReveal } from "../animations/variants";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { Separador } from "../components/Separador";

export function AboutPage() {
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
                    Sobre a Clinica Sensory
                </motion.h1>
                <Separador className="relative my-6" />
                <motion.div variants={fadeUp} className="space-y-4 pt-4 text-justify text-black/80 md:text-lg">
                    <motion.p variants={fadeUp}>
                        A Clinica Sensory nasceu com o compromisso de oferecer atendimento terapautico humanizado para criancas, adolescentes e familias,
                        com foco no desenvolvimento integral e na autonomia.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        Nossa equipe atua de forma multidisciplinar, com alinhamento entre especialistas e planos individualizados baseados em evidencia cientifica.
                        Cada estrategia considera a singularidade de cada paciente e o contexto real de sua rotina.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        Trabalhamos com acolhimento, transparencia e parceria com os responsaveis para que cada conquista seja sustentavel e celebrada.
                    </motion.p>
                </motion.div>
            </motion.main>
            <AppFooter />
        </div>
    );
}
