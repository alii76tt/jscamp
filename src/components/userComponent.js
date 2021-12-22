import BaseLogger from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("component")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user = new User(1,"Ali","Iltizar")

userService.add(user)
console.log(userService.list())
