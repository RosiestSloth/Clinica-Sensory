import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, softScaleIn, staggerContainer, viewportReveal } from "../animations/variants";
import { AbaCards } from "../components/AbaCards";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { Cards } from "../components/Cards";
import { Comments } from "../components/Comments";
import { Convenios } from "../components/Convenios";
import { ExternalLinkButton } from "../components/ExternalLinkButton";
import { ImageCarousel } from "../components/ImageCarousel";
import { Separador } from "../components/Separador";
import { LINKS, ROUTES, SECTION_IDS, CONTACT } from "../constants/site";

const heroBenefits = [
    {
        id: "Primeiro",
        title: "Atendimento Personalizado",
        image: "/img/coracao-TEA.png",
        imageAlt: "Foto coração com o símbolo TEA",
        containerClass: "bg-[var(--clear-pink)]",
        items: [
            "Abordagem individualizada para cada criança.",
            "Planos terapêuticos adaptados às necessidades específicas."
        ]
    },
    {
        id: "Segundo",
        title: "Apoio à Família",
        image: "/img/quebracabecas-TEA.png",
        imageAlt: "Foto quebra-cabeça TEA",
        containerClass: "bg-[var(--blue)]",
        items: [
            "Treinamentos e orientações semanais para pais e responsáveis.",
            "Construção conjunta da autonomia da criança."
        ]
    },
    {
        id: "Terceiro",
        title: "Desenvolvimento Integral",
        image: "/img/laco-TEA.png",
        imageAlt: "Laço TEA",
        containerClass: "bg-[var(--pink)]",
        items: [
            "Trabalho em múltiplas áreas: comunicação e socialização.",
            "Resultados comprovados com equipe transdisciplinar."
        ]
    }
] as const;


const services = [
    { name: "Terapia ABA", icon: "🧩" },
    { name: "Psicopedagogia", icon: "📖" },
    { name: "Fonoaudiologia", icon: "🗣️" },
    { name: "Psicomotricidade", icon: "🤸" },
    { name: "Psicologia", icon: "💬" },
    { name: "Musicoterapia", icon: "🎵" },
    { name: "Terapia Ocupacional", icon: "🙌" },
    { name: "Integração Sensorial", icon: "🌀" },
];

const stats = [
    { value: "8+", label: "especialidades" },
    { value: "100%", label: "personalizado" },
    { value: "∞", label: "acolhimento" },
];

