import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportRevealOnce } from "../../animations/variants";
import { AppFooter } from "../../components/AppFooter";
import { AppHeader } from "../../components/AppHeader";
import { SinglePagesSection } from "../../components/SinglePagesSection";

type TreatmentPageProps = {
    title: string;
    mainImage: string;
    altImage: string;
    intro: string;
    pillarsTitle: string;
    pillars: { title: string; description: string }[];
    sections: { heading: string; description: string }[];
};

export function TreatmentPage({
    title,
    mainImage,
    altImage,
    intro,
    pillarsTitle,
    pillars,
    sections
}: TreatmentPageProps) {
    return (
        <div>
            <AppHeader />

            <motion.main
                className="pb-10"
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={viewportRevealOnce}
            >
                <SinglePagesSection
                    title={title}
                    backgroundClass="bg-[var(--blue)]"
                    borderClass="border-[var(--blue)]"
                    mainImage={mainImage}
                    altImage={altImage}
                />

                <motion.article viewport={{ once: true }} variants={fadeUp} className="flex flex-col px-6 md:px-10 xl:flex-row lg:text-justify">
                    <motion.div variants={fadeUp} className="w-full">
                        <motion.p variants={fadeUp} className="text-md text-black/80">
                            {intro}
                        </motion.p>
                        <motion.h3 variants={fadeUp} className="my-4 text-lg font-bold text-black/80">
                            {pillarsTitle}
                        </motion.h3>
                        <ul className="list-inside list-disc text-md text-black/80">
                            {pillars.map((item) => (
                                <motion.li key={item.title} variants={fadeUp}>
                                    <span className="font-bold">{item.title}: </span>
                                    {item.description}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="relative my-2 flex flex-row items-center justify-center gap-4 xl:my-0 xl:h-auto xl:w-30 xl:flex-col xl:gap-10">
                        <div className="h-1 w-full flex-2 content-[''] [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] lg:w-1 xl:h-full xl:[background:linear-gradient(to_bottom,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)]" />

                        <div className="z-10 w-40 object-cover xl:h-60 xl:flex-1">
                            <img
                                src="/img/backgrounds/Sensys_2.png"
                                alt="Quebra Cabecas da Clinica Sensory"
                                className="h-full w-full object-contain xl:rotate-90"
                            />
                        </div>

                        <div className="h-1 w-full flex-2 content-[''] [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] lg:w-1 xl:h-full xl:[background:linear-gradient(to_bottom,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)]" />
                    </div>

                    <motion.div variants={fadeUp} className="w-full">
                        {sections.map((section) => (
                            <motion.div key={section.heading} variants={fadeUp}>
                                <h3 className="my-4 text-lg font-bold text-black/80 xl:my-0">{section.heading}</h3>
                                <p className="text-md text-black/80">{section.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.article>
            </motion.main>

            <AppFooter />
        </div>
    );
}
