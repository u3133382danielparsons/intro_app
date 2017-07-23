// var React = require('react')
// var ReactDOM = require('react-dom')
// var shows = require('./shows.json')
// var Show = require('./Show')
//
//
// ReactDOM.render(
//   <Show shows={shows} />,
//   document.getElementById('root')
// )
/* Function Constructor */
var Employee = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName

}


Employee.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName
}
var sam = new Employee('Sam', 'Williams')
// console.log(sam)
// console.log(sam.getFullName())
console.log(Employee.prototype === sam.__proto__)


/* ES6 Class */
class EmployeeES6 {
  constructor(firstName,lastName) {
    // console.log('Inside EmployeeES6')
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(){
    return this.firstName + ' ' + this.lastName
  }
}

var sammy = new EmployeeES6('Sammy', 'Winchester')
// console.log(sammy)
// console.log(sammy.getFullName())
console.log(EmployeeES6.prototype === sammy.__proto__)
