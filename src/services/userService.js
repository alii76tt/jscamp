import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {

    constructor(loggerService) {
        //this.users = []
        // getCustomerFromDb()
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            this.checkUserType(user,"Wrong user type")
        }
    }


    checkUserAge(user, hasErrors){
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number.`, user))
        }
        return hasErrors
    }

    checkCustomerValidityForErrors(user) {
        let hasErrors = this.checkUserValidityForErrors(user, "id firstName lastName age")
        this.checkUserAge(user, hasErrors)
        return hasErrors
    }

    checkEmployeeValidityForErrors(user) {
        let hasErrors = this.checkUserValidityForErrors(user, "id firstName lastName age salary")
        this.checkUserAge(user, hasErrors)
        return hasErrors
    }

    checkUserValidityForErrors(user, fields) {
        let requiredFields = fields.split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required.`, user))
            }
        }
        return hasErrors
    }

    add(user) {
        this.checkUserType(user, "This user can not be added. Wrong user type")
        this.loggerService.log(user)
        console.log("Kullanıcı eklendi: " + user.firstName)
    }

    checkUserType(user, message) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break

            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break
            default:
                this.errors.push(new DataError(message, user))
                break
        }
    }

    list() {
        return this.users
    }

    getById() {
        return this.users.find(u => u.id === id)
    }

    getCustomerSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if (customer1.firstName<customer2.firstName) {
                return -1
            }else if (customer1.firstName===customer2.firstName) {
                return 0
            }else{
                return 1
            }
        })
    }
}