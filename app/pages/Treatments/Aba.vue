<template>

    <AppHeader />
    
    <main class="pb-10">
        <SinglePagesSection Title="O Que é a Terapia ABA?" BackgroundColor="[var(--blue)]" MainImage="/img/services/ABA.png" AltImage="Imagem de uma criança feliz" />

        <article class="px-6 md:px-10 text-justify flex flex-col xl:flex-row">
            <div class="w-full">
                <p class="text-black/80 text-md">
                    A Análise do Comportamento Aplicada (ABA) é uma ciência dedicada a compreender e melhorar o comportamento humano. Através de uma abordagem sistemática e baseada em evidências, a ABA busca resolver problemas práticos e socialmente relevantes.
                </p>
                <h3 class="font-bold text-lg text-black/80 my-4">
                    Os pilares da nossa atuação profissional em ABA incluem:
                </h3>
                <ul class="list-disc list-inside text-md text-black/80">
                    <li>
                        <span class="font-bold">Prática Baseada em Evidências: </span>Todas as intervenções e estratégias utilizadas possuem comprovação científica de eficácia.
                    </li>
                    <li>
                        <span class="font-bold">Individualização do Tratamento: </span>Não existe um "programa único". Cada plano de ensino é desenhado exclusivamente para as necessidades, pontos fortes e déficits específicos do paciente.
                    </li>
                    <li>
                        <span class="font-bold">Análise de Dados :</span>O progresso não é baseado em "achismos". A evolução é monitorada através de coleta contínua de dados, permitindo ajustes precisos e em tempo real nas estratégias terapêuticas.
                    </li>
                    <li>
                        <span class="font-bold">Generalização: </span>O foco ultrapassa o consultório. Trabalhamos para que as habilidades adquiridas sejam aplicadas pelo paciente em sua vida cotidiana, na escola, em casa e na comunidade.
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
                    Comunicação e linguagem:
                </h3>
                <p class="text-md text-black/80">
                    Desenvolvimento da expressão verbal e não verbal, incluindo o uso de Comunicação Aumentativa e Alternativa (CAA) para garantir que o indivíduo seja compreendido.
                </p>
                <h3 class="text-lg font-bold text-black/80 my-4">
                    Habilidades sociais:
                </h3>
                <p class="text-md text-black/80">
                    Estímulo à interação social, contato visual, troca de turnos em conversas, brincar funcional e construção de vínculos.
                </p>
                <h3 class="text-lg font-bold text-black/80 my-4">
                    Autonomia e Vida Diária (AVD):
                </h3>
                <p class="text-md text-black/80">
                    Treino de habilidades essenciais para a independência, como higiene pessoal, alimentação, vestuário e autocuidado.
                </p>
                <h3 class="text-lg font-bold text-black/80 my-4">
                    Desempenho Acadêmico e Cognitivo:
                </h3>
                <p class="text-md text-black/80">
                    Foco em pré-requisitos escolares, alfabetização (leitura e escrita), raciocínio lógico e estratégias de aprendizagem.
                </p>
                <h3 class="text-lg font-bold text-black/80 my-4">
                    Comportamento Adaptativo:
                </h3>
                <p class="text-md text-black/80">
                    Desenvolvimento da capacidade de seguir instruções, manter o foco em tarefas e adaptar-se a diferentes rotinas e ambientes.
                </p>
                <h3 class="text-lg font-bold text-black/80 my-4">
                    Regulação Emocional e Comportamental:
                </h3>
                <p class="text-md text-black/80">
                    Substituição de comportamentos interferentes (agressividade, autolesão, crises) por formas funcionais de comunicação e enfrentamento.
                </p>
            </div>
        </article>
    </main>

    <AppFooter />
</template>