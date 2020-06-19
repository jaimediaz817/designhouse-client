<template>
    <div> 
        <input 
            class="form-control form-control-lg font-14 fw-300"            
            :type="inputType"
            :value="value"
            :placeholder="placeholder"        
            :class="{ 'is-invalid' : form.errors.has(field) }"    
            @input="handleInput"
        />
        <has-error :form="form" :field="field"></has-error>
    </div>
</template>

<script>
export default {
    props: {
        form: {
            type: Object,
            required: true
        },
        field: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: ''
        },
        placeholder: 
        {
            type: String,
            default: ''
        },
        inputType:
        {
            type: String,
            default: 'text'
        },
        readOnly:
        {
            type: Boolean,
            default: false
        }
    },

    methods:
    {
        handleInput(e) {
            this.$emit('input', e.target.value)
            console.log(e.target.value)
        }
    },
    mounted() {
        //console.log(this.$attrs)
    }    
/* 
                    <input
                        type="password"
                        name="password"
                        class="form-control form-control-lg font-14 fw-300"
                        placeholder="Password"
                        v-model="form.password"
                        :class="{ 'is-invalid' : form.errors.has('password') }"
                    />       
*/
}
</script>

<style>

</style>