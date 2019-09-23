<template>
    <div v-if="valueSet" class="hello">
        <h1>{{ msg }}</h1>
        <form>
            <b-row>
                <b-col></b-col>
                <b-col>
                    <div class="form-group">
                        <input v-model.number="value" type="text" class="form-control" aria-describedby="emailHelp"
                            placeholder="Enter Offerred Salary" @keypress="isNumber($event)">
                    </div>
                    <button type="button" @click="$emit('set-employer' , value);$bvModal.show('bv-modal-example')"
                        v-on:click="getValue()" class="btn btn-primary">Submit</button>
                </b-col>
                <b-col></b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Employer',
        props: {
            msg: String,
            Salary: Number
        },
        data() {
            return {
                // Define a value data property
                value: "",
                valueSet: true
            };
        },
        computed: {},
        methods: {
            getValue() {
                this.$emit("employer-submit", this.value);
                this.valueSet = false
            },
            isNumber: function (evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>