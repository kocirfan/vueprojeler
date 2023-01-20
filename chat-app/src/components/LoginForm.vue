<template>
  <form @submit.prevent="handelSubmit">
    <input type="email" required placeholder="E-Mail" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from "vue";
import useLogin from "@/composables/useLogin";
export default {

    setup(props, context){      
        const email = ref('');
        const password = ref('');
        const {error, login} = useLogin();
        const handelSubmit = async ()=> {
            await login(email.value, password.value);
            if(!error.value){
              context.emit("login");
            }
        };


        return{email, password, handelSubmit, error}
    }
}
</script>

<style>

</style>