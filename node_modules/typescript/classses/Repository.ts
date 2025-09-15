type Identifiable = {
    id:number;
};

class Repository <T extends Identifiable> {
    private items:T[] = [];

    add(item:T){
        this.items.push(item);
    }



    getAll(): T[] {
        return this.items;
    }

    removeById(id:number):void {
        this.items = this.items.filter((item) => item.id !==id);
    }
}


type User = Identifiable & {
    id: number;
    name: string;
    email: string;
}

const userRepository = new Repository<User>();

userRepository.add({
    id:1,
    name:"John",
    email: "john@gmail.com",

})

console.log(userRepository.getAll());