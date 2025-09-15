interface IUser {
    id: number;
    name:string;
}

interface IUser {
    passwordHash:string;
}

class User1 implements IUser {
    constructor(public id:number,
         public name:string,
         public passwordHash:string){}
}