export class customError extends Error{
    constructor(message , code){
        super(message);
        this.code = code;
        this.name = "customeError"
    }
}

