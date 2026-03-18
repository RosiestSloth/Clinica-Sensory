import { TreatmentPage } from "./TreatmentPage";

export function PromptPage() {
    return (
        <TreatmentPage
            title="Metodo PROMPT"
            mainImage="/img/services/PROMPT.png"
            altImage="Fonoaudiologa aplicando tecnica PROMPT"
            intro="O PROMPT e uma abordagem tatil-cinestesica que utiliza toque estrategico no rosto e pescoco para guiar os movimentos da fala, especialmente em transtornos motores."
            pillarsTitle="Como funciona essa abordagem:"
            pillars={[
                {
                    title: "Pistas tateis",
                    description: "Toques precisos em mandibula, labios e lingua ajudam na producao dos sons."
                },
                {
                    title: "Integracao sensorial",
                    description: "Combina informacoes tateis, cinestesicas e proprioceptivas para facilitar o aprendizado motor."
                },
                {
                    title: "Foco no transtorno motor",
                    description: "Especialmente indicado para Apraxia de Fala, Disartria e dificuldades de planejamento motor."
                },
                {
                    title: "Conexao mente-musculo",
                    description: "Ajuda o cerebro a memorizar como mover a musculatura para produzir cada fonema."
                }
            ]}
            sections={[
                {
                    heading: "Planejamento motor da fala",
                    description: "Organizamos a sequencia de movimentos para silabas, palavras e frases."
                },
                {
                    heading: "Correcao da producao sonora",
                    description: "Ajustes em tempo real da postura oral facilitam a producao correta dos sons."
                },
                {
                    heading: "Feedback proprioceptivo",
                    description: "A pessoa aprende a sentir como a fala e produzida, favorecendo retencao de longo prazo."
                },
                {
                    heading: "Funcionalidade e comunicacao",
                    description: "As praticas sao aplicadas em contextos reais para aumentar a inteligibilidade no dia a dia."
                }
            ]}
        />
    );
}
