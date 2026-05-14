import { useEffect, useRef, useState } from "react";

type Testimonial = {
    title: string;
    text: string;
    rating: number;
};

type Slide = {
    rows: Testimonial[][];
};

const slides: Slide[] = [
    {
        rows: [[
            {
                title: "Renata Alves",
                text: "Meu pequeno esta realizando terapias de fonoaudiologia e Terapia Ocupacional, ambas sao maravilhosas e gracas a elas ja estamos dando os primeiros passos para a evolucao do meu filho.",
                rating: 5
            },
            {
                title: "Irisley Nunes",
                text: "Meu filho esta fazendo a terapia de cabine fechada (TPAC) com Marcelo e tem desenvolvido muito suas habilidades. Excelente profissional e ambiente acolhedor.",
                rating: 5
            }
        ]]
    },
    {
        rows: [[
            {
                title: "Marcia Daniele",
                text: "Tenho apenas elogios a fazer a essa clinica. Desde a recepcao ate as terapeutas, todos sao incriveis e cuidam das criancas com muito carinho.",
                rating: 5
            },
            {
                title: "Lais Lima",
                text: "Parabens a equipe pelo excelente trabalho, ambiente acolhedor e profissionais preparados. E nitida a evolucao do meu filho.",
                rating: 5
            }
        ]]
    },
    {
        rows: [[
            {
                title: "Brenda Macedo",
                text: "Um lugar maravilhoso, meu filho tem evoluido cada vez mais. Otimos profissionais desde a recepcao ate os terapeutas.",
                rating: 5
            },
            {
                title: "Andreia Silva",
                text: "So tenho elogios e agradecimentos aos profissionais da Sensory. Atendimento dedicado e humanizado, com acolhimento real para as familias.",
                rating: 5
            }
        ]]
    },
    {
        rows: [[
            {
                title: "Sarah Melo",
                text: "Meu filho e autista nao verbal e tinha pouco desenvolvimento na fala. Apos o acompanhamento, ele avancou muito com o suporte da equipe.",
                rating: 5
            },
            {
                title: "Danielle Monyke",
                text: "Clinica com excelentes profissionais, atendimento humanizado e alta qualidade. Meu filho gosta muito de ir para terapia.",
                rating: 5
            }
        ]]
    }
];

export function Comments() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [gap, setGap] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [currentDragX, setCurrentDragX] = useState(0);

    useEffect(() => {
        function updateSlideWidth() {
            if (!carouselRef.current) {
                return;
            }

            const style = window.getComputedStyle(carouselRef.current);
            const currentGap = parseFloat(style.gap) || 0;
            const width = carouselRef.current.offsetWidth;
            setGap(currentGap);
            setSlideWidth(width);
            setTranslateX(-currentIndex * (width + currentGap));
        }

        updateSlideWidth();
        window.addEventListener("resize", updateSlideWidth);
        return () => {
            window.removeEventListener("resize", updateSlideWidth);
        };
    }, [currentIndex]);

    function getDragX(event: React.MouseEvent | React.TouchEvent) {
        if ("touches" in event) {
            return event.touches[0].clientX;
        }

        return event.clientX;
    }

    function getClientY(event: React.MouseEvent | React.TouchEvent) {
        if ("touches" in event) {
            return event.touches[0].clientY;
        }

        return event.clientY;
    }

    function startDrag(event: React.MouseEvent | React.TouchEvent) {
        setIsDragging(true);
        setStartX(getDragX(event));
        setStartY(getClientY(event));
        setCurrentDragX(translateX);
    }

    function onDrag(event: React.MouseEvent | React.TouchEvent) {
        if (!isDragging) {
            return;
        }

        const currentY = getClientY(event);
        const diffX = getDragX(event) - startX;
        const diffY = currentY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if ("preventDefault" in event) {
                event.preventDefault();
            }
            setTranslateX(currentDragX + diffX);
        }
    }

    function endDrag(event: React.MouseEvent | React.TouchEvent) {
        if (!isDragging) {
            return;
        }

        let endX = startX;
        if ("changedTouches" in event) {
            endX = event.changedTouches[0].clientX;
        } else {
            endX = event.clientX;
        }

        const dragThreshold = slideWidth / 4;
        const diff = endX - startX;

        let nextIndex = currentIndex;
        if (Math.abs(diff) > dragThreshold) {
            if (diff < 0 && currentIndex < slides.length - 1) {
                nextIndex = currentIndex + 1;
            } else if (diff > 0 && currentIndex > 0) {
                nextIndex = currentIndex - 1;
            }
        }

        setIsDragging(false);
        setCurrentIndex(nextIndex);
        setTranslateX(-nextIndex * (slideWidth + gap));
    }

    return (
        <div
            className="relative w-full select-none overflow-hidden"
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={startDrag}
            onTouchMove={onDrag}
            onTouchEnd={endDrag}
        >
            <div
                ref={carouselRef}
                className={`flex gap-4 ${isDragging ? "cursor-grabbing" : "cursor-grab transition-transform duration-500 ease-in-out"}`}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="mt-8 flex w-full flex-shrink-0 flex-col gap-4">
                        {slide.rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex w-full flex-col gap-4 sm:flex-row">
                                {row.map((card) => (
                                    <div key={card.title} className="flex flex-1 flex-col rounded-xl bg-white p-4 text-black/90">
                                        <div className="relative h-30 lg:h-40">
                                            <h3 className="flex items-center gap-2 text-sm font-semibold md:text-md xl:text-lg">
                                                <img src="/svg/Google_Logo.svg" alt="Google" className="size-5" />
                                                {card.title}
                                            </h3>

                                            <div className="absolute right-0 top-0 flex items-center gap-1">
                                                {Array.from({ length: card.rating }).map((_, starIndex) => (
                                                    <img
                                                        key={`${card.title}-star-${starIndex}`}
                                                        src="/svg/Rating_Star.svg"
                                                        alt="Estrela de avaliacao"
                                                        className="size-4"
                                                    />
                                                ))}
                                            </div>

                                            <p className="mt-1 overflow-hidden text-justify text-[0.8em] line-clamp-4 sm:text-sm md:text-md md:line-clamp-5">
                                                {card.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
