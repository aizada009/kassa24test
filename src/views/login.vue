<template>
    <div id="login">
        <div class="wrap">
        <h1>Login</h1>
        <input class="form-input" type="text" name="username" v-model="input.username" placeholder="Username" />
        <input class="form-input" type="password" name="password" v-model="input.password" placeholder="Password" />
        <button class="btn" type="button" v-on:click="login()">Login</button>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "home" });
                    } /*else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }*/
            }
        }
    }}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 2px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 80px;
        padding: 30px;
    }
    .wrap {
        margin: 0 auto;
        padding: 20px;
        background: #ffffff;
    }
    .form-input{
        background: #fafafa;
        border: 1px solid #eeeeee;
        padding: 15px;
        width: 100%;
    }

    .btn{
        background: rgb(76, 119, 175);;
        border: 2px solid #ddd;
        color: #ffffff;
        padding: 20px;
        width: 150px;
        margin-top: 15px;
        text-transform: uppercase;
    }   


</style>