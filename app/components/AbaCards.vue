<template>
  <div class="grid gap-4  lg:grid-cols-2">
    <div v-for="(card) in cards" :key="card.title" :class="` gap-10 text-white ${card.bgColor} p-6`">
      <div>
        <ul>
          <li class="flex flex-row justify-between">
            <h3 class="font-bold text-xl">
              {{ card.title }}
            </h3>
            <img :src="card.image" :alt="card.title" class="size-12" />
          </li>
        </ul>
        <p class="text-sm">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Foguete from '../assets/svg/Foguete.svg';
import QuebraCabecas from '../assets/svg/Quebra_cabecas.svg';
import Balao from '../assets/svg/Balao.svg';

const cards = ref([
  {
    bgColor: 'bg-[var(--blue)]',
    title: '1. Desenvolvimento de habilidades sociais e de comunicação',
    description: 'A ABA ajuda a ensinar formas eficazes de se comunicar, seja por meio da fala, gestos ou outras formas alternativas, promovendo maior interação com o meio e com outras pessoas.',
    image: Foguete
  },
  {
    bgColor: 'bg-[var(--dark-green)]',
    title: '2. Redução de comportamentos desafiadores',
    description: 'Com técnicas baseadas em reforço positivo, a terapia ABA busca reduzir comportamentos que atrapalham o aprendizado ou a convivência social, como agressividade, crises ou estereotipias.',
    image: QuebraCabecas
  },
  {
    bgColor: 'bg-[var(--blue)]',
    title: '3. Promoção da autonomia e independência',
    description: 'A ABA ensina habilidades adaptativas do dia a dia, como se vestir, escovar os dentes, organizar objetos ou seguir rotinas, o que aumenta a independência da criança em diferentes contextos.',
    image: Balao
  },
  {
    bgColor: 'bg-[var(--green)]',
    title: '4. Melhora do desempenho acadêmico',
    description: 'Através de estratégias individualizadas, a ABA pode ajudar a criança a desenvolver habilidades acadêmicas, como leitura, escrita e matemática, facilitando seu progresso escolar.',
    image: Foguete
  }
]);
</script>