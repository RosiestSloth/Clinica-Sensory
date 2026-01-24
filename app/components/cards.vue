<template>
  <div class="flex flex-col items-center p-4" v-for="title in services" :key="title.title">
    <NuxtLink :to="title.pageLink" aria-label="Link para página de mais detalhes" class="w-full flex justify-center">
      <div :class="[
        title.BorderColor,
        'relative w-[90%] border-2 bg-gray-200 h-50 md:h-60 xl:h-70 hover:scale-103 hover:mb-1 transition-all overflow-hidden',
        'before:absolute before:bottom-0 before:left-0 before:w-full before:bg-gray-100/80 before:h-0 before:opacity-20 before:transition-all before:duration-500 hover:before:h-full before:z-10'
      ]">
        <NuxtImg :src="title.image" alt="" class="w-full h-full object-cover relative z-0" />
      </div>
    </NuxtLink>

    <div :class="[title.ContainerColor, ' p-4 w-full flex-1']">
      <NuxtLink :to="title.pageLink">
        <h3 class="font-bold text-xl text-white hover:underline">
          {{ title.title }}
        </h3>
      </NuxtLink>

      <p
        class="text-[0.8em] sm:text-sm md:text-md lg:text-lg mt-1 overflow-hidden line-clamp-5 text-justify h-25 lg:h-40 text-white">
        {{ title.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    title: 'ABA (Análise do Comportamento Aplicada)',
    description: 'Abordagem baseada em evidências que utiliza princípios do comportamento para ensinar habilidades e reduzir comportamentos desafiadores. Muito usada no acompanhamento de pessoas com TEA, a ABA promove autonomia por meio do reforço positivo e da repetição estruturada.',
    image: '/img/services/ABA.png',
    ContainerColor: 'bg-[var(--blue)]',
    BorderColor: 'border-[var(--blue)]',
    pageLink: '/treatments/ABA'
  },
  {
    title: 'Comunicação Alternativa e Aumentativa (CAA)',
    description: 'Um conjunto de estratégias e recursos que auxiliam ou substituem a fala em pessoas com dificuldades de comunicação oral. Ela pode incluir gestos, pranchas de comunicação, figuras, símbolos, aplicativos e dispositivos eletrônicos, favorecendo a expressão de necessidades, desejos e ideias.',
    image: '/img/services/PECS.png',
    ContainerColor: 'bg-[var(--green)]',
    BorderColor: 'border-[var(--green)]',
    pageLink: '/treatments/CAA'
  },
  {
    title: 'PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets)',
    description: 'É uma abordagem terapêutica utilizada na fonoaudiologia que utiliza pistas táteis, cinestésicas e proprioceptivas aplicadas no rosto e na região oral. Seu objetivo é organizar e facilitar os movimentos da fala, auxiliando no planejamento motor e na produção correta dos sons, especialmente em indivíduos com transtornos motores da fala.',
    image: '/img/services/TPAC.png',
    ContainerColor: 'bg-[var(--red)]',
    BorderColor: 'border-[var(--red)]',
    pageLink: '/treatments/PROMPT'
  },
  {
    title: 'Equipe Multidisciplinar',
    description: 'É formada por profissionais de diferentes áreas que atuam de forma integrada para promover um cuidado completo ao paciente. Cada profissional contribui com seu conhecimento específico, compartilhando avaliações e estratégias. Essa abordagem colaborativa visa atender às diversas necessidades do paciente, promovendo um tratamento mais eficaz e holístico.',
    image: '/img/services/Integracao_Sensorial.png',
    ContainerColor: 'bg-[var(--pink)]',
    BorderColor: 'border-[var(--pink)]',
    pageLink: '/treatments/Equipe_Multidisciplinar'
  }
]);
</script>