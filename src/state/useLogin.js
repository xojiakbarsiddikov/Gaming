import { defineStore } from "pinia";
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";

export const useLogin = defineStore("loginStore",() => {
    const checked = ref(true);
    const router = useRoute();
    const form = reactive({
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
    const login = () => {
        router.push({path: "/"})
    }
})