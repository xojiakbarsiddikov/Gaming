import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import router from "../router";
import cookie from 'vue-cookies'

export const useRegister = defineStore("loginStore",() => {
    const checked = ref(false);
    const password = ref("password")
    const form = reactive({
        username: "",
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
    const register = () => {
        router.push({path: "/login"})
        cookie.set("username", form.username, "200000d")
        cookie.set("email", form.email, "200000d")
        cookie.set("password", form.password, "200000d")
        // window.location.reload()
    };

    return {
        form, checkbox, register, checked, router, password
    }
})