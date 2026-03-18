import { useRef } from "react";

type Convenio = {
    img: string;
    alt: string;
};

const slide1: Convenio[] = [
    { img: "img/convenios/Afeb.png", alt: "Convenio Afeb" },
    { img: "img/convenios/AFEGO.png", alt: "Convenio AFEGO" },
    { img: "img/convenios/Anafe_Saude.png", alt: "Convenio Anafe Saude" },
    { img: "img/convenios/Aste.png", alt: "Convenio Aste" },
    { img: "img/convenios/Caesan.png", alt: "Convenio Caesan" },
    { img: "img/convenios/Care_Plus.png", alt: "Convenio Care Plus" },
    { img: "img/convenios/Pro_Saude.png", alt: "Convenio Pro Saude" },
    { img: "img/convenios/Pro_Ser.png", alt: "Convenio Pro Ser" },
    { img: "img/convenios/Real_Grandeza.png", alt: "Convenio Real Grandeza" },
    { img: "img/convenios/Saude_Caixa.png", alt: "Convenio Saude Caixa" },
    { img: "img/convenios/SIS_Senado_Federal.png", alt: "Convenio SIS Senado Federal" },
    { img: "img/convenios/STF_Med.png", alt: "Convenio STF Med" },
    { img: "img/convenios/TRT_Saude.png", alt: "Convenio TRT Saude" },
    { img: "img/convenios/Select_Saude.png", alt: "Convenio Select Saude" }
];

const slide2: Convenio[] = [
    { img: "img/convenios/Embratel.png", alt: "Convenio Embratel" },
    { img: "img/convenios/Fapes.png", alt: "Convenio Fapes" },
    { img: "img/convenios/Omint_Saude.png", alt: "Convenio Omint Saude" },
    { img: "img/convenios/Proasa.png", alt: "Convenio Proasa" },
    { img: "img/convenios/Plan_Assiste.png", alt: "Convenio Plan Assiste" },
    { img: "img/convenios/JMU.png", alt: "Convenio JMU" },
    { img: "img/convenios/CODEVASF.png", alt: "Convenio CODEVASF" },
    { img: "img/convenios/Conab.png", alt: "Convenio Conab" },
    { img: "img/convenios/Pro_Social.png", alt: "Convenio Pro Social" },
    { img: "img/convenios/Serpro.png", alt: "Convenio Serpro" },
    { img: "img/convenios/Tre_Saude.png", alt: "Convenio TRE Saude" },
    { img: "img/convenios/Royal_Medlife.png", alt: "Convenio Royal Medlife" },
    { img: "img/convenios/TST.png", alt: "Convenio TST" },
    { img: "img/convenios/Casec.png", alt: "Convenio Casec" }
];

export function Convenios() {
    const list1Ref = useRef<HTMLDivElement>(null);
    const list2Ref = useRef<HTMLDivElement>(null);

    function scroll(direction: "prev" | "next") {
        const lists = [list1Ref.current, list2Ref.current].filter(Boolean) as HTMLDivElement[];

        lists.forEach((list) => {
            if (list.children.length === 0) {
                return;
            }

            if (direction === "next") {
                const isAtEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 2;
                if (isAtEnd) {
                    list.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    list.scrollBy({ left: list.clientWidth, behavior: "smooth" });
                }
            } else {
                const isAtStart = list.scrollLeft === 0;
                if (isAtStart) {
                    list.scrollTo({ left: list.scrollWidth, behavior: "smooth" });
                } else {
                    list.scrollBy({ left: -list.clientWidth, behavior: "smooth" });
                }
            }
        });
    }

    return (
        <div className="relative flex h-30 flex-col gap-4 border-y-2 border-[#206FBD]">
            <div ref={list1Ref} className="no-scrollbar flex flex-row gap-10 overflow-x-hidden">
                {slide1.map((slide) => (
                    <div key={slide.img}>
                        <img className="h-full min-w-40 object-contain" src={slide.img} alt={slide.alt} />
                    </div>
                ))}
            </div>

            <div ref={list2Ref} className="no-scrollbar flex flex-row gap-10 overflow-x-hidden">
                {slide2.map((slide) => (
                    <div key={slide.img}>
                        <img className="h-full min-w-40 object-contain" src={slide.img} alt={slide.alt} />
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 transform justify-between gap-2 px-4">
                <button
                    aria-label="Anterior"
                    onClick={() => scroll("prev")}
                    className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white p-4 shadow-md transition-colors hover:bg-gray-100 hover:shadow-sm active:scale-95 md:size-14"
                >
                    <span>
                        <img src="/svg/Arrow-left.svg" alt="Anterior" className="size-6 md:size-8" />
                    </span>
                </button>

                <button
                    aria-label="Proximo"
                    onClick={() => scroll("next")}
                    className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white p-4 shadow-md transition-colors hover:bg-gray-100 hover:shadow-sm active:scale-95 md:size-14"
                >
                    <span>
                        <img src="/svg/Arrow-right.svg" alt="Proximo" className="size-6 md:size-8" />
                    </span>
                </button>
            </div>
        </div>
    );
}
