import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, age, salary) {
        super(id, firstName, lastName, age,)
        this.salary = salary
    }
}