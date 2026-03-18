import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { Separador } from "../components/Separador";

export function AboutPage() {
    return (
        <div className="bg-gray-50">
            <AppHeader />
            <main className="mx-auto max-w-5xl px-6 py-10 md:px-10">
                <h1 className="text-3xl font-bold text-[var(--dark-blue)] md:text-4xl">Sobre a Clinica Sensory</h1>
                <Separador className="relative my-6" />
                <div className="space-y-4 pt-4 text-justify text-black/80 md:text-lg">
                    <p>
                        A Clinica Sensory nasceu com o compromisso de oferecer atendimento terapautico humanizado para criancas, adolescentes e familias,
                        com foco no desenvolvimento integral e na autonomia.
                    </p>
                    <p>
                        Nossa equipe atua de forma multidisciplinar, com alinhamento entre especialistas e planos individualizados baseados em evidencia cientifica.
                        Cada estrategia considera a singularidade de cada paciente e o contexto real de sua rotina.
                    </p>
                    <p>
                        Trabalhamos com acolhimento, transparencia e parceria com os responsaveis para que cada conquista seja sustentavel e celebrada.
                    </p>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
