import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportReveal } from "../animations/variants";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { ExternalLinkButton } from "../components/ExternalLinkButton";
import { Separador } from "../components/Separador";
import { CONTACT } from "../constants/site";

const stats = [
    { value: "8+", label: "especialidades" },
    { value: "100%", label: "personalizado" },
    { value: "∞", label: "acolhimento" },
];

const values = [
    { icon: "🤝", title: "Acolhimento", description: "Cada família é recebida com escuta ativa e respeito à sua realidade." },
    { icon: "🔬", title: "Evidência Científica", description: "Todas as intervenções são baseadas em protocolos validados e atualizados." },
    { icon: "👨‍👩‍👧", title: "Parceria com a Família", description: "Os responsáveis são parte essencial do processo terapêutico." },
    { icon: "🌱", title: "Desenvolvimento Integral", description: "Trabalhamos motor, emocional, cognitivo e social de forma integrada." },
];

const team = [
    { role: "Terapia ABA", icon: "🧩" },
    { role: "Psicopedagogia", icon: "📖" },
    { role: "Fonoaudiologia", icon: "🗣️" },
    { role: "Psicomotricidade", icon: "🤸" },
    { role: "Psicologia", icon: "💬" },
    { role: "Musicoterapia", icon: "🎵" },
    { role: "Terapia Ocupacional", icon: "🙌" },
    { role: "Integração Sensorial", icon: "🌀" },
];

