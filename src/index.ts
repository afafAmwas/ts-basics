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

