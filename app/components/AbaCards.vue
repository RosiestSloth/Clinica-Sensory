<template>
    <div  v-for="(description, title) in cards" :key="description.title" class="">
        <ul>
            <li>
                <h3 class="">
                    {{ cards[title].title }}
                </h3>
            </li>
        </ul>

        <p class="">
            {{ description.description }}
        </p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const cards = ref([
        {
            title: 'Card 1',
            description: 'Descrição do card 1',
        },
        {
            title: 'Card 2',
            description: 'Descrição do card 2',
        },
        {
            title: 'Card 3',
            description: 'Descrição do card 3',
        }
    ])
</script>