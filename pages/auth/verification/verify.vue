<template>
    <!-- Section Cards -->
    <section class="authentication">
        <div class="auth-body">
            <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                Email Verification
            </h1>
            <form class="auth-form">                            
                <div class="form-group" v-if="success">
                    <div class="alert alert-success">                        
                        {{ status }}
                    </div>
                    <a href="#">Proceed to Login</a>
                </div>
                <div class="form-group" v-else>
                    <div class="alert alert-danger">
                        {{ status }}
                    </div>
                    <nuxt-link to="/login">Proceed to Login</nuxt-link>
                </div>
            </form>
        </div>
    </section>    
</template>

<script>
export default {
    middleware: ['guest'],
    async asyncData({ params, query, app }) {
        const q = await Object.keys(query)
            .map(k => `${k}=${query[k]}`)
            .join('&');

        try {
            console.log("parh: " , `/verification/verify/${params.id}?${q}`)
            const {data} = await app.$axios.post(
                `/verification/verify/${params.id}?${q}`            
            ); 

            return {
                success: true,
                status: data.message
            }
        } catch (e) {
            console.info("e presentado: ")
            console.log(e.response.data.errors.message)
            return {
                success: false,
                status: e.response.data.errors.message
            }
        }

        return { name: q };
    },
};
</script>

<style>

</style>