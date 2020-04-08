<template>
    <v-container>
        <v-form
            @submit.prevent="login">

            <v-text-field
            v-model="form.email"
            label="E-mail"
            type="email"
            ></v-text-field>

            <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            ></v-text-field>

            <v-btn
            color="success"
            type="submit"
            class="mr-4"
            >
            Login
            </v-btn>

            <router-link to="/signup">
                <v-btn>Sign Up</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            form: {
                email:null,
                password:null
            }
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name:'forum'})
        }
    },
    methods: {
        login(){
            User.login(this.form)
            // axios.post('/api/auth/login',this.form)
            // .then(res => {
            //     User.login(this.form)
            //     this.$router.push({name:'forum'})
            // })
            // .catch(error => console.log(error, 'error'))
            
        }
    }
}
</script>

<style>

</style>