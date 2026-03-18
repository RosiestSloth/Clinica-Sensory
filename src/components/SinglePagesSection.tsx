import { Link } from "react-router-dom";

type SinglePagesSectionProps = {
    altImage: string;
    title: string;
    backgroundClass: string;
    borderClass: string;
    mainImage: string;
};

export function SinglePagesSection({ altImage, title, backgroundClass, borderClass, mainImage }: SinglePagesSectionProps) {
    return (
        <div id="SinglepagesHeader" className={`relative mb-28 h-45 p-4 md:h-80 ${backgroundClass}`}>
            <div className="pictures-x absolute inset-0 w-full" />

            <div className="relative z-2 mx-auto max-w-7xl">
                <h2 className="w-full pr-40 pt-10 text-xl font-bold text-white md:pr-0 md:text-4xl">{title}</h2>

                <img
                    src={mainImage}
                    alt={altImage}
                    className={`absolute right-6 top-6 z-10 mt-10 h-50 w-60 border-4 object-cover shadow-lg md:right-30 md:h-80 md:w-90 ${borderClass}`}
                />

                <img
                    src="/img/backgrounds/Sensy_Pink.png"
                    alt="Quebra cabecas rosa da Clinica Sensory"
                    className="absolute right-0 top-0 size-15 rotate-20 opacity-80 md:size-28"
                />
                <img
                    src="/img/backgrounds/Sensy_Green.png"
                    alt="Quebra cabecas verde da Clinica Sensory"
                    className="absolute left-0 top-20 size-17 rotate-25 opacity-80 md:size-32"
                />
            </div>

            <Link
                to="/"
                className="group absolute left-[15%] top-55 z-50 flex items-center justify-center rounded-full border border-gray-300 bg-white/90 p-2 text-gray-600 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[var(--blue)] md:hidden"
                title="Voltar ao Inicio"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            </Link>
        </div>
    );
}