export function HomePage() {
    const sectionMotionProps = {
        variants: fadeUp,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: viewportReveal
    };

    return (
        <div className="overflow-hidden bg-gray-50">
            <AppHeader />
            <main className="mt-20">
                <motion.section className="relative h-full overflow-hidden pb-20 px-5 py-10 md:py-20 md:px-10 xl:px-20" {...sectionMotionProps}>
                    <img className="absolute left-0 top-0 z-0 h-full w-full object-cover blur-[4px]" src="/img/backgrounds/BG - Clinica Sensory.png" />
                    <div className="absolute inset-0 bg-black/20" />

                    <div className="relative z-20 flex h-full w-full flex-col items-center justify-between pt-10 lg:flex-row">

                        <motion.div variants={softScaleIn} className="flex size-1/2 max-w-130 rounded-xl shadow-xl bg-gray-50 flex-col items-center justify-center p-8 border-2 border-[var(--dark-blue)]">
                            <motion.img variants={softScaleIn} alt="Sensys" src="/img/backgrounds/Sensys.png" className="mb-4  object-contain h-full rounded-full" />
                            <motion.h1 variants={fadeUp} className="brand-title w-full md:w-auto inline-block rounded-3xl bg-[var(--baby-green)] px-8 py-2 text-center text-3xl font-bold text-[var(--baby-blue)]">
                                <span className="block text-xl leading-6 text-black">Clínica</span>
                                Sensory
                            </motion.h1>
                        </motion.div>

                        <motion.div
                            className="mt-10 flex w-full flex-col gap-4 p-4 lg:mt-10 lg:w-200"
                            variants={staggerContainer(0.1, 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportReveal}
                        >
                            {heroBenefits.map((benefit) => (
                                <motion.div variants={fadeUp} key={benefit.id} className={`flex gap-4 rounded-lg p-4 text-white ${benefit.containerClass}`} id={benefit.id}>
                                    <img src={benefit.image} className="h-20" alt={benefit.imageAlt} />
                                    <div>
                                        <h3 className="text-[1.1em] font-bold md:text-xl">{benefit.title}</h3>
                                        <ul className="list-inside list-disc text-[0.7em] sm:text-sm xl:text-lg">
                                            {benefit.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    id={SECTION_IDS.clinicInfo}
                    className="relative overflow-hidden bg-white px-5 py-16 md:px-10 md:py-24"
                    {...sectionMotionProps}
                >
                    <div
                        aria-hidden
                        className="z-0 pointer-events-none absolute -top-60 -right-60 size-120 rounded-full opacity-30"
                        style={{ background: "var(--baby-green)" }}
                    />

                    <div className="relative">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black/40 md:text-sm">
                            Quem somos
                        </p>
                        <h2
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
                        </h2>
                    </div>

                    <div className="my-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[var(--baby-green)]" />
                        <p className="text-sm font-medium text-black/70 md:text-base">
                            Atendimentos Terapêuticos Multidisciplinares e Humanizados
                        </p>
                    </div>

                    <div className="relative mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-16">
                        {/* Text content */}
                        <div className="flex flex-col gap-6">
                            {/* Pull quote */}
                            <blockquote className="border-l-4 border-[var(--baby-green)] pl-5">
                                <p className="text-xl font-semibold leading-snug text-black/80 md:text-2xl xl:text-3xl">
                                    "Mais que terapia: um acolhimento verdadeiro para cada criança."
                                </p>
                            </blockquote>

                            <div className="flex flex-col gap-4 text-sm leading-relaxed text-black/65 sm:text-base md:text-lg">
                                <p>
                                    A Clínica Sensory nasceu do desejo de oferecer mais que terapia — um
                                    acolhimento verdadeiro. Percebemos que muitas famílias buscavam apoio, mas
                                    encontravam atendimentos impessoais e pouco sensíveis às suas realidades.
                                </p>
                                <p>
                                    Aqui, cada criança é enxergada em sua individualidade. Trabalhamos com uma
                                    equipe multidisciplinar, com supervisão constante, para oferecer um
                                    atendimento eficaz, ético e respeitoso. Nossas intervenções são
                                    personalizadas e focadas em resultados reais.
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
                            </div>

                            <div className="mt-2 flex flex-wrap gap-4 sm:gap-6">
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

                        <div className="relative mx-auto h-[400px] w-full max-w-sm shrink-0 lg:h-[480px] lg:max-w-none">
                            <div className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[32px_8px_32px_8px] shadow-lg">
                                <img
                                    src="/img/criancas_brincando.png"
                                    className="h-full w-full object-cover"
                                    alt="Crianças brincando na Clínica Sensory"
                                />
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{ background: "var(--baby-blue)" }}
                                />
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
                                style={{
                                    background: "var(--baby-blue)",
                                    width: 80,
                                    height: 80,
                                }}
                            >
                                <span className="text-xs font-bold uppercase leading-tight tracking-wide text-white">
                                    Equipe
                                    <br />
                                    Unida
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-20 flex items-center gap-4">
                        <div className="h-px flex-1 bg-black/10" />
                        <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[var(--baby-green)]" />
                            <span className="h-2 w-2 rounded-full bg-[var(--baby-blue)] opacity-60" />
                            <span className="h-2 w-2 rounded-full bg-[var(--baby-green)] opacity-40" />
                        </div>
                        <div className="h-px flex-1 bg-black/10" />
                    </div>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-16">
                        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                            <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                                <img
                                    src="/img/Paciente_em_Atendimento.png"
                                    className="h-full w-full object-cover"
                                    alt="Paciente em atendimento na Clínica Sensory"
                                    style={{ aspectRatio: "4/3" }}
                                />
                                <div
                                    className="absolute inset-0 opacity-15"
                                    style={{ background: "var(--baby-green)" }}
                                />
                            </div>

                            <div
                                className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-lg md:-bottom-6 md:-right-6"
                                style={{ background: "white", border: "2px solid var(--baby-green)" }}
                            >
                                <img
                                    src="/img/laco-TEA.png"
                                    className="h-10 w-10 object-contain"
                                    alt="Laço TEA"
                                />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-black/40">
                                        Apoio
                                    </p>
                                    <p className="text-sm font-semibold text-black/80">TEA & Inclusão</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                                Nossos serviços
                            </p>

                            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {services.map((servico, i) => (
                                    <motion.li
                                        key={servico.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.4 }}
                                        className="group flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors duration-200"
                                        style={{ background: "var(--baby-green)", opacity: 0.85 }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.background =
                                                "var(--baby-blue)";
                                            const span = e.currentTarget.querySelector("span:last-child");
                                            if (span) (span as HTMLElement).style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.background =
                                                "var(--baby-green)";
                                            (e.currentTarget as HTMLElement).style.opacity = "0.85";
                                            const span = e.currentTarget.querySelector("span:last-child");
                                            if (span) (span as HTMLElement).style.color = "";
                                        }}
                                    >
                                        <span className="text-lg" aria-hidden="true">
                                            {servico.icon}
                                        </span>
                                        <span className="text-sm font-semibold text-black/75 transition-colors sm:text-base">
                                            {servico.name}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <p className="mt-6 text-sm text-black/40">
                                Cada atendimento é planejado individualmente para o desenvolvimento
                                integral da criança.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <section id={SECTION_IDS.testimonials} className="md:mt-10 relative bg-linear-to-b from-[#36A8FF] via-[#206599] to-[#36A8FE] p-5 text-white md:p-10">
                    <div className="pictures-y absolute inset-0 z-10 h-full w-full" />
                    <motion.div {...sectionMotionProps} className="relative z-20">
                        <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">Avaliações de alguns de nossos clientes</h2>
                        <Separador className="relative my-5" />
                        <p className="mt-4 text-justify text-sm sm:text-md md:text-lg xl:text-xl">Acreditamos que cada conquista deve ser celebrada.</p>
                        <p className="text-justify text-sm sm:text-md md:text-lg xl:text-xl">
                            Veja alguns depoimentos de pais e responsáveis que acompanham de perto o desenvolvimento de suas crianças conosco.
                        </p>
                        <Comments />
                        <Separador className="right-0 mt-6" />

                        <div className="relative mt-14">
                            <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">Onde você pode nos encontrar?</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.298770883089!2d-48.04702199999999!3d-15.8408869!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3370522b5b61%3A0x39273d2aa8214a95!2sCl%C3%ADnica%20Sensory%20multidisciplinar!5e0!3m2!1spt-BR!2sbr!4v1755881223412!5m2!1spt-BR!2sbr"
                                title="Localização Clínica Sensory"
                                className="mt-6 h-100 w-full rounded-md bg-gray-100"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            <p className="mt-5 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
                                Endereço: St. D Sul QSD 05 CL ed.Spazio Duo Sala 501 - Taguatinga, Brasília - DF, 72020-111
                            </p>

                            <div className="flex justify-between lg:justify-center lg:gap-10">
                                <ExternalLinkButton
                                    href={CONTACT.whatsappUrl}
                                    className="mt-4 flex w-36 flex-row items-center justify-center gap-4 rounded-md border border-white bg-[#47C557] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#2A7633] md:w-42 md:px-6 md:py-2 md:text-md"
                                    iconSrc="/svg/WhatsApp.svg"
                                    iconAlt="WhatsApp"
                                    iconClassName="size-6"
                                >
                                    WhatsApp
                                </ExternalLinkButton>

                                <ExternalLinkButton
                                    href={LINKS.googleMaps}
                                    className="mt-4 flex w-38 flex-row items-center justify-center gap-4 rounded-md border border-white bg-[#4285F4] px-1 py-1 text-sm font-bold text-white transition hover:bg-[#16548F] md:w-50 md:px-4 md:py-2 md:text-md"
                                    iconSrc="/svg/GoogleMaps.svg"
                                    iconAlt="Google Maps"
                                    iconClassName="size-8"
                                >
                                    Google Maps
                                </ExternalLinkButton>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <motion.section id={SECTION_IDS.services} className="relative flex" {...sectionMotionProps}>
                    <motion.div
                        className="absolute top-0 lg:top-20 z-10 size-40 rotate-45 bg-[var(--red)] lg:size-50"
                        animate={{ right: ["-150px", "-100px"] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute top-20 md:top-40 lg:top-60 z-10 size-40 rotate-45 bg-[var(--green)] lg:size-50"
                        animate={{ left: ["-150px", "-100px"] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute top-80 md:top-100 lg:top-120 z-10 size-40 rotate-45 bg-[var(--pink)]"
                        animate={{ right: ["-150px", "-100px"] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute top-120 md:top-140 lg:top-160 z-10 size-40 rotate-45 bg-[var(--red)] lg:size-50"
                        animate={{ left: ["-150px", "-100px"] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute top-180 md:top-200 lg:top-220 z-10 size-40 rotate-45 bg-[var(--clear-pink)] lg:size-50"
                        animate={{ right: ["-150px", "-100px"] }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />

                    <div className="z-20 p-5 md:p-10">
                        <h2 className="text-sm text-[var(--green)] md:text-md xl:text-lg">MÉTODO INTERAÇÃO</h2>
                        <p className="text-xl font-semibold md:text-2xl xl:text-3xl">Valorizamos o jeito único de cada criança se expressar e se desenvolver</p>

                        <div className="mx-auto">
                            <Cards />
                        </div>
                    </div>
                </motion.section>

                <motion.section className="relative px-5 md:px-10" {...sectionMotionProps}>
                    <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl xl:text-3xl">Convênios Aceitos pela Clínica Sensory</h2>
                    <div className="w-full border-y-black">
                        <Convenios />
                    </div>
                </motion.section>

                <motion.section className="relative" {...sectionMotionProps}>
                    <div className="absolute left-[-10px] top-0 z-[1] h-40 w-[calc(100%+theme(spacing.5))] rotate-5 bg-[var(--clear-blue)] md:top-0 md:h-30 md:rotate-5" />
                    <div className="absolute left-[-20px] top-50 z-[2] h-90 w-[150%] rotate-175 bg-[var(--baby-blue)] md:top-20 md:h-70" />
                    <div className="absolute left-[-10px] top-150 z-[3] mt-4 h-40 w-[calc(100%+theme(spacing.5))] rotate-5 bg-[var(--pink)] md:top-90 md:h-30 md:rotate-2" />

                    <div className="relative z-[4] mx-auto my-20 max-w-400 px-5 md:px-10">
                        <p className="text-[var(--blue)]">Mais do que tratar, buscamos compreender e acompanhar cada etapa do desenvolvimento do seu filho.</p>
                        <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">Benefícios da Terapia ABA</h2>
                        <Separador className="relative my-5" />
                        <AbaCards />

                        <motion.div variants={softScaleIn}>
                            <Link
                                to={ROUTES.treatments.aba}
                                className="mx-auto mt-4 flex h-14 w-50 flex-row items-center justify-center gap-4 rounded-md border border-white bg-[var(--blue)] px-2 py-2 text-md font-bold text-white transition hover:bg-[var(--dark-blue)] md:w-60 md:px-6 md:py-2 md:text-lg"
                            >
                                Saiba mais <img src="/svg/Arrow-up-Right.svg" alt="Saiba mais" className="size-8" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section className="relative" {...sectionMotionProps}>
                    <ImageCarousel className="mx-5 md:mx-10" />

                    <div className="relative mt-10 flex h-60 flex-col md:flex-row overflow-hidden">
                        <img className="absolute left-0 top-0 z-0 h-full w-full object-cover lg:w-1/2" src="/img/backgrounds/BG_TEA.png" />
                        <h2 className="z-10 h-40 w-full md:w-1/2 content-center px-5 md:px-10 bg-black/40 text-xl font-bold text-white md:h-24 md:text-2xl">
                            Criando caminhos para um desenvolvimento excepcional.
                        </h2>
                        <div className="z-10 w-full md:w-1/2 bg-[var(--secondary-blue-dark)] p-4 text-white md:p-8">
                            <ul className="h-full list-inside list-image-[url(/svg/Check.svg)] text-sm md:text-xl">
                                <li className="h-1/2 md:h-1/4 px-4 content-center bg-[var(--dark-blue)] font-bold">Cuidado Integral e Humanizado</li>
                                <li className="h-1/2 md:h-1/4 px-4 content-center bg-[var(--blue)] font-bold">Desenvolvimento Contínuo</li>
                                <li className="h-1/2 md:h-1/4 px-4 content-center bg-[var(--dark-blue)] font-bold">Foco na Felicidade e Autonomia</li>
                                <li className="h-1/2 md:h-1/4 px-4 content-center bg-[var(--blue)] font-bold">Apoio que Abraça a Família</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <section
                    className="relative h-120 bg-[url('/img/backgrounds/background-1.webp')] bg-cover bg-center px-5 py-10 md:h-130 md:px-10 md:pt-14 lg:h-150 xl:px-20 xl:pt-20"
                >
                    <div className="absolute inset-0 z-10 h-full w-full bg-black/50" />

                    <motion.div
                        {...sectionMotionProps}
                        className="relative z-20 flex h-full flex-col justify-center">
                        <h1 className="mb-4 text-sm font-bold tracking-widest text-[var(--baby-green)] md:text-xl">CLÍNICA SENSORY</h1>
                        <p className="exception z-20 text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl xl:text-6xl">
                            Transforme desafios em conquistas: o desenvolvimento do seu filho começa aqui.
                        </p>
                        <Separador className="relative mt-2" />
                        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-200 md:text-xl">
                            Agende uma avaliação e descubra o poder de uma equipe multidisciplinar apaixonada pelo que faz.
                        </p>

                        <ExternalLinkButton
                            href={CONTACT.whatsappUrl}
                            className="mt-8 flex w-auto flex-row items-center justify-center gap-3 rounded-full border-2 border-white bg-[#47C557] px-8 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(71,197,87,0.5)] transition-all duration-300 hover:scale-105 hover:bg-[#2A7633] sm:w-fit md:text-lg"
                            iconSrc="/svg/WhatsApp.svg"
                            iconAlt="WhatsApp"
                            iconClassName="size-6 md:size-7"
                        >
                            Quero Agendar Agora
                        </ExternalLinkButton>
                    </motion.div>
                </section>
            </main>

            <AppFooter />
        </div>
    );
}
