import { TreatmentPage } from "./TreatmentPage";

export function CaaPage() {
    return (
        <TreatmentPage
            title="Comunicacao Alternativa (CAA)"
            mainImage="/img/services/CAA.png"
            altImage="Crianca utilizando tablet para comunicacao"
            intro="A Comunicacao Aumentativa e Alternativa (CAA) amplia as habilidades de comunicacao de pessoas com dificuldades na oralidade, promovendo expressao, autonomia e participacao social."
            pillarsTitle="Pontos fundamentais sobre a CAA:"
            pillars={[
                {
                    title: "Nao inibe a fala",
                    description: "A CAA organiza o pensamento e pode ser uma ponte para o desenvolvimento da oralidade."
                },
                {
                    title: "Multimodalidade",
                    description: "Combinamos gestos, expressoes, pranchas visuais e dispositivos eletronicos."
                },
                {
                    title: "Direito a expressao",
                    description: "A pessoa passa a comunicar necessidades, sentimentos e opinioes com autonomia."
                },
                {
                    title: "Personalizacao",
                    description: "Selecionamos recursos de baixa ou alta tecnologia conforme a rotina da familia."
                }
            ]}
            sections={[
                {
                    heading: "Diversidade de recursos",
                    description: "Trabalhamos de ficharios e cartoes a aplicativos dedicados e sintetizadores de voz."
                },
                {
                    heading: "Reducao da frustracao",
                    description: "Quando a pessoa consegue se comunicar, ha mais calma e menos comportamentos desafiadores."
                },
                {
                    heading: "Inclusao social",
                    description: "A ferramenta certa remove barreiras e favorece participacao na escola, familia e comunidade."
                },
                {
                    heading: "Apoio ao aprendizado",
                    description: "O suporte visual melhora compreensao de conceitos e acompanhamento pedagogico."
                }
            ]}
        />
    );
}
