import { TreatmentPage } from "./TreatmentPage";

export function AbaPage() {
    return (
        <TreatmentPage
            title="O Que e a Terapia ABA?"
            mainImage="/img/services/ABA.png"
            altImage="Imagem de uma crianca feliz"
            intro="A Analise do Comportamento Aplicada (ABA) e uma ciencia dedicada a compreender e melhorar o comportamento humano por meio de estrategias sistematicas e baseadas em evidencia."
            pillarsTitle="Os pilares da nossa atuacao profissional em ABA incluem:"
            pillars={[
                {
                    title: "Pratica Baseada em Evidencias",
                    description: "Todas as intervencoes e estrategias utilizadas possuem comprovacao cientifica de eficacia."
                },
                {
                    title: "Individualizacao do Tratamento",
                    description: "Cada plano de ensino e desenhado para necessidades, pontos fortes e desafios especificos do paciente."
                },
                {
                    title: "Analise de Dados",
                    description: "A evolucao e monitorada continuamente para ajustes precisos nas estrategias terapeuticas."
                },
                {
                    title: "Generalizacao",
                    description: "As habilidades ensinadas sao levadas para casa, escola e comunidade."
                }
            ]}
            sections={[
                {
                    heading: "Comunicacao e linguagem",
                    description: "Desenvolvimento da expressao verbal e nao verbal, incluindo uso de Comunicacao Aumentativa e Alternativa (CAA)."
                },
                {
                    heading: "Habilidades sociais",
                    description: "Estimulo a interacao social, troca de turnos, brincar funcional e construcao de vinculos."
                },
                {
                    heading: "Autonomia e Vida Diaria",
                    description: "Treino de habilidades essenciais para independencia, como higiene, alimentacao e autocuidado."
                },
                {
                    heading: "Desempenho academico e cognitivo",
                    description: "Foco em leitura, escrita, raciocinio logico e estrategias de aprendizagem."
                },
                {
                    heading: "Regulacao emocional e comportamental",
                    description: "Substituicao de comportamentos interferentes por formas funcionais de comunicacao e enfrentamento."
                }
            ]}
        />
    );
}
