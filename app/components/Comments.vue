<template>
  <!-- Controle do Carrossel -->
  <div
    class="relative w-full overflow-hidden select-none"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
  >
    <div
      ref="carousel"
      class="flex gap-4 cursor-grab active:cursor-grabbing"
      :class="{ 'transition-transform duration-500 ease-in-out': !isDragging }"
      :style="{ transform: `translateX(${translateX}px)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="flex-shrink-0 w-full flex flex-col gap-4 mt-8"
      >
        <div
          v-for="(row, rowIndex) in slide.rows"
          :key="rowIndex"
          class="flex flex-col sm:flex-row gap-4 w-full "
        >
          <div
            v-for="(card, cardIndex) in row"
            :key="cardIndex"
            class="bg-white flex flex-col flex-1 rounded-xl p-4 text-black/90"
          >
            <div class="relative h-30 lg:h-40">
              <h3 class="text-sm md:text-md xl:text-lg font-semibold flex items-center gap-2">
                <img :src="googleLogo" alt="Google" class="size-5" /> 
                {{ card.title }}
              </h3>
              <div class="absolute top-0 right-0 flex items-center gap-1">
                <img
                  v-for="n in card.rating"
                  :key="n"
                  :src="ratingStar"
                  alt="Estrela de avaliação"
                  class="size-4"
                />
              </div>
              <p class="text-[0.8em] sm:text-sm md:text-md mt-1 overflow-hidden line-clamp-4 md:line-clamp-5 text-justify">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, nextTick } from "vue";

  // SVGs agora ficam em /public
  const ratingStar = '/svg/Rating_Star.svg';
  const googleLogo = '/svg/Google_Logo.svg';

  // --- STATE ---
  const carousel = ref(null);
  const translateX = ref(0);
  const currentIndex = ref(0);
  const slideWidth = ref(0);
  const gap = ref(0);
  const isDragging = ref(false);
  const startX = ref(0);
  const startY = ref(0);
  const currentDragX = ref(0);

  // --- DADOS DO CARROSSEL ---
  const slides = ref([
    {
      rows: [
        [{ title: "Renata Alves", text: "Meu pequeno está realizando terapias de fonoaudióloga e Terapia Ocupacional, ambas são maravilhosas e graças a elas, já estamos dando os primeiros passos para a evolução do meu filho. Só tenho a agradecer a todos pelo carinho e receptividade com filho. Desde as meninas da recepção e a todos os terapeutas meu muito obrigada, por realizarem o seu trabalho com tanto amor, carinho e profissionalismo 💙", rating: 5 }, 
        { title: "Irisley Nunes", text: "Meu filho está fazendo a terapia de cabine fechada (TPAC) com Marcelo e tem desenvolvido muito suas habilidades. Excelente profissional. Muito atencioso e cuidadoso. Super recomendo a clínica para as mães que estão em busca de bons profissionais e local acolhedor.", rating: 5 }],
      ],
    },
    {
      rows: [
        [{ title: "Márcia Daniele", text: "Tenho apenas elogios a fazer a essa clínica. Desde os profissionais da recepção até as terapeutas, todos são incríveis. Os profissionais são excelentes e cuidam das crianças com muito carinho. Tenho grande admiração pelos fonoaudiólogos Marcelo e Fabiane, profissionais maravilhosos. E a psicóloga Anne é muito atenciosa, dedicada e carinhosa. Uma excelente profissional.", rating: 5 }, { title: "Laís Lima", text: "Parabéns a equipe da clinica Sensory pelo excelente trabalho, um ambiente acolhedor, profissionais preparados, é nítida a evolução do meu filho ( Não tive experiências boas em outras clinicas). Super indico para todos que precisam.", rating: 5 }],
      ],
    },
    {
      rows: [
        [{ title: "Brenda Macedo", text: "Um lugar maravilhoso, meu filho tem evoluído cada vez mais, ótimos profissionais desde a recepção e todos os profissionais que atendem!!! Muito obrigada pelo o cuidado com meu filho.", rating: 5 }, 
        { title: "Andreia Silva", text: "Só tenho elogios e agradecimentos aos profissionais da Sensory, começando pela recepção que tem um atendimento humanizado incrível, Michelle principalmente, nunca ví alguém tão dedicada, carinhosa que vibra com cada evolução das crianças que fazem terapia,confortando e aquecendo o coração dos pais.Parabéns de verdade 👏🫰🏻 Graças ao atendimento dedicado amoroso dos terapeutas,minha filha está tendo um desenvolvimento escolar excepcional, fazendo essa caminhada tão difícil...", rating: 5 }],
      ],
    },
    {
      rows: [
        [{ title: "Sarah Melo", text: "Meu filho é autista não verbal e tinha nenhum desenvolvimento na fala. Desde que começou seu atendimento com o fonoaudiólogo, ele adquiriu todos os pré-requisitos da fala, e depois de 5 meses de acompanhamento ele já está falando várias palavrinhas. O profissional Marcelo foi chave fundamental para essa conquista! Indico a clínica para todos aqueles que, assim como eu, estão cansados do atendimento precário para autistas. Ser atendida por profissionais que visam o paciente e não o financeiro, é raridade. Gratidão a clínica Sensory!", rating: 5 }, { title: "Danielle Monyke", text: "Clínica com excelentes profissionais! Atendimento humanizado e excelência qualidade! Meu filho gosta muito de ir para terapia!", rating: 5 }],
      ],
    },
  ]);

  const totalSlides = slides.value.length;

  // --- MÉTODOS ---
  const updateSlideWidth = () => {
    if (carousel.value) {
      const style = window.getComputedStyle(carousel.value);
      gap.value = parseFloat(style.gap) || 0;
      slideWidth.value = carousel.value.offsetWidth;
      translateX.value = -currentIndex.value * (slideWidth.value + gap.value);
    }
  };

  const getDragX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const startDrag = (e) => {
    isDragging.value = true;
    startX.value = getDragX(e);
    startY.value = e.touches ? e.touches[0].clientY : e.clientY;
    currentDragX.value = translateX.value;
  };

  const onDrag = (e) => {
    if (!isDragging.value) return;
    
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const diffX = getDragX(e) - startX.value;
    const diffY = currentY - startY.value;
    
    // Só previne comportamento padrão se for movimento horizontal (swipe)
    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
      translateX.value = currentDragX.value + diffX;
    }
  };

  const endDrag = (e) => {
    if (!isDragging.value) return;
    isDragging.value = false;
    
    const dragThreshold = slideWidth.value / 4; // Limite de 25% para trocar de slide
    const diff = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - startX.value;

    if (Math.abs(diff) > dragThreshold) {
      if (diff < 0 && currentIndex.value < totalSlides - 1) {
        currentIndex.value++;
      } else if (diff > 0 && currentIndex.value > 0) {
        currentIndex.value--;
      }
    }

    translateX.value = -currentIndex.value * (slideWidth.value + gap.value);
    startX.value = 0;
  };

  // --- LIFECYCLE HOOKS ---
  onMounted(() => {
    nextTick(() => {
      updateSlideWidth();
    });
    window.addEventListener("resize", updateSlideWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSlideWidth);
  });
</script>