<template>
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
    <!-- Container de slides -->
    <div
      ref="carousel"
      class="flex transition-transform duration-500 ease-in-out gap-4 mr-2 cursor-grab active:cursor-grabbing"
      :style="{ transform: `translateX(${translateX}px)` }"
    >
      <!-- Slide 1 -->
      <div class="flex-shrink-0 w-full flex flex-col gap-4 mt-8">
        <div class="flex flex-row gap-4 w-full">
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 01</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 02</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-4 w-full">
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 03</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 04</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="flex-shrink-0 w-full flex flex-col gap-4 mt-8">
        <div class="flex flex-row gap-4 w-full">
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 05</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 06</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-4 w-full">
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 07</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div class="bg-white flex-1 rounded-xl p-4 shadow-md text-black/90">
            <h3 class="text-sm md:text-md xl:text-lg font-semibold">Comentário 08</h3>
            <p class="text-[0.8em] sm:text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  const carousel = ref(null)
  const startX = ref(0)
  const currentX = ref(0)
  const translateX = ref(0)
  const currentIndex = ref(0)
  const slideWidth = ref(0)
  const totalSlides = 2 // temos 2 blocos no seu template

  // Calcula a largura de cada slide dinamicamente
  onMounted(() => {
    if (carousel.value) {
      slideWidth.value = carousel.value.offsetWidth
    }
  })

  // Quando começa a arrastar
  function startDrag(e) {
    startX.value = e.touches ? e.touches[0].clientX : e.clientX
    carousel.value.style.transition = "none"
  }

  // Durante o arrasto
  function onDrag(e) {
    if (!startX.value) return
    currentX.value = e.touches ? e.touches[0].clientX : e.clientX
    const diff = currentX.value - startX.value
    translateX.value = -currentIndex.value * slideWidth.value + diff
  }

  // Quando solta
  function endDrag() {
    if (!startX.value) return
    const diff = currentX.value - startX.value

    if (Math.abs(diff) > 100) {
      if (diff < 0 && currentIndex.value < totalSlides - 1) {
        currentIndex.value++
      } else if (diff > 0 && currentIndex.value > 0) {
        currentIndex.value--
      }
    }

    translateX.value = -currentIndex.value * slideWidth.value
    carousel.value.style.transition = "transform 0.5s ease"
    startX.value = 0
  }
</script>
