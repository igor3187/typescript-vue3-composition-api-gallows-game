import {computed, type Ref, ref} from "vue";
import GameNotification from "@/components/GameNotification.vue";

export const useLetters = (word: Ref<string>, notification: Ref<InstanceType<typeof GameNotification> | null>) => {
    const letters = ref<string[]>([]);
    const correctLetters = computed(() => letters.value.filter(x => word.value.includes(x)));
    const wrongLetters = computed(() => letters.value.filter(x => !word.value.includes(x)));
    const isLose = computed(() => wrongLetters.value.length === 6);
    const isWin = computed(() => [...word.value].every(x => correctLetters.value.includes(x)));
    const resetLetters = () => letters.value = [];
    const addLetters = (key: string) => {
        if (/^[A-Za-z]+$/.test(key)) {
            if (wrongLetters.value.includes(key)) {
                notification.value?.open()
                setTimeout(() => notification.value?.close(), 2000)
            } else {
                notification.value?.close();
                letters.value.push(key.toLowerCase());
            }
        }
    }

    return {
        letters,
        correctLetters,
        wrongLetters,
        isLose,
        isWin,
        addLetters,
        resetLetters,
    }
}