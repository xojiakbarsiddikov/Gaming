import { defineStore } from "pinia";
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";

export const useRegister = defineStore("loginStore",() => {
    const checked = ref(true);
    const router = useRoute();
    const form = reactive({
        username: "",
        email: "",
        password: ""
    });
    const checkbox = () => {
        let password = document.querySelector('.password')
        if(checked.value === true) {
            password.type = "text"
        } else {
            password.type = "password"
        }
    };
    const register = () => {
        router.push({path: "/login"})
    }
})