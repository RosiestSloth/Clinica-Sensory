<template>
    <div id="SinglepagesHeader" :class="`p-4 relative mb-28 h-45 bg-${BackgroundColor}`">
        <div id="picturesx" class="absolute w-full h-full inset-0"></div>
        <div class="z-2 relative">
            <NuxtLink to="/"> </NuxtLink>
            <h2 class="text-2xl font-bold text-white w-full">
                {{ Title }}
            </h2>
            <NuxtImg
                :src="MainImage"
                :alt="AltImage"
                :class="`absolute z-10 mt-10 w-60 h-50 mx-auto object-cover right-6 top-6 border-4 border-${BackgroundColor}`"
            />
            <NuxtImg
                src="img/backgrounds/Sensy_Pink.png"
                alt="Quebra cabeças rosa da Clinica Sensory"
                class="size-18 rotate-20 absolute right-0 top-0"
            />
            <NuxtImg
                src="img/backgrounds/Sensy_Green.png"
                alt="Quebra cabeças verde da Clinica Sensory"
                class="size-18 absolute rotate-25 left-0 top-20"
            />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        AltImage: {
            type: String,
            required: true,
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