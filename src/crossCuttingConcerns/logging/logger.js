export default class BaseLogger{
    log(data){
        console.log("Logged " + data)
    }
}

export class ElacticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elactic" + data)
    }
}

export class MongoLogger extends BaseLogger{
   
}