<template>
  <div class="flex flex-col items-center p-4 h-full w-full">
    <NuxtImg 
      :src="imageSrc" 
      alt="" 
      :class="[BorderColor, ' border-x-2 border-t-2 w-[90%] bg-gray-200 h-50 md:h-60 xl:h-70 object-cover'] "
    />

    <div :class="[ContainerColor, ' p-4 w-full flex-1'] ">
      <h3 class="text-lg md:text-xl xl:text-2xl font-bold text-white">
        {{ title }}
      </h3>

      <p class="mt-2 text-white text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  BorderColor: {
    type: String,
    default: 'border-gray-300', // Diz que o padrão é cinza
  },
  ContainerColor: {
    type: String,
    default: 'bg-white', // Diz que o padrão é braco
  },
  imageSrc: {
    type: String,
    required: true, // Diz que a imagem é obrigatória
  },
  title: {
    type: String,
    required: true, // O título é obrigatório
  },
  description: {
    type: String,
    required: true, // A descrição é obrigatória
  },
});
</script>