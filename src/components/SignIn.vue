<template>
    <div class="sign-in-form">
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>User name</label>
            <v-input required v-bind:value="login" @input="login = $event.target.value" type="text"
                placeholder="Login" />
            <label>Password</label>
            <v-input required v-bind:value="password" @input="password = $event.target.value" type="password"
                placeholder="Password" />
            <v-button @click="checkLogin" type="submit">Login</v-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'sign-in',
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        checkLogin() {
            if ((this.login == "admin") && (this.password == "admin")) {
                this.$emit('logIn', true);
            } else {
                alert("Неверный логин/пароль!")
            }
        }
    }
}
</script>

<style>
.sign-in-form {
    position: absolute;
    top: 30%;
    left: 40%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: teal;
    border: 1px solid teal;
    border-radius: 5px;
    padding: 35px;
    margin: 5px 0 5px 0;
}

.login {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>