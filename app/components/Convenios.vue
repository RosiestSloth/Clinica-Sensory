<template>
    <div class="border-y-2 border-[#206FBD] flex flex-col  gap-4 h-30 relative">
        <!-- Conteúdos dos slides 1 e 2 -->
        <div ref="list1Ref" class="flex flex-row gap-10 overflow-x-hidden no-scrollbar ">
            <div id="Lista_1" v-for="(slide, index) in slides[0].slide1" :key="'list1-' + index">
                <NuxtImg
                class="h-full min-w-40 object-contain"
                :src="slide.img"
                :alt="slide.alt"
                />
            </div>
        </div>

        <div ref="list2Ref" class="flex flex-row gap-10 overflow-x-hidden no-scrollbar">
            <div id="Lista_2" v-for="(slide, index) in slides[1].slide2" :key="'list2-' + index">
                <NuxtImg
                class="h-full min-w-40 object-contain"
                :src="slide.img"
                :alt="slide.alt"
                />
            </div>
        </div>
        <!-- Controles de navegação -->
        <div class="absolute top-1/2 w-full justify-between transform -translate-y-1/2 z-10 flex gap-2 px-4">
            <button
            aria-label="Anterior"
            @click="scroll('prev')"
            class="bg-white cursor-pointer size-10 md:size-14 p-4 rounded-full shadow-md border-1 border-gray-200 hover:bg-gray-100 transition-colors hover:shadow-sm active:scale-95 flex items-center justify-center"
            >
            <span>
                <img :src="leftArrow" alt="Anterior" class="size-6 md:size-8" />
            </span>
            </button>
            <button
            aria-label="Próximo"
            @click="scroll('next')"
            class="bg-white cursor-pointer size-10 md:size-14 p-4 rounded-full shadow-md border-1 border-gray-200 hover:bg-gray-100 transition-colors hover:shadow-sm active:scale-95 flex items-center justify-center"
            >
                <span>
                    <img :src="rightArrow" alt="Próximo" class="size-6 md:size-8" />
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    // SVGs agora servidos pelo /public
    const leftArrow = '/svg/Arrow-left.svg';
    const rightArrow = '/svg/Arrow-right.svg';

    const list1Ref = ref(null);
    const list2Ref = ref(null);

    const slides = ref([
        {   
        slide1: [
                {img: 'img/convenios/Afeb.png', title: 'Afeb', alt: 'Convênio Afeb'},
                {img: 'img/convenios/AFEGO.png', title: 'Embratel', alt: 'Convênio Embratel'},
                {img: 'img/convenios/Anafe_Saude.png', title: 'SulAmérica', alt: 'Convênio SulAmérica'},
                {img: 'img/convenios/Aste.png', title: 'Bradesco Saúde', alt: 'Convênio Bradesco Saúde'},
                {img: 'img/convenios/Caesan.png', title: 'Embratel', alt: 'Convênio Embratel'},
                {img: 'img/convenios/Care_Plus.png', title: 'Cassi', alt: 'Convênio Cassi'},
                {img: 'img/convenios/Pro_Saude.png', title: 'Unimed', alt: 'Convênio Unimed'},
                {img: 'img/convenios/Pro_Ser.png', title: 'Unimed', alt: 'Convênio Unimed'},
                {img: 'img/convenios/Real_Grandeza.png', title: 'Bradesco Saúde', alt: 'Convênio Bradesco Saúde'},
                {img: 'img/convenios/Saude_Caixa.png', title: 'SulAmérica', alt: 'Convênio SulAmérica'},
                {img: 'img/convenios/SIS_Senado_Federal.png', title: 'Cassi', alt: 'Convênio Cassi'},
                {img: 'img/convenios/STF_Med.png', title: 'SulAmérica', alt: 'Convênio SulAmérica'},
                {img: 'img/convenios/TRT_Saude.png', title: 'Unimed', alt: 'Convênio Unimed'},
                {img: 'img/convenios/Select_Saude.png', title: 'Unimed', alt: 'Convênio Unimed'}
            ],
        },
        {
        slide2: [
                {img: 'img/convenios/Embratel.png', title: 'Bradesco Saúde', alt: 'Convênio Bradesco Saúde'},
                {img: 'img/convenios/Fapes.png', title: 'Cassi', alt: 'Convênio Cassi'},
                {img: 'img/convenios/Omint_Saude.png', title: 'Porto Seguro', alt: 'Convênio Porto Seguro'},
                {img: 'img/convenios/Proasa.png', title: 'Unimed', alt: 'Convênio Unimed'},
                {img: 'img/convenios/Plan_Assiste.png', title: 'SulAmérica', alt: 'Convênio SulAmérica'},
                {img: 'img/convenios/JMU.png', title: 'Saúde Caixa', alt: 'Convênio Saúde Caixa'},
                {img: 'img/convenios/CODEVASF.png', title: 'Saúde Caixa', alt: 'Convênio Saúde Caixa'},
                {img: 'img/convenios/Conab.png', title: 'Saúde Caixa', alt: 'Convênio Saúde Caixa'},
                {img: 'img/convenios/Pro_Social.png', title: 'Porto Seguro', alt: 'Convênio Porto Seguro'},
                {img: 'img/convenios/Serpro.png', title: 'Unimed', alt: 'Convênio Unimed'},
                {img: 'img/convenios/Tre_Saude.png', title: 'Unimed', alt: 'Convênio Unimed'},
                {img: 'img/convenios/Royal_Medlife.png', title: 'Unimed', alt: 'Convênio Unimed'},
                {img: 'img/convenios/TST.png', title: 'SulAmérica', alt: 'Convênio SulAmérica'},
                {img: 'img/convenios/Casec.png', title: 'SulAmérica', alt: 'Convênio SulAmérica'}
            ],
        }
    ]);

    // Função de rolagem do carrossel
    function scroll(direction = 'next') {
        // Obtém as listas referenciadas
        const lists = [list1Ref.value, list2Ref.value].filter(Boolean);

        lists.forEach(list=>{
            if (!list.children || list.children.length === 0) return;

            if (direction === 'next') {
                // Verificação e calculo da rolagem
                const isAtEnd = Math.abs(list.scrollLeft + list.clientWidth >= list.scrollWidth);

                // Verifica se está no final do carrossel
                if (isAtEnd) {
                    // Volta para o início do carrossel
                    list.scrollTo({ left: 0, behavior: 'smooth' });
                    return;
                } else {
                    //Rola para a direita
                    list.scrollBy({ left: list.clientWidth, behavior: 'smooth' });
                }
            } else {
                // Verificação e calculo da rolagem
                const isAtStart = list.scrollLeft === 0;

                // Verifica se está no início do carrossel
                if (isAtStart) {
                    // Vai para o final do carrossel
                    list.scrollTo({ left: list.scrollWidth, behavior: 'smooth' });
                    return;
                } else {
                    //Rola para a esquerda
                    list.scrollBy({ left: -list.clientWidth, behavior: 'smooth' });
                }
            }
        });
    }
</script>