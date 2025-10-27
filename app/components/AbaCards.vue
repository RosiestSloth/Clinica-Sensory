<template>
  <div v-for="(card, index) in cards" :key="card.title" class="">
    <ul>
      <li class="flex flex-row justify-between">
        <h3 class="">
          {{ card.title }}
        </h3>
        <img :src="card.image" :alt="card.title" />
      </li>
    </ul>

    <p class="">
      {{ card.description }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Foguete from '../assets/svg/Foguete.svg';
import QuebraCabecas from '../assets/svg/Quebra_cabecas.svg';
import Balao from '../assets/svg/Balao.svg';

const cards = ref([
  {
    title: 'Card 1',
    description: 'Descrição do card 1',
    image: Foguete
  },
  {
    title: 'Card 2',
    description: 'Descrição do card 2',
    image: QuebraCabecas
  },
  {
    title: 'Card 3',
    description: 'Descrição do card 3',
    image: Balao
  }
]);
</script>