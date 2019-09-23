import Employee from '../components/Employee.vue'
import Vue from 'vue';

describe('Employee.vue', () => {
  const Constructor = Vue.extend(Employee);
  const EmployeeComponent = new Constructor().$mount();
  it('displays items from the list', () => {
    // our test goes here
    expect(ListComponent).tobeTruthy();
  })
})