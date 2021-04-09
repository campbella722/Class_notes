let manager = {
    firstName: "Brad"
    lastName: "Titus"
    birthYear: 1980
// First way requires paramet of birthYear from outside
// setAge: function(birthYear) {
//      return 2021 - birthYear
// }
// Second way takes propert from this.birthYear
// setAge: function(){
//      return 2021 - this.birthYear
// }
setAge: function() {
        this.age = 2021 - this.birthYear //creates new age property with value of function calculation once it has been called
    }
}
console.log("---------------------")
// console.log(manager.setAge(1990))
// console.log(manager.setAge())
console.log(this)//is a global object
manager.setAge()
console.log(manager.age)