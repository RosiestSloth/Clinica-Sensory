import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer, viewportReveal } from "../animations/variants";
import { ROUTES } from "../constants/site";

const services = [
    {
        title: "ABA (Analise do Comportamento Aplicada)",
        description:
            "Abordagem baseada em evidencias que utiliza principios do comportamento para ensinar habilidades e reduzir comportamentos desafiadores. Muito usada no acompanhamento de pessoas com TEA, a ABA promove autonomia por meio do reforco positivo e da repeticao estruturada.",
        image: "/img/services/ABA.png",
        containerColor: "bg-[var(--blue)]",
        borderColor: "border-[var(--blue)]",
        pageLink: ROUTES.treatments.aba
    },
    {
        title: "Comunicacao Alternativa e Aumentativa (CAA)",
        description:
            "Um conjunto de estrategias e recursos que auxiliam ou substituem a fala em pessoas com dificuldades de comunicacao oral. Ela pode incluir gestos, pranchas de comunicacao, figuras, simbolos, aplicativos e dispositivos eletronicos, favorecendo a expressao de necessidades, desejos e ideias.",
        image: "/img/services/PECS.png",
        containerColor: "bg-[var(--green)]",
        borderColor: "border-[var(--green)]",
        pageLink: ROUTES.treatments.caa
    },
    {
        title: "PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets)",
        description:
            "E uma abordagem terapeutica utilizada na fonoaudiologia que utiliza pistas tateis, cinestesicas e proprioceptivas aplicadas no rosto e na regiao oral. Seu objetivo e organizar e facilitar os movimentos da fala, auxiliando no planejamento motor e na producao correta dos sons.",
        image: "/img/services/TPAC.png",
        containerColor: "bg-[var(--red)]",
        borderColor: "border-[var(--red)]",
        pageLink: ROUTES.treatments.prompt
    },
    {
        title: "Equipe Multidisciplinar",
        description:
            "E formada por profissionais de diferentes areas que atuam de forma integrada para promover um cuidado completo ao paciente. Cada profissional contribui com seu conhecimento especifico, compartilhando avaliacoes e estrategias.",
        image: "/img/services/Integracao_Sensorial.png",
        containerColor: "bg-[var(--pink)]",
        borderColor: "border-[var(--pink)]",
        pageLink: ROUTES.treatments.team
    }
];

export function Cards() {
    return (
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportReveal} className="grid grid-cols-1 lg:grid-cols-2">
            {services.map((service) => (
                <motion.div variants={fadeUp} className="flex flex-col items-center p-4" key={service.title}>
                    <Link to={service.pageLink} aria-label="Link para pagina de mais detalhes" className="flex w-full justify-center">
                        <div
                            className={`${service.borderColor} relative h-50 w-[90%] overflow-hidden border-2 bg-gray-200 transition-all hover:mb-1 hover:scale-103 md:h-60 xl:h-70 before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-gray-100/80 before:opacity-20 before:transition-all before:duration-500 before:z-10 hover:before:h-full`}
                        >
                            <img src={service.image} alt="" className="relative z-0 h-full w-full object-cover" />
                        </div>
                    </Link>

                    <div className={`${service.containerColor} w-full flex-1 p-4`}>
                        <Link to={service.pageLink}>
                            <h3 className="text-xl font-bold text-white hover:underline">{service.title}</h3>
                        </Link>

                        <p className="mt-1 h-25 overflow-hidden text-justify text-[0.8em] text-white line-clamp-5 sm:text-sm md:text-md lg:h-40 lg:text-lg">
                            {service.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
