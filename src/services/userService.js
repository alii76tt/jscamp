export default class UserService{

    constructor(loggerService){
        this.users = []
                    // getCustomerFromDb()
        this.loggerService = loggerService
    }
    add(user){
        this.users.push(user)
        this.loggerService.log(user)
        console.log("Kullanıcı eklendi: " + user.firstName)
    }

    list(){
        return this.users
    }

    getById(){
        return this.users.find(u=>u.id ===id)
    }
}