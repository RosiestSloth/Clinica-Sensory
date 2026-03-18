import { TreatmentPage } from "./TreatmentPage";

export function EquipePage() {
    return (
        <TreatmentPage
            title="Equipe Multidisciplinar"
            mainImage="/img/services/Equipe.png"
            altImage="Profissionais da saude reunidos"
            intro="A atuacao multidisciplinar integra profissionais de diferentes areas para um cuidado completo. Cada especialista contribui com sua perspectiva dentro de um plano unico."
            pillarsTitle="Pilares da nossa integracao:"
            pillars={[
                {
                    title: "Visao holistica",
                    description: "Enxergamos o paciente em sua totalidade fisica, emocional, cognitiva e social."
                },
                {
                    title: "Comunicacao constante",
                    description: "A equipe alinha estrategias para manter coerencia entre terapias e objetivos."
                },
                {
                    title: "Avaliacao compartilhada",
                    description: "Descobertas de uma area enriquecem as demais e aceleram os avancos."
                },
                {
                    title: "Objetivos unificados",
                    description: "As metas terapeuticas sao comuns entre profissionais e familia."
                }
            ]}
            sections={[
                {
                    heading: "Eficacia do plano terapeutico",
                    description: "A atuacao conjunta evita abordagens contraditorias e potencializa resultados."
                },
                {
                    heading: "Suporte as familias",
                    description: "Centralizamos informacoes e orientacoes para reduzir sobrecarga dos responsaveis."
                },
                {
                    heading: "Adaptacao dinamica",
                    description: "A equipe revisa estrategias rapidamente quando algo precisa de ajuste."
                },
                {
                    heading: "Cobertura completa",
                    description: "Integramos necessidades motoras, cognitivas, emocionais e sociais em um unico percurso."
                }
            ]}
        />
    );
}
