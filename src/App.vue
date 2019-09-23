<template>
  <div id="app">
    <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Welcome to the Salary Negotiation App!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Employee" active>
            <Employee msg="Enter Your Salary Expectation" v-bind:Salary="employeeSalary"
              v-on:set-employee="setEmployeeSalary" />
          </b-tab>
          <b-tab title="Employer">
            <Employer msg="Enter Maximum Salary" v-bind:Salary="employerSalary" v-on:set-employer="setEmployerSalary"
              v-on:employer-submit="employerSalarySubmitted" />
            <Popup :msg="result" :employeeSalary="employeeSalary" :employerSalary="employerSalary" />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import Employee from './components/Employee.vue'
  import Employer from './components/Employer.vue'
  import Popup from './components/Popup.vue'
  import axios from 'axios';

  export default {
    name: 'app',
    components: {
      Employee,
      Employer,
      Popup
    },
    data() {
      return {
        employeeSalary: 0,
        employerSalary: 0,
        result: '',
        weatherInfo: ''
      }
    },
    methods: {
      setEmployeeSalary(val) {
        console.log('event fired', val);
        this.employeeSalary = val;
        console.log(this.employeeSalary)
      },
      setEmployerSalary(val) {
        this.employerSalary = val;
      },
      employerSalarySubmitted() {
        if (this.employeeSalary <= this.employerSalary) {
          this.result = 'Success!'
        } else {
          this.result = 'Faliure!'
        }
        this.getWeather();
        console.log('asdasda', this.weatherInfo)
      },
      getWeather() {
        return axios
          .get(
            'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
            .then(response => (this.weatherInfo = response, console.log(this.weatherInfo)))
          }
      }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>