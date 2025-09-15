"use strict";
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    removeById(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
const userRepository = new Repository();
userRepository.add({
    id: 1,
    name: "John",
    email: "john@gmail.com",
});
console.log(userRepository.getAll());
//# sourceMappingURL=Repository.js.map