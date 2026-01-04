<template>
    <div id="SinglepagesHeader" :class="`p-4 relative mb-28 h-45 md:h-80 bg-${BackgroundColor}`">
        <div id="picturesx" class="absolute w-full h-full inset-0"></div>
        <div class="z-2 relative max-w-7xl mx-auto flex items-center justify-between">
            <NuxtLink to="/"> </NuxtLink>
            <h2 class="text-2xl md:text-4xl font-bold text-white w-full">
                {{ Title }}
            </h2>
            <NuxtImg
                :src="MainImage"
                :alt="AltImage"
                :class="`absolute z-10 mt-10 w-60 h-50 md:w-90 md:h-80 object-cover right-6 md:right-30 top-6 border-4 border-${BackgroundColor}`"
            />
            <NuxtImg
                src="img/backgrounds/Sensy_Pink.png"
                alt="Quebra cabeças rosa da Clinica Sensory"
                class="size-18 md:size-28 rotate-20 absolute right-0 top-0"
            />
            <NuxtImg
                src="img/backgrounds/Sensy_Green.png"
                alt="Quebra cabeças verde da Clinica Sensory"
                class="size-20 md:size-32 absolute rotate-25 left-0 top-18"
            />
        </div>
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