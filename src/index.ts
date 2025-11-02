let userName: string = "Alice";
let userAge: number = 30;
let isLoggedIn: boolean = false;
let favoriteNumbers: number[] = [7, 14, 21];
let scores: Array<number> = [95, 87, 92];

console.log("\n-------------- Task 1 -----------\n")
console.log(`userNmae ${userName}, userAge ${userAge}, isLoggedIn ${isLoggedIn}, favoriteNumbers ${favoriteNumbers}, scores ${scores}`)

/////////////////////////////////////////////////////////////////////////// Task2 
console.log("\n-------------- Task 2 -----------\n")
// file: user.js
function createUser(name: string, age: number, isAdmin: boolean) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin,
        hobbies: ['reading', 'gaming']  
    };
}

const user = createUser("John", 25, false);
console.log(user);

/////////////////////////////////////////////////////////////////////////// Task3 
console.log("\n-------------- Task 3 -----------\n")

type ApiResponse = {
  name: string;
  value: number;
};

// using unknown or defined type instead of any
function processData(data: ApiResponse) {
  console.log(data.name);   
  return data.value * 2;      
}

console.log(processData({ name: "Afaf", value: 10 })); 

/////////////////////////////////////////////////////////////////////////// Task4
console.log("\n-------------- Task 4 -----------\n")

interface UserData {
  id: number;
  email: string;
  profile: object;
}

function parseUserData(userData: UserData) {
  return {
    id: userData.id,
    email: userData.email,
    profile: userData.profile
  };
}

const user1 = {
  id: 1,
  email: "masa@example.com",
  profile: { username: "masa", country: "palestine" }
};

console.log(parseUserData(user1));

/////////////////////////////////////////////////////////////////////////// Task5
console.log("\n-------------- Task 5 Functions -----------\n")
function greet(name: string) {
  console.log("Hello, " + name);
}
greet("Masa"); 

// specifying the return type
function double(x: number): number {
  return x * 2;
}

console.log(double(5)); 

//return type infered
function addNumbers(num1: number, num2: number) {
    return num1 + num2;
}

console.log(addNumbers(10, 20));
/////////////////////////////////////////////////////////////////////////// Task6 - Interfaces
console.log("\n-------------- Task 6 Interfaces -----------\n");
interface Person{
  name: string,
  age: number
};

const person1: Person = {
  name : "Masa",
  age : 23
};

console.log("the person is: ", person1);

/////////////////////////////////////////////////////////////////////////// Tas6 - functions
console.log("\n-------------- Task 6 fucntions ---------\n");

function add(num1: number, num2: number){
  return num1 + num2;
}
function subtract(num1: number, num2: number){
  return num1 - num2;
}
function multiply(num1: number, num2: number){
  return num1 * num2;
}
function divide(num1: number, num2: number){
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

function displayValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`You passed a string:" ${value} " with length:`, value.length);
  } else {
    console.log("You passed a number, its value is: ", value);
  }
}

displayValue("Masa"); 
displayValue(5); 
