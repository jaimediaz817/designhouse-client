<template>
    <!-- Section Cards -->
    <section class="authentication">
        <div class="auth-body">
            <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                Login
            </h1>

            <form class="auth-form" action="" method="" @submit.prevent="submit">

                <alert-error :form="form" v-if="form.errors.has('message')">
                    {{ form.errors.get('message') }}
                    <nuxt-link :to="{ name: 'verification.resend' }">Resend verification email</nuxt-link>
                </alert-error>

                <div class="form-group">
                    <base-input
                        :form="form"              
                        field="email"
                        v-model="form.email"
                        placeholder="Email"
                        inputType="email"
                    >
                    </base-input>
                </div>

                <div class="form-group">
                    <base-input
                        :form="form"
                        field="password"
                        v-model="form.password"
                        placeholder="Password"
                        inputType="password"
                    ></base-input>                 
                    <has-error :form="form" field="password"></has-error>
                </div>
                <div class="mt-4 mb-4 clearfix">

                    <!-- <a class="forgot-pass color-blue font-14 fw-400" href="#"> Forgot password? </a> -->

                    <nuxt-link 
                        class="forgot-pass color-blue font-14 fw-400"
                        to="/password/email"
                    >
                        Forgot password?
                    </nuxt-link>
                </div>
                <div class="text-right">

                    <!-- <button 
                        type="submit" 
                        :disabled="form.body"
                        class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"                        
                    >
                        <span v-if="form.busy">
                            <i class="fas fa-spinner fa-spin"></i>
                        </span>                        
                        Login
                    </button> -->
                    <base-button
                        :block="false"
                        type="primary"
                        :loading="this.loading"
                    >
                        Login
                    </base-button>                    

                </div>
                <p class="font-14 fw-400 text-center mt-4">
                    Don't have an account yet?
                    <nuxt-link class="color-blue" :to="{ name: 'register' }"> Create an account</nuxt-link>
                    <!-- <a class="color-blue" href="#"> Create an account</a> -->
                </p>
            </form>

        </div>
    </section>
    <!-- End Cards -->  
</template>

<script>
export default {
    middleware: ['guest'],
    data(){
        return {
            form: this.$vform({
                email: '',
                password: ''
            }),
            loading: false,
        }
    },

    methods: {
        submit () {
            // Overrides `Authorization` header with new value
            // this.$axios.setHeader('Content-Type', 'application/json');
            //this.$axios.setHeader('Accept', 'application/json');

            this.loading = true;

            console.log('submiting')
            this.$auth.loginWith('local', {
                data: this.form
            }).then(res => {
                console.log(res)

            }).catch(e => {
                console.log("error al inciar sesion: ", e)
                this.form.errors.set(e.response.data.errors);
                console.log(e.response.data.errors);
            })
            .finally(() => { this.loading = false })
        }
    },
    created () {
        //console.log("test", this.$router)
    }
}
</script>

<style>

</style>