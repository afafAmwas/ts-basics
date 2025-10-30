var userName = "Alice";
var userAge = 30;
var isLoggedIn = false;
var favoriteNumbers = [7, 14, 21];
var scores = [95, 87, 92];
console.log("\n-------------- Task 1 -----------\n");
console.log("userNmae ".concat(userName, ", userAge ").concat(userAge, ", isLoggedIn ").concat(isLoggedIn, ", favoriteNumbers ").concat(favoriteNumbers, ", scores ").concat(scores));
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
var user = createUser("John", 25, false);
console.log(user);
/////////////////////////////////////////////////////////////////////////// Task3 
console.log("\n-------------- Task 3 -----------\n");
// using unknown or defined type instead of any
function processData(data) {
    console.log(data.name); // ✅ TypeScript knows it's a string
    return data.value * 2; // ✅ TypeScript knows it's a number
}
console.log(processData({ name: "Afaf", value: 10 })); // ✅ Works fine
/////////////////////////////////////////////////////////////////////////// Task4
console.log("\n-------------- Task 4 -----------\n");
function parseUserData(userData) {
    return {
        id: userData.id,
        email: userData.email,
        profile: userData.profile
    };
}
var user1 = {
    id: 1,
    email: "masa@example.com",
    profile: { username: "masa", country: "palestine" }
};
console.log(parseUserData(user1));
/////////////////////////////////////////////////////////////////////////// Task5
console.log("\n-------------- Task 5 Functions -----------\n");
function greet(name) {
    console.log("Hello, " + name);
}
greet("Masa"); // ✅ works
// specifying the return type
function double(x) {
    return x * 2;
}
console.log(double(5));
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(10, 20));
