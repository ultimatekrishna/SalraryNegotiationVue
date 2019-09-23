<template>
  <div>
  <!-- <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button> -->

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
      {{msg}}
    </template>
    <div class="d-block text-center">
    </div>
    <div>Maximum Offer Was - {{employerSalary}}</div>
    <div>Minimum Expected Salary Was - {{employeeSalary}}</div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
</div>
</template>

<script>
  export default {
    name: 'Popup',
    props: {
      msg: String,
      employeeSalary:Number,
      employerSalary:Number
    },
    computed: {},
    methods: {
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