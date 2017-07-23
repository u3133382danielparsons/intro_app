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

var Engineer = function(firstName,lastName,field){
  Employee.call(this, firstName, lastName)
  this.field = field
}

Engineer.prototype = Object.create(Employee.prototype)
Engineer.prototype.constructor = Engineer

Engineer.prototype.getDescription = function(){
  return this.getFullName() + ' is ' + this.field + 'Engineer'
}

Engineer.greeting = function() { return "say Hi!"}

// console.log(Engineer.greeting())

var sam = new Engineer('Sam', 'Williams', 'Software')
// console.log(sam)
// console.log(sam)
// console.log(sam.getFullName())
// console.log(sam.getDescription())



/* ES6 Class */
class EmployeeES6 {
  constructor(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(){
    return this.firstName + ' ' + this.lastName
  }
}

class EngineerES6 extends EmployeeES6 {
  constructor(firstName,lastName,field) {
    super(firstName,lastName)
    this.field = field
  }
  static greeting() {
    return 'sayHi'
  }
  getDescription() {
    return super.getFullName() + ' is ' + this.field + 'Engineer'
  }
}

// EngineerES6.greeting = function() { return "say Hi!"}
console.log(EngineerES6.greeting())
var sammy = new EngineerES6()
console.log(sammy.greeting())
// console.log(sammy.getFullName())
// console.log(sammy.getDescription())
