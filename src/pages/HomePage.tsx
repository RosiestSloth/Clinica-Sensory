import { Link } from "react-router-dom";
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
        imageAlt: "Foto coracao com o simbolo TEA",
        containerClass: "bg-[var(--clear-pink)]",
        items: [
            "Abordagem individualizada para cada crianca.",
            "Planos terapeuticos adaptados as necessidades especificas."
        ]
    },
    {
        id: "Segundo",
        title: "Apoio a Familia",
        image: "/img/quebracabecas-TEA.png",
        imageAlt: "Foto quebra cabeca TEA",
        containerClass: "bg-[var(--blue)]",
        items: [
            "Treinamentos e orientacoes semanais para pais e responsaveis.",
            "Construcao conjunta da autonomia da crianca."
        ]
    },
    {
        id: "Terceiro",
        title: "Desenvolvimento Integral",
        image: "/img/laco-TEA.png",
        imageAlt: "Laco TEA",
        containerClass: "bg-[var(--pink)]",
        items: [
            "Trabalho em multiplas areas: comunicacao e socializacao.",
            "Resultados comprovados com equipe transdisciplinar."
        ]
    }
] as const;

export function HomePage() {
    return (
        <div className="overflow-hidden bg-gray-50">
            <AppHeader />
            <main>
                <section className="relative h-full overflow-hidden pb-20">
                    <img className="absolute left-0 top-0 z-0 h-full w-full object-cover blur-[4px]" src="/img/backgrounds/BG - Clinica Sensory.png" />
                    <div className="absolute h-full w-full bg-black/20" />

                    <div className="relative z-20 flex h-full w-full flex-col items-center pt-10 lg:flex-row">
                        <div className="flex w-1/2 flex-col items-center justify-center p-4">
                            <img alt="Sensys" src="/img/backgrounds/Sensys.png" className="mb-4 h-auto w-100 max-w-150 object-contain lg:w-full" />
                            <h1 className="brand-title inline-block rounded-3xl bg-[var(--baby-green)] px-8 py-2 text-center text-3xl font-bold text-[var(--baby-blue)]">
                                <span className="block text-xl leading-6 text-black">Clinica</span>
                                Sensory
                            </h1>
                        </div>

                        <div className="mt-10 flex w-full flex-col gap-4 p-4 lg:mt-10 lg:w-1/2">
                            {heroBenefits.map((benefit) => (
                                <div key={benefit.id} className={`flex gap-4 rounded-lg p-4 text-white ${benefit.containerClass}`} id={benefit.id}>
                                    <img src={benefit.image} className="h-20" alt={benefit.imageAlt} />
                                    <div>
                                        <h3 className="text-[1.1em] font-bold md:text-xl">{benefit.title}</h3>
                                        <ul className="list-inside list-disc text-[0.7em] sm:text-sm xl:text-lg">
                                            {benefit.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id={SECTION_IDS.clinicInfo} className="relative mx-auto max-w-400 px-5 py-10 md:px-10 xl:px-20">
                    <div className="flex-2">
                        <h2 className="brand-title w-full bg-[var(--baby-green)] p-4 text-xl font-bold text-[var(--baby-blue)] md:text-3xl xl:text-4xl">
                            Clinica Sensory Multidisciplinar
                        </h2>
                        <h3 className="text-xl font-semibold md:text-2xl xl:text-3xl">Atendimentos Terapeuticos Multidisciplinares e Humanizados</h3>
                    </div>

                    <div className="mt-2 flex h-full flex-col gap-4 lg:flex-row">
                        <Separador />
                        <div id="images" className="mt-5 flex h-50 flex-1 items-center gap-6 pt-5 lg:flex-col">
                            <img src="/img/img_criancas.png" className="h-full w-1/2 object-contain md:w-full" alt="Criancas sorrindo" />
                            <img
                                src="/img/criancas_brincando.png"
                                className="h-full w-1/2 rounded-[20px_0px_20px_0px] object-cover md:w-full"
                                alt="Criancas brincando na Clinica Sensory"
                            />
                        </div>

                        <div className="mt-5 flex flex-2 flex-col gap-3 text-justify text-sm text-black/90 sm:text-md md:text-lg xl:text-xl">
                            <p>
                                A Clinica Sensory nasceu do desejo de oferecer mais que terapia: acolhimento verdadeiro. Aqui, cada crianca e enxergada em sua
                                individualidade com plano personalizado.
                            </p>
                            <p>
                                Trabalhamos com equipe multidisciplinar e supervisao constante para oferecer atendimento eficaz, etico e respeitoso.
                            </p>
                            <p>
                                Oferecemos atendimentos individuais e em grupo com foco no desenvolvimento integral motor, emocional, cognitivo e social.
                            </p>
                            <p>Nosso espaco e seguro, ludico e planejado com carinho, em ambiente receptivo e profissionais apaixonados pelo que fazem.</p>
                        </div>
                    </div>

                    <Separador className="relative my-10 ml-auto" />
                </section>

                <section id={SECTION_IDS.testimonials} className="relative bg-linear-to-b from-[#36A8FF] via-[#206599] to-[#36A8FE] p-5 text-white md:p-10">
                    <div className="pictures-y absolute inset-0 z-10 h-full w-full" />
                    <div className="relative z-20">
                        <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">Avaliacoes de alguns de nossos clientes</h2>
                        <Separador className="relative my-5" />
                        <p className="mt-4 text-justify text-sm sm:text-md md:text-lg xl:text-xl">Acreditamos que cada conquista deve ser celebrada.</p>
                        <p className="text-justify text-sm sm:text-md md:text-lg xl:text-xl">
                            Veja alguns depoimentos de pais e responsaveis que acompanham de perto o desenvolvimento de suas criancas conosco.
                        </p>
                        <Comments />
                        <Separador className="right-0 mt-6" />

                        <div className="relative mt-14">
                            <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">Onde voce pode nos encontrar?</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.298770883089!2d-48.04702199999999!3d-15.8408869!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3370522b5b61%3A0x39273d2aa8214a95!2sCl%C3%ADnica%20Sensory%20multidisciplinar!5e0!3m2!1spt-BR!2sbr!4v1755881223412!5m2!1spt-BR!2sbr"
                                title="Localizacao Clinica Sensory"
                                className="mt-6 h-100 w-full rounded-md bg-gray-100"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            <p className="mt-5 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
                                Endereco: St. D Sul QSD 05 CL ed.Spazio Duo Sala 501 - Taguatinga, Brasilia - DF, 72020-111
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
                    </div>
                </section>

                <section id={SECTION_IDS.services} className="relative flex">
                    <div className="absolute top-30 z-10 size-40 rotate-45 bg-[var(--green)] animate-[var(--animation-left-mobile)] lg:size-50" />
                    <div className="absolute top-70 z-10 size-40 rotate-45 bg-[var(--clear-pink)] animate-[var(--animation-right-mobile)] lg:size-50 lg:animate-[var(--animation-right-desktop)]" />
                    <div className="absolute top-120 z-10 size-40 rotate-45 bg-[var(--red)] animate-[var(--animation-left-mobile)] lg:size-50" />
                    <div className="absolute top-150 z-10 size-40 rotate-45 bg-[var(--pink)] animate-[var(--animation-right-mobile)] lg:size-50 lg:animate-[var(--animation-right-desktop)]" />

                    <div className="z-20 p-5 md:p-10">
                        <h2 className="text-sm text-[var(--green)] md:text-md xl:text-lg">METODO INTERACAO</h2>
                        <p className="text-xl font-semibold md:text-2xl xl:text-3xl">Valorizamos o jeito unico de cada crianca se expressar e se desenvolver</p>

                        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
                            <Cards />
                        </div>
                    </div>
                </section>

                <section className="relative px-5 md:px-10">
                    <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl xl:text-3xl">Convenios Aceitos pela Clinica Sensory</h2>
                    <div className="w-full border-y-black">
                        <Convenios />
                    </div>
                </section>

                <section className="relative">
                    <div className="absolute left-[-10px] top-0 z-[1] h-40 w-[calc(100%+theme(spacing.5))] rotate-5 bg-[var(--clear-blue)] md:top-0 md:h-30 md:rotate-5" />
                    <div className="absolute left-[-20px] top-50 z-[2] h-90 w-[150%] rotate-175 bg-[var(--baby-blue)] md:top-20 md:h-70" />
                    <div className="absolute left-[-10px] top-150 z-[3] mt-4 h-40 w-[calc(100%+theme(spacing.5))] rotate-5 bg-[var(--pink)] md:top-90 md:h-30 md:rotate-2" />

                    <div className="relative z-[4] mx-auto my-20 max-w-400 px-5 md:px-10">
                        <p className="text-[var(--blue)]">Mais do que tratar, buscamos compreender e acompanhar cada etapa do desenvolvimento do seu filho.</p>
                        <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">Beneficios da Terapia ABA</h2>
                        <Separador className="relative my-5" />
                        <AbaCards />

                        <Link
                            to={ROUTES.treatments.aba}
                            className="mx-auto mt-4 flex h-14 w-50 flex-row items-center justify-center gap-4 rounded-md border border-white bg-[var(--blue)] px-2 py-2 text-md font-bold text-white transition hover:bg-[var(--dark-blue)] md:w-60 md:px-6 md:py-2 md:text-lg"
                        >
                            Saiba mais <img src="/svg/Arrow-up-Right.svg" alt="Saiba mais" className="size-8" />
                        </Link>
                    </div>
                </section>

                <section className="relative">
                    <ImageCarousel className="mx-5 md:mx-10" />

                    <div className="relative mt-10 flex h-60 flex-row overflow-hidden">
                        <img className="absolute left-0 top-0 z-0 h-full w-full object-cover lg:w-1/2" src="/img/backgrounds/BG_TEA.png" />
                        <h2 className="z-10 h-40 w-1/2 content-center bg-black/40 p-2 text-xl font-bold text-white md:h-24 md:text-2xl">
                            Criando caminhos para um desenvolvimento excepcional.
                        </h2>
                        <div className="z-10 w-1/2 bg-[var(--secondary-blue-dark)] p-4 text-white md:p-8">
                            <ul className="h-full list-inside list-image-[url(/svg/Check.svg)] text-sm md:text-xl">
                                <li className="h-1/4 content-center bg-[var(--dark-blue)] font-bold">Cuidado Integral e Humanizado</li>
                                <li className="h-1/4 content-center bg-[var(--blue)] font-bold">Desenvolvimento Continuo</li>
                                <li className="h-1/4 content-center bg-[var(--dark-blue)] font-bold">Foco na Felicidade e Autonomia</li>
                                <li className="h-1/4 content-center bg-[var(--blue)] font-bold">Apoio que Abraca a Familia</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="relative h-120 bg-[url('/img/backgrounds/background-1.webp')] bg-cover bg-center px-5 py-10 md:h-130 md:px-10 md:pt-14 lg:h-150 xl:px-20 xl:pt-20">
                    <div className="absolute inset-0 z-10 h-full w-full bg-black/50" />

                    <div className="relative z-20 flex h-full flex-col justify-center">
                        <h1 className="mb-4 text-sm font-bold tracking-widest text-[var(--baby-green)] md:text-xl">CLINICA SENSORY</h1>
                        <p className="exception z-20 text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl xl:text-6xl">
                            Transforme desafios em conquistas: o desenvolvimento do seu filho comeca aqui.
                        </p>
                        <Separador className="relative mt-2" />
                        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-200 md:text-xl">
                            Agende uma avaliacao e descubra o poder de uma equipe multidisciplinar apaixonada pelo que faz.
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
                    </div>
                </section>
            </main>

            <AppFooter />
        </div>
    );
}
