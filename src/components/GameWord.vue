<script setup lang="ts">
interface Props {
    word: string;
    correctLetters: string[];
}

defineProps<Props>()
</script>
<template>
    <div class="word">
        <span v-for="(symbol, index) in word"
              :key="index"
              class="letter"
        >
            {{ correctLetters.includes(symbol) ? symbol : '' }}
        </span>
    </div>
</template>
<style scoped>

</style>