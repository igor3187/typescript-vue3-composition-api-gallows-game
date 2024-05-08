import {getRandomName} from "@/api/getRandomName";
import {ref} from "vue";

export const userRandomWord = () => {
    const word = ref('');
    const getRandomWord = async () => {
        try {
            const name = await getRandomName();
            word.value = name.toLowerCase();
        } catch (err) {
            console.log(err);
        }
    }

    getRandomWord();

    return {
        word,
        getRandomWord,
    }
}