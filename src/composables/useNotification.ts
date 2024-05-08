import {ref} from "vue";
import GameNotification from "@/components/GameNotification.vue";

export const useNotification = () => {
    const notification = ref<InstanceType<typeof GameNotification> | null>(null);

    return {
        notification,
    };
}