<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GameFigure from "@/components/GameFigure.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameWord from "@/components/GameWord.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import { ref, watch } from "vue";
import {userRandomWord} from "@/composables/userRandomWord";
import {useLetters} from "@/composables/useLetters";
import {useNotification} from "@/composables/useNotification";

const popup = ref<InstanceType<typeof GamePopup> | null>(null);
const { word, getRandomWord } = userRandomWord();
const { notification } = useNotification();
const { wrongLetters, correctLetters, isLose, isWin, addLetters, resetLetters } = useLetters(word, notification);
const restart = () => {
    getRandomWord();
    resetLetters();
    popup.value?.close();
};

watch(wrongLetters, () => {
    if (isLose.value) {
        popup.value?.open('lose');
    }
});

watch(correctLetters, () => {
    if (isWin.value) {
        popup.value?.open('win');
    }
});

window.addEventListener("keydown", ({key}) => {
    if (isLose.value || isWin.value) {
        return
    }

    addLetters(key);
});
</script>

<template>
    <GameHeader />
    <div class="game-container">
        <GameFigure :wrongLettersCount="wrongLetters.length"/>
        <GameWrongLetters :wrongLetters="wrongLetters" />
        <GameWord :word="word" :correctLetters="correctLetters"/>
    </div>
    <!-- Container for final message -->
    <GamePopup ref="popup" :correctWord="word" @restart="restart"/>
    <!-- Notification -->
    <GameNotification ref="notification"/>
</template>

<style scoped>

</style>
