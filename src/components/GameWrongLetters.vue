<script setup lang="ts">
interface Props {
    wrongLetters: string[],
}

defineProps<Props>();
</script>

<template>
    <div v-show="wrongLetters.length" class="wrong-letters-container">
        <div class="wrong-letters">
            <p>Ошибки</p>
            <span v-for="(symbol, index) in wrongLetters" :key="index">
                {{index === wrongLetters.length -1 ? symbol : `${symbol}, `}}
            </span>
        </div>
    </div>
</template>

<style scoped>

</style>