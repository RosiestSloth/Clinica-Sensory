<template>
    <div id="SinglepagesHeader" :class="`p-4 relative mb-28 h-45 md:h-80 bg-${BackgroundColor}`">

        <div id="picturesx" class="absolute w-full inset-0"></div>

        <div class="z-2 relative max-w-7xl mx-auto">

            <h2 class="text-xl md:text-4xl font-bold text-white w-full pr-40 md:pr-0 pt-10">
                {{ Title }}
            </h2>
            
            <NuxtImg :src="MainImage" :alt="AltImage"
                :class="`absolute z-10 mt-10 w-60 h-50 md:w-90 md:h-80 object-cover right-6 md:right-30 top-6 border-4 border-${BackgroundColor} shadow-lg`" />
            
            <NuxtImg src="img/backgrounds/Sensy_Pink.png" alt="Quebra cabeças rosa da Clinica Sensory"
                class="size-15 md:size-28 rotate-20 absolute right-0 top-0 opacity-80" />
            <NuxtImg src="img/backgrounds/Sensy_Green.png" alt="Quebra cabeças verde da Clinica Sensory"
                class="size-17 md:size-32 absolute rotate-25 left-0 top-20 opacity-80" />
        </div>
        <NuxtLink to="/"
            class="absolute left-[15%] top-55 md:hidden z-50 flex items-center justify-center p-2 rounded-full bg-white/90 shadow-sm hover:bg-white text-gray-600 hover:text-[var(--blue)] transition-all duration-200 group border border-gray-300 hover:scale-105"
            title="Voltar ao Início">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    AltImage: {
        type: String,
        required: true, // O texto alternativo é obrigatório.
    },
    Title: {
        type: String,
        required: true, // O título é obrigatório.
    },
    BackgroundColor: {
        type: String,
        default: 'bg-white', // Cor padrão.
    },
    MainImage: {
        type: String,
        required: true, // A imagem principal é obrigatória.
    }
});
</script>