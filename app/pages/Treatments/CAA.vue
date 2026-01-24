<template>

    <AppHeader />
    
    <main class="pb-10">
        <SinglePagesSection Title="Comunicação Alternativa (CAA)" BackgroundColor="[var(--blue)]" MainImage="/img/services/CAA.png" AltImage="Criança utilizando tablet para comunicação" />

        <article class="px-6 md:px-10 lg:text-justify flex flex-col xl:flex-row">
            <div class="w-full">
                <p class="text-black/80 text-md">
                    A Comunicação Aumentativa e Alternativa (CAA) é uma área da prática clínica destinada a ampliar as habilidades de comunicação de pessoas com dificuldades na oralidade. Nosso objetivo não é apenas substituir a fala, mas oferecer um sistema robusto de linguagem que permita a plena expressão do indivíduo.
                </p>
                <h3 class="font-bold text-lg text-black/80 my-4">
                    Pontos fundamentais sobre a CAA:
                </h3>
                <ul class="list-disc list-inside text-md text-black/80">
                    <li>
                        <span class="font-bold">Não inibe a fala: </span>Ao contrário do mito comum, o uso da CAA não impede o desenvolvimento da fala; ela organiza o pensamento e serve como ponte para a oralidade.
                    </li>
                    <li>
                        <span class="font-bold">Multimodalidade: </span>Utilizamos diversas formas de comunicar simultaneamente: gestos, expressões, pranchas visuais e dispositivos eletrônicos.
                    </li>
                    <li>
                        <span class="font-bold">Direito à Expressão: </span>Focamos na autonomia do paciente, permitindo que ele expresse não apenas necessidades básicas, mas sentimentos e opiniões.
                    </li>
                    <li>
                        <span class="font-bold">Personalização: </span>Encontramos o método que melhor se adapta à rotina da família, seja baixa tecnologia (papel) ou alta tecnologia (tablets).
                    </li>
                </ul>
            </div>

            <div class="flex flex-row xl:w-30 xl:flex-col relative items-center justify-center gap-4 xl:gap-10 my-2 xl:my-0 xl:h-auto">
                <div class="h-1 w-full lg:w-1 xl:h-full content-[''] 
                    [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)]
                    xl:[background:linear-gradient(to_bottom,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] flex-2">
                </div>

                <div class="w-40 z-10 xl:flex-1 xl:h-60 object-cover">
                    <NuxtImg
                        src="img/backgrounds/Sensys_2.png"
                        alt="Quebra Cabeças da Clinica Sensory"
                        class="w-full h-full object-contain xl:rotate-90"
                    />
                </div>

                <div class="h-1 w-full lg:w-1 xl:h-full content-[''] flex-2 
                    [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)]
                    xl:[background:linear-gradient(to_bottom,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)]">
                </div>
            </div>

            <div class="w-full">
                <h3 class="text-lg font-bold text-black/80 my-4 xl:my-0">
                    Diversidade de Recursos:
                </h3>
                <p class="text-md text-black/80">
                    Trabalhamos com recursos de baixa tecnologia (fichários, cartões de comunicação) até alta tecnologia (aplicativos dedicados e sintetizadores de voz).
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Redução da Frustração:
                </h3>
                <p class="text-md text-black/80">
                    Muitos comportamentos desafiadores nascem da impossibilidade de ser entendido. A CAA oferece uma saída para essa frustração, trazendo mais calma para o dia a dia.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Inclusão Social:
                </h3>
                <p class="text-md text-black/80">
                    A ferramenta certa remove barreiras, permitindo a participação ativa da criança ou adulto na escola, nas atividades familiares e na comunidade.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Apoio ao Aprendizado:
                </h3>
                <p class="text-md text-black/80">
                    O suporte visual da CAA auxilia na compreensão de conceitos abstratos, favorecendo o aprendizado escolar e o acompanhamento pedagógico.
                </p>
            </div>
        </article>
    </main>

    <AppFooter />
</template>