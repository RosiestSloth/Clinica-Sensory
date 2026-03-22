import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportReveal } from "../animations/variants";

const cards = [
    {
        bgColor: "bg-[var(--blue)]",
        title: "1. Desenvolvimento de habilidades sociais e de comunicacao",
        description:
            "A ABA ajuda a ensinar formas eficazes de se comunicar, seja por meio da fala, gestos ou outras formas alternativas, promovendo maior interacao com o meio e com outras pessoas.",
        image: "/svg/Foguete.svg"
    },
    {
        bgColor: "bg-[var(--dark-green)]",
        title: "2. Reducao de comportamentos desafiadores",
        description:
            "Com tecnicas baseadas em reforco positivo, a terapia ABA busca reduzir comportamentos que atrapalham o aprendizado ou a convivencia social, como agressividade, crises ou estereotipias.",
        image: "/svg/Quebra_Cabecas.svg"
    },
    {
        bgColor: "bg-[var(--blue)]",
        title: "3. Promocao da autonomia e independencia",
        description:
            "A ABA ensina habilidades adaptativas do dia a dia, como se vestir, escovar os dentes, organizar objetos ou seguir rotinas, o que aumenta a independencia da crianca em diferentes contextos.",
        image: "/svg/Balao.svg"
    },
    {
        bgColor: "bg-[var(--green)]",
        title: "4. Melhora do desempenho academico",
        description:
            "Atraves de estrategias individualizadas, a ABA pode ajudar a crianca a desenvolver habilidades academicas, como leitura, escrita e matematica, facilitando seu progresso escolar.",
        image: "/svg/Foguete.svg"
    }
];

export function AbaCards() {
    return (
        <motion.div
            className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportReveal}
        >
            {cards.map((card) => (
                <motion.div key={card.title} variants={fadeUp} className={`gap-10 p-6 text-white ${card.bgColor}`}>
                    <div>
                        <ul>
                            <li className="flex flex-row justify-between">
                                <h3 className="text-xl font-bold">{card.title}</h3>
                                <img src={card.image} alt={card.title} className="size-12" />
                            </li>
                        </ul>
                        <p className="text-sm">{card.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
