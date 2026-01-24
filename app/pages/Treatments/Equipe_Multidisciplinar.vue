<template>

    <AppHeader />
    
    <main class="pb-10">
        <SinglePagesSection Title="Equipe Multidisciplinar" BackgroundColor="[var(--blue)]" MainImage="/img/services/Equipe.png" AltImage="Profissionais da saúde reunidos" />

        <article class="px-6 md:px-10 lg:text-justify flex flex-col xl:flex-row">
            <div class="w-full">
                <p class="text-black/80 text-md">
                    A atuação multidisciplinar é formada por profissionais de diferentes áreas que trabalham de forma integrada para promover um cuidado completo ao paciente. Diferente de um atendimento isolado, aqui cada especialista contribui com sua visão específica, mas todos caminham na mesma direção.
                </p>
                <h3 class="font-bold text-lg text-black/80 my-4">
                    Pilares da nossa integração:
                </h3>
                <ul class="list-disc list-inside text-md text-black/80">
                    <li>
                        <span class="font-bold">Visão Holística: </span>Enxergamos o paciente como um todo. Não tratamos apenas a "fala" ou o "comportamento" separadamente, mas a pessoa em sua totalidade física, emocional e social.
                    </li>
                    <li>
                        <span class="font-bold">Comunicação Constante: </span>Nossa equipe mantém diálogos frequentes para alinhar estratégias, garantindo que o fonoaudiólogo saiba o que o psicólogo está trabalhando, e vice-versa.
                    </li>
                    <li>
                        <span class="font-bold">Avaliação Compartilhada: </span>As descobertas de uma área enriquecem as outras. Um detalhe sensorial percebido pelo terapeuta ocupacional pode ser a chave para o avanço na fonoaudiologia.
                    </li>
                    <li>
                        <span class="font-bold">Objetivos Unificados: </span>O plano terapêutico é único. Definimos metas comuns para que a família e a equipe remem juntas rumo à evolução do paciente.
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
                    Eficácia do Plano Terapêutico:
                </h3>
                <p class="text-md text-black/80">
                    A atuação conjunta evita abordagens contraditórias e potencializa os resultados, pois a criança recebe estímulos coerentes em todas as terapias.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Suporte às Famílias:
                </h3>
                <p class="text-md text-black/80">
                    Os pais não precisam ser os "gerentes" que levam recados de um profissional para o outro. Nossa equipe centraliza essas informações, oferecendo orientações claras e unificadas para o ambiente doméstico.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Adaptação Dinâmica:
                </h3>
                <p class="text-md text-black/80">
                    Se uma estratégia não está funcionando em uma área, a equipe se mobiliza rapidamente para reavaliar e adaptar o percurso, garantindo que o tempo de terapia seja sempre bem aproveitado.
                </p>

                <h3 class="text-lg font-bold text-black/80 my-4">
                    Cobertura Completa:
                </h3>
                <p class="text-md text-black/80">
                    Consideramos simultaneamente as necessidades físicas (motoras), cognitivas (aprendizado), emocionais (psicológicas) e sociais, garantindo que nenhuma área do desenvolvimento fique para trás.
                </p>
            </div>
        </article>
    </main>

    <AppFooter />
</template>