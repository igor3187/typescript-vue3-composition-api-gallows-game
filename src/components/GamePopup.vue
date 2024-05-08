<script setup lang="ts">
import {ref} from "vue";
import type {TGameStatus} from "@/types/TGameStatus";

interface GamePopupProps {
    correctWord: string,
}

defineProps<GamePopupProps>();

const gameStatus = ref<TGameStatus | null>(null)
const isVisible = ref(false);

const open = (status: TGameStatus) => {
    gameStatus.value = status;
    isVisible.value = true;
}
const close = () => isVisible.value = false;

const emit = defineEmits<{
    (e: 'restart'): void
}>()

defineExpose({
    open,
    close,
    isVisible,
})
</script>

<template>
    <div v-if="isVisible" class="popup-container">
        <div class="popup">
            <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! 😃</h2>
            <div v-else>
                <h2 >Вы проиграли. 😕</h2>
                <h3>...имя: {{ correctWord }}</h3>
            </div>
            <button @click="emit('restart')">Сыграть еще раз</button>
        </div>
    </div>
</template>

<style scoped>

</style>