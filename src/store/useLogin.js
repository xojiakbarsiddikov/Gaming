import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import router from "../router";
import cookie from 'vue-cookies'

export const useLogin = defineStore("loginStore",() => {
    const checked = ref(false);
    const password = ref("password")
    const form = reactive({
        email: "",
        password: ""
    });
    const checkbox = () => {
        checked.value = !checked.value
        if(checked.value === true) {
            password.value = "text"
        } else {
            password.value = "password"
        }
    };
    const login = () => {
        const email = cookie.get("email")
        const password = cookie.get("password")
        if(form.email === email && form.password === password) {
            router.push({path: "/"})
            console.log('успешно')
        } else {
            console.log('не успешно')
            router.push({path: "/login"})
        }
    };

    return {
        form, checkbox, login, checked, router, password
    }
})