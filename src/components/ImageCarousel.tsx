export function ImageCarousel({ className = "" }: { className?: string }) {
    return (
        <div className={className}>
            <div className="h-72 w-full overflow-hidden rounded-2xl border border-blue-100 bg-[linear-gradient(120deg,#cfeaff_0%,#ffffff_40%,#ffecf7_100%)] p-6 md:h-96">
                <div className="grid h-full place-items-center text-center text-[var(--dark-blue)]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em]">Clinica Sensory</p>
                        <h3 className="mt-2 text-2xl font-bold md:text-4xl">Espaco acolhedor e preparado</h3>
                        <p className="mt-3 max-w-xl text-sm text-black/75 md:text-lg">
                            Galeria em atualizacao para a versao React. As imagens continuam disponiveis no projeto e podem ser adicionadas aqui sem alterar a estrutura.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