export function AboutPage() {
    const sectionMotionProps = {
        variants: fadeUp,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: viewportReveal,
    };

    return (
        <div className="overflow-hidden bg-gray-50">
            <AppHeader />

            {/* Hero da página */}
            <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
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
                    className="relative mx-auto px-5 md:px-10"
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportReveal}
                >
                    <motion.p
                        variants={fadeUp}
                        className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black/40"
                    >
                        Quem somos
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
                            Clínica Sensory
                        </span>
                        <br />
                        <span className="pl-2 text-2xl font-normal text-black/60 md:text-3xl xl:text-4xl">
                            Multidisciplinar
                        </span>
                    </motion.h1>

                    <motion.div variants={fadeUp} className="my-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[var(--baby-green)]" />
                        <p className="text-sm font-medium text-black/70 md:text-base">
                            Atendimentos Terapêuticos Multidisciplinares e Humanizados
                        </p>
                    </motion.div>

                    <motion.blockquote variants={fadeUp} className="border-l-4 border-[var(--baby-green)] pl-5">
                        <p className="text-xl font-semibold leading-snug text-black/80 md:text-2xl xl:text-3xl">
                            "Mais que terapia: um acolhimento verdadeiro para cada criança."
                        </p>
                    </motion.blockquote>
                </motion.div>
            </section>

            {/* História + Imagens */}
            <motion.section
                className="relative bg-white px-5 pb-20 md:px-10"
                {...sectionMotionProps}
            >
                <div className="">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-16">
                        {/* Texto */}
                        <div className="flex flex-col gap-5 text-sm leading-relaxed text-black/65 sm:text-base md:text-lg">
                            <p>
                                A Clínica Sensory nasceu do desejo de oferecer mais que terapia — um
                                acolhimento verdadeiro. Percebemos que muitas famílias buscavam apoio, mas
                                encontravam atendimentos impessoais e pouco sensíveis às suas realidades.
                            </p>
                            <p>
                                Aqui, cada criança é enxergada em sua individualidade. Trabalhamos com uma
                                equipe multidisciplinar, com supervisão constante, para oferecer um
                                atendimento eficaz, ético e respeitoso.
                            </p>
                            <p>
                                Oferecemos atendimentos individuais e em grupo, sempre com foco no
                                desenvolvimento integral — motor, emocional, cognitivo e social.
                                Acreditamos que a família é parte essencial do processo terapêutico.
                            </p>
                            <p>
                                Nosso espaço é seguro, lúdico e planejado com carinho: salas amplas com
                                visores de vidro e profissionais apaixonados pelo que fazem.
                            </p>

                            {/* Stats */}
                            <div className="mt-2 flex flex-wrap gap-4">
                                {stats.map((s) => (
                                    <div
                                        key={s.label}
                                        className="flex flex-col items-start rounded-2xl px-5 py-4"
                                        style={{ background: "var(--baby-green)", opacity: 0.9 }}
                                    >
                                        <span className="brand-title text-3xl font-bold text-[var(--baby-blue)] md:text-4xl">
                                            {s.value}
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-widest text-black/50">
                                            {s.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Imagens sobrepostas — mesmo padrão da HomePage */}
                        <div className="relative mx-auto h-[400px] w-full shrink-0 lg:h-[480px]">
                            <div className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[32px_8px_32px_8px] shadow-lg">
                                <img
                                    src="/img/criancas_brincando.png"
                                    className="h-full w-full object-cover object-left"
                                    alt="Crianças brincando na Clínica Sensory"
                                />
                                <div className="absolute inset-0 opacity-10" style={{ background: "var(--baby-blue)" }} />
                            </div>
                            <div
                                className="absolute bottom-0 right-0 h-[62%] w-[60%] overflow-hidden rounded-[8px_32px_8px_32px] shadow-xl"
                                style={{ outline: "4px solid var(--baby-green)" }}
                            >
                                <img
                                    src="/img/img_criancas.png"
                                    className="h-full w-full object-contain"
                                    alt="Crianças sorrindo"
                                    style={{ background: "var(--baby-green)" }}
                                />
                            </div>
                            <div
                                className="absolute left-[55%] top-[40%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center shadow-xl"
                                style={{ background: "var(--baby-blue)", width: 80, height: 80 }}
                            >
                                <span className="text-xs font-bold uppercase leading-tight tracking-wide text-white">
                                    Equipe<br />Unida
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Divisor — mesmo padrão da HomePage */}
            <div className="px-5 md:px-10">
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

            {/* Valores */}
            <motion.section
                className="bg-white px-5 py-20 md:px-10"
                {...sectionMotionProps}
            >
                <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                        Nossa essência
                    </p>
                    <h2 className="mb-10 text-xl font-semibold md:text-2xl xl:text-3xl">
                        O que nos guia
                    </h2>

                    <motion.div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                        variants={staggerContainer(0.1, 0.05)}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportReveal}
                    >
                        {values.map((v) => (
                            <motion.div
                                key={v.title}
                                variants={fadeUp}
                                className="flex items-start gap-4 rounded-2xl p-5 transition-colors"
                                style={{ background: "var(--baby-green)", opacity: 0.9 }}
                            >
                                <span className="text-2xl" aria-hidden>{v.icon}</span>
                                <div>
                                    <h3 className="mb-1 font-bold text-black/80">{v.title}</h3>
                                    <p className="text-sm leading-relaxed text-black/60">{v.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Especialidades — mesmo padrão da lista de serviços */}
            <motion.section
                className="bg-gray-50 px-5 py-20 md:px-10"
                {...sectionMotionProps}
            >
                <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                        Nossos serviços
                    </p>
                    <h2 className="mb-10 text-xl font-semibold md:text-2xl xl:text-3xl">
                        Especialidades da clínica
                    </h2>

                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((item, i) => (
                            <motion.li
                                key={item.role}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors duration-200"
                                style={{ background: "var(--baby-green)", opacity: 0.85 }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--baby-blue)";
                                    const span = e.currentTarget.querySelector("span:last-child");
                                    if (span) (span as HTMLElement).style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--baby-green)";
                                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                                    const span = e.currentTarget.querySelector("span:last-child");
                                    if (span) (span as HTMLElement).style.color = "";
                                }}
                            >
                                <span className="text-lg" aria-hidden>{item.icon}</span>
                                <span className="text-sm font-semibold text-black/75 sm:text-base">{item.role}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.section>

            {/* CTA final — mesmo padrão da última section da HomePage */}
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
                        Agende uma avaliação e conheça nossa equipe multidisciplinar apaixonada pelo que faz.
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