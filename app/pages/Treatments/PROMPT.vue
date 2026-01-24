<template>

    <AppHeader />
    
    <main class="pb-10">
        <SinglePagesSection Title="Método PROMPT" BackgroundColor="[var(--blue)]" MainImage="/img/services/PROMPT.png" AltImage="Fonoaudióloga aplicando técnica PROMPT" />

        <article class="px-6 md:px-10 lg:text-justify flex flex-col xl:flex-row">
            <div class="w-full">
                <p class="text-black/80 text-md">
                    O PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets) é uma abordagem terapêutica tátil-cinestésica utilizada na fonoaudiologia. Diferente das terapias tradicionais que focam na visão e audição, o PROMPT utiliza o toque no rosto e pescoço para guiar os movimentos da fala.
                </p>
                <h3 class="font-bold text-lg text-black/80 my-4">
                    Como funciona essa abordagem:
                </h3>
                <ul class="list-disc list-inside text-md text-black/80">
                    <li>
                        <span class="font-bold">Pistas Táteis: </span>O terapeuta utiliza toques precisos na mandíbula, lábios e língua do paciente para moldar manualmente a produção do som.
                    </li>
                    <li>
                        <span class="font-bold">Integração Sensorial: </span>Combina informações táteis, cinestésicas (movimento) e proprioceptivas (posição do corpo) para facilitar o aprendizado motor.
                    </li>
                    <li>
                        <span class="font-bold">Foco no Transtorno Motor: </span>É especialmente indicado para casos de Apraxia de Fala, Disartria e outras dificuldades onde o planejamento do movimento é o desafio.
                    </li>
                    <li>
                        <span class="font-bold">Conexão Mente-Músculo: </span>Ajuda o cérebro a entender e memorizar qual músculo deve se mover, e como, para produzir cada fonema.
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
                    Planejamento Motor da Fala:
                </h3>
                <p class="text-md text-black/80">
                    O principal objetivo é organizar o sistema motor. Ensinamos o paciente a planejar a sequência de movimentos necessária para falar sílabas, palavras e frases.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Correção da Produção Sonora:
                </h3>
                <p class="text-md text-black/80">
                    Através da manipulação direta (toque), corrigimos a postura dos lábios ou da mandíbula em tempo real, facilitando a produção correta dos sons que o paciente tem dificuldade.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Feedback Proprioceptivo:
                </h3>
                <p class="text-md text-black/80">
                    Ajudamos o indivíduo a "sentir" como a fala é produzida. Isso aumenta a consciência corporal e facilita a retenção do aprendizado motor a longo prazo.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Funcionalidade e Comunicação:
                </h3>
                <p class="text-md text-black/80">
                    Os movimentos trabalhados são sempre inseridos em contextos de comunicação real, visando aumentar a inteligibilidade da fala no dia a dia.
                </p>
            </div>
        </article>
    </main>

    <AppFooter />
</template>