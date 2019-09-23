<template>
  <div v-if="valueSet" class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <b-row>
        <b-col></b-col>
        <b-col>
          <div class="form-group">
            <input v-model.number="value" type="text" class="form-control" aria-describedby="emailHelp"
              placeholder="Enter Expected Salary" @keypress="isNumber($event)">
          </div>
          <button type="button" @click="$emit('set-employee' , value)" v-on:click="getValue()"
            class="btn btn-primary">Submit</button>
        </b-col>
        <b-col></b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
  import {
    required,
    minLength,
    between
  } from 'vuelidate/lib/validators'
  export default {
    name: 'Employee',
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
    validations: {
      form: {
        value: {
          required,
          minLength: minLength(4)
        }
      }
    },
    computed: {},
    methods: {
      getValue() {
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