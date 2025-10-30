"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "Alice";
let userAge = 30;
let isLoggedIn = false;
let favoriteNumbers = [7, 14, 21];
let scores = [95, 87, 92];
console.log("\n-------------- Task 1 -----------\n");
console.log(`userNmae ${userName}, userAge ${userAge}, isLoggedIn ${isLoggedIn}, favoriteNumbers ${favoriteNumbers}, scores ${scores}`);
/////////////////////////////////////////////////////////////////////////// Task2 
console.log("\n-------------- Task 2 -----------\n");
// file: user.js
function createUser(name, age, isAdmin) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin,
        hobbies: ['reading', 'gaming']
    };
}
const user = createUser("John", 25, false);
console.log(user);
//# sourceMappingURL=index.js.map