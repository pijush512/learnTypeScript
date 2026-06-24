let str: string = "Hello TypeScript";
console.log(str);

// !! Data Type
const name: string = "Jac";
const age: number = 23;
const isActive: boolean = true;

console.log(name, age, isActive);
// Array
let digits: number[] = [1, 5, 8, 9];
let names: string[] = ["jak", "Mika", "Lili"];
console.log(digits, names);
// Object
type userType = {
  id: number;
  name: string;
  isActive: boolean;
};

let user: userType ={
  id: 1,
  name: "Mika",
  isActive: true,
};
console.log(user);
// Function 
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

const result = addNumbers(10, 20);
console.log(result);