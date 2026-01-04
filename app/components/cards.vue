<template>
  <div class="flex flex-col items-center p-4">
    <NuxtImg 
      :src="imageSrc" 
      alt="" 
      :class="[BorderColor, ' border-x-2 border-t-2 w-[90%] bg-gray-200 h-50 md:h-60 xl:h-70 object-cover'] "
    />

    <div :class="[ContainerColor, ' p-4 w-full flex-1'] ">
      <h3 class="font-bold text-xl text-white">
        {{ title }}
      </h3>

      <p class="text-[0.8em] sm:text-sm md:text-md lg:text-lg mt-1 overflow-hidden line-clamp-4 md:line-clamp-5 text-justify text-white">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  BorderColor: {
    type: String,
    default: 'border-gray-200', // Cor padrão
  },
  ContainerColor: {
    type: String,
    default: 'bg-white', // Cor padrão
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