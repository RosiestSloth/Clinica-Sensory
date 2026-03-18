import { Link } from "react-router-dom";
import { CONTACT, LINKS, ROUTES, SECTION_IDS } from "../constants/site";
import { ExternalLinkButton } from "./ExternalLinkButton";

export function AppFooter() {
    return (
        <footer className="relative overflow-hidden bg-white text-[var(--dark-blue)]">
            <div className="relative bg-gradient-to-r from-[#206FBD] via-[#36A8FF] to-[#FF89DD] px-6 py-10 text-white md:px-10">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
                    <div className="absolute bottom-0 right-4 h-28 w-28 rotate-12 bg-white/20 blur-xl" />
                </div>

                <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-xl space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">Clinica Sensory</p>
                        <h3 className="text-2xl font-bold md:text-3xl">Pronto para agendar a proxima conquista do seu filho?</h3>
                        <p className="text-sm text-white/90 md:text-base">
                            Equipe multidisciplinar, atendimento acolhedor e resultados acompanhados de perto.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                        <ExternalLinkButton
                            href={CONTACT.whatsappUrl}
                            className="rounded-full bg-[#47C557] px-5 py-3 font-semibold text-white shadow-[0_0_15px_rgba(71,197,87,0.4)] transition hover:bg-[#2A7633]"
                        >
                            Falar no WhatsApp
                        </ExternalLinkButton>
                        <ExternalLinkButton
                            href={LINKS.googleMaps}
                            className="rounded-full border border-white/70 px-5 py-3 font-semibold transition hover:bg-white hover:text-[var(--dark-blue)]"
                        >
                            Ver localizacao
                        </ExternalLinkButton>
                    </div>
                </div>
            </div>

            <div className="relative px-6 py-12 md:px-10 lg:px-16">
                <div className="absolute inset-0 bg-[var(--baby-blue)]/8" />
                <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">Clinica Sensory</h4>
                        <div className="h-0.5 w-30 bg-[linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)]" />
                        <p className="text-sm text-black/80">
                            Acolhimento real, equipe multidisciplinar e planos terapeuticos personalizados para cada crianca e familia.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold">Navegacao</h5>
                        <ul className="space-y-2 text-sm text-black/80">
                            <li>
                                <a href={`#${SECTION_IDS.clinicInfo}`} className="transition hover:text-[var(--blue)]">
                                    Sobre a clinica
                                </a>
                            </li>
                            <li>
                                <a href={`#${SECTION_IDS.services}`} className="transition hover:text-[var(--blue)]">
                                    Especialidades
                                </a>
                            </li>
                            <li>
                                <a href={`#${SECTION_IDS.testimonials}`} className="transition hover:text-[var(--blue)]">
                                    Avaliacoes
                                </a>
                            </li>
                            <li>
                                <Link to={ROUTES.contact} className="transition hover:text-[var(--blue)]">
                                    Fale conosco
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold">Contato</h5>
                        <ul className="space-y-2 text-sm text-black/80">
                            <li>Tel: {CONTACT.phoneDisplay}</li>
                            <li>Email: {CONTACT.email}</li>
                            <li>{CONTACT.address}</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold">Redes e suporte</h5>
                        <div className="flex flex-col gap-2 text-sm text-black/80">
                            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-[var(--blue)]">
                                WhatsApp
                            </a>
                            <a
                                href={LINKS.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="transition hover:text-[var(--blue)]"
                            >
                                Instagram
                            </a>
                            <a
                                href={LINKS.googleMaps}
                                target="_blank"
                                rel="noreferrer"
                                className="transition hover:text-[var(--blue)]"
                            >
                                Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[var(--clear-blue)] bg-[var(--dark-blue)] text-white">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-sm md:flex-row">
                    <p>&copy; 2024 Clinica Sensory. Todos os direitos reservados.</p>
                    <p className="text-white/80">Cuidado integral, acolhimento real.</p>
                </div>
            </div>

            <div className="bg-[#608BDA] p-4">
                <p className="text-center font-semibold text-white">
                    Desenvolvido por{" "}
                    <a className="font-black hover:underline" href={LINKS.developerPortfolio} target="_blank" rel="noreferrer">
                        Vinicius
                    </a>
                </p>
            </div>
        </footer>
    );
}
