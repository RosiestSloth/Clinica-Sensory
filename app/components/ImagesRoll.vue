<template>
    <div
        class="images-roll"
        ref="container"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @pointerleave="onPointerUp"
    >
        <div class="rail" ref="rail">
            <!-- Slot para permitir usar qualquer conteúdo; se não passar, usa items padrão -->
            <slot>
                <div
                    v-for="(it, i) in items"
                    :key="i"
                    class="item"
                    @click="onItemClick(it, $event)"
                >
                    {{ it.label }}
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        default: () =>
            Array.from({ length: 8 }, (_, i) => ({ label: `Item ${i + 1}` })),
    },
})

const emit = defineEmits(['select'])

const container = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const startScroll = ref(0)
const moved = ref(false)

function onPointerDown(e) {
    const el = container.value
    if (!el) return
    isDragging.value = true
    moved.value = false
    try {
        el.setPointerCapture(e.pointerId)
    } catch {}
    startX.value = e.clientX
    startScroll.value = el.scrollLeft
    el.classList.add('dragging')
}

function onPointerMove(e) {
    if (!isDragging.value || !container.value) return
    const dx = e.clientX - startX.value
    if (Math.abs(dx) > 6) moved.value = true
    container.value.scrollLeft = startScroll.value - dx
}

function onPointerUp(e) {
    const el = container.value
    if (!el) return
    try {
        el.releasePointerCapture(e.pointerId)
    } catch {}
    isDragging.value = false
    el.classList.remove('dragging')
    // pequeno atraso para evitar clique imediato após soltar
    setTimeout(() => (moved.value = false), 0)
}

function onItemClick(item, e) {
    if (moved.value) {
        e.preventDefault()
        e.stopImmediatePropagation && e.stopImmediatePropagation()
        return
    }
    emit('select', item)
}

onMounted(() => {
    // capturar movimentos fora do container também
    window.addEventListener('pointermove', onPointerMove)
})

onBeforeUnmount(() => {
    window.removeEventListener('pointermove', onPointerMove)
})
</script>