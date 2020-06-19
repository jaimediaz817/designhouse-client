<template>
    <!-- Section Cards -->
    <section class="authentication">
        <div class="auth-body">
            <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                Register
            </h1>
            <form class="auth-form" @submit.prevent="submit">

                <alert-success :form="form">
                    We have sent you an email to activate your account
                </alert-success>

                <div class="form-group">
                    <input
                        type="text"
                        v-model.trim="form.name"
                        name="name"
                        class="form-control form-control-lg font-14 fw-300"
                        placeholder="Full Name"
                        :class="{ 'is-invalid': form.errors.has('name')}"
                    />
                    <has-error :form="form" field="name"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="text"
                        name="username"
                        v-model.trim="form.username"
                        class="form-control form-control-lg font-14 fw-300"
                        placeholder="Username"
                        :class="{ 'is-invalid': form.errors.has('username')}"
                    />
                    <has-error :form="form" field="username"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="text"
                        name="email"
                        v-model.trim="form.email"
                        class="form-control form-control-lg font-14 fw-300"
                        placeholder="Email"
                        :class="{ 'is-invalid': form.errors.has('email')}"
                    />
                    <has-error :form="form" field="email"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="password"
                        name="password"
                        v-model.trim="form.password"
                        class="form-control form-control-lg font-14 fw-300"
                        placeholder="Password"
                        :class="{ 'is-invalid': form.errors.has('password')}"
                    />
                    <has-error :form="form" field="password"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="password"
                        name="password_confirmation"
                        v-model.trim="form.password_confirmation"
                        class="form-control form-control-lg font-14 fw-300"
                        placeholder="Confirm Password"
                    />
                </div>
                
                <div class="text-right">

                    <button 
                        type="submit" 
                        :disabled="form.body"
                        class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"                        
                    >
                        <span v-if="form.busy">
                            <i class="fas fa-spinner fa-spin"></i>
                        </span>                        
                        Register
                    </button>

                </div>
                <p class="font-14 fw-400 text-center mt-4">
                    Already have an account?
                    <nuxt-link class="color-blue" :to="{ name: 'login' }"> Login</nuxt-link>
                </p>
            </form>
        </div>
    </section>
    <!-- End Cards -->
</template>

<script>
export default {
    middleware: ['guest'],
    data() 
    {
        return {
            form: this.$vform({
                username: '817',
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            })
        }
    },

    methods: 
    {
        submit() {
            console.log('submiting')
            this.form.post(`/register`)
                .then(res => {
                    this.form.reset();
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style>

</style>