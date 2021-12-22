import BaseLogger from "../crossCuttingConcerns/logging/logger.js"
//import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("Component")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user = new User(1,"Ali","Iltizar")

userService.add(user)
console.log(userService.list())

console.log("----------------------HAFTA 4---------------------")

userService.load()

//let customerToAdd = new Customer(6,"Mehmet","Kara",25)
//customerToAdd.type = "customer"
//console.log(userService.customer)
//console.log(userService.employees)
//userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomerSorted())
