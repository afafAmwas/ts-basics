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
    console.log(data.name);
    return data.value * 2;
}
console.log(processData({ name: "Afaf", value: 10 }));
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
greet("Masa");
// specifying the return type
function double(x) {
    return x * 2;
}
console.log(double(5));
//return type infered
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(10, 20));
/////////////////////////////////////////////////////////////////////////// Task6 - Interfaces
console.log("\n-------------- Task 6 Interfaces -----------\n");
;
var person1 = {
    name: "Masa",
    age: 23
};
console.log("the person is: ", person1);
/////////////////////////////////////////////////////////////////////////// Tas6 - functions
console.log("\n-------------- Task 6 fucntions ---------\n");
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}
console.log("add 10 + 5 = ", add(10, 5));
console.log("subtrac 10 - 5 ", subtract(10, 5));
console.log("multiply 10*5 : ", multiply(10, 5));
console.log("divide: 10/5 ", divide(10, 5));
/////////////////////////////////////////////////////////////////////////// Task7  
console.log("\n-------------- Task 7 Type Narrowing -----------\n");
function displayValue(value) {
    if (typeof value === "string") {
        console.log("You passed a string:\" ".concat(value, " \" with length:"), value.length);
    }
    else {
        console.log("You passed a number, its value is: ", value);
    }
}
displayValue("Masa");
displayValue(5);
