// : JavaScript Closures---------------------------------------1st assignment
// Instructions:
// 1. Create a JavaScript function called counter that returns another function.
// 2. The returned function should increment a counter variable defined in counter
// function by 1 each time it is called.
// 3. Implement the counter function using closures.
// 4. Create two instances of the counter function: counter1 and counter2.
// 5. Call counter1 three times and display the result after each call.
// 6. Call counter2 five times and display the result after each call.

// function counter() {
//     let count = 0;
  
//     function increment() {
//       count++;
//       console.log(count);
//     }
  
//     return increment;
//   }
//   const counter1 = counter();
//   const counter2= counter()
//   const counter3= counter()
// counter1(); 
// counter1(); 
// counter1(); 
// counter2(); 
// counter2(); 
// counter2(); 
// const counter2 = counter();
// counter1(); 
// counter2();


// Assignment: Higher-Order Functions-----------------------------2nd assignment
// Instructions:
// 1. Create a JavaScript higher-order function called calculate that takes two
// numbers and a callback function as arguments.
function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }
function add(num1, num2) {
    return num1 + num2;
  }
  
  const result = calculate(5, 10, add);
console.log(result)
// 2. The calculate function should invoke the callback function with the two
// numbers as parameters and return the result.
function add(num1, num2) {
    return num1 + num2;
  }
  
  const result1 = calculate(5, 10, add);
console.log(result1)
// 3. Implement three different callback functions: add, subtract, and multiply.
// ● The add function should return the sum of the two numbers.
// ● The subtract function should return the difference between the two
// numbers.
// ● The multiply function should return the product of the two numbers.
function add(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function subtract(num1,num2){
    return num1-num2;
}
const res = calculate(5, 10, add);
const re = calculate(5, 10, multiply);
const resul = calculate(5, 10, subtract);
console.log(res)
console.log(re)
console.log(resul)

// 4. Use the calculate function to perform the following calculations:
// ● Invoke calculate with the numbers 5 and 3 and the add function.
// Display the result.

function toadd(x,y){
    return x+y;
}
const total=calculate(5,3,toadd)
console.log(total)
// ● Invoke calculate with the numbers 10 and 4 and the subtract
// function. Display the result.
function tosub(x,y){
    return x-y;
}
const total1=calculate(10,4,tosub)
console.log(total1)

// ● Invoke calculate with the numbers 7 and 2 and the multiply function.
// Display the result.

function tomul(x,y){
    return x*y;
}
const total2 = calculate(7,2,tomul)
console.log(total2)


// Assignment: Task Management---------------------3rd assignment
// Instructions:
// 1. Create a JavaScript function using each of the following methods:
// a) Function Declaration: Create a function named addTask that takes a task
// name as a parameter and adds it to a task management system.
// const taskList = [];

// function addTask(taskName) {
//   taskList.push(taskName);
//   console.log(`Task "${taskName}" has been added.`);
// }
// addTask("Buy groceries"); 
// console.log(taskList); 
// b) Function Expression: Create a function expression called completeTask
// that takes a task ID as a parameter and marks the corresponding task as
// completed in the task management system.
// const taskList = [
//     { id: 1, name: "Buy groceries", completed: false },
//     { id: 2, name: "Clean the house", completed: false },
//     { id: 3, name: "Go for a run", completed: false }
//   ];
  
//   const completeTask = function(taskID) {
//     for (let i = 0; i < taskList.length; i++) {
//       if (taskList[i].id === taskID) {
//         taskList[i].completed = true;
//         console.log(`Task "${taskList[i].name}" has been completed.`);
//         return;
//       }
//     }
//     console.log(`Task with ID "${taskID}" was not found.`);
//   }
//   completeTask(2); 
// console.log(taskList);
// c) Arrow Function: Create an arrow function named getTasks that takes no
// parameters and returns an array of all the tasks in the task management
// system.
// const taskList = [
//     { id: 1, name: "Buy groceries", completed: false },
//     { id: 2, name: "Clean the house", completed: true },
//     { id: 3, name: "Go for a run", completed: false }
//   ];
  
//   const getTasks = () => taskList;
//   console.log(getTasks());

// 2. Implement a task management system using an array to store the tasks. The
// tasks should be objects with the following properties: id, name, and
// completed.
// 3. Use the addTask function to add at least three tasks to the task management
// system.
// 4. Use the completeTask function to mark one of the tasks as completed.
// 5. Use the getTasks function to retrieve all the tasks from the task management
// system and display them.
// Example Output:
// Tasks:
// ● Task 1: Buy groceries (Completed)
// ● Task 2: Clean the house
// ● Task 3: Finish the report


// Assignment: Hoisting in JavaScript-------------------4th assignment
// Instructions:
// 1. Create a JavaScript program that demonstrates hoisting in action.
console.log(name); 
var name = "John";



var name;
console.log(name); 
name = "John";
var name;
console.log(name); 
name = "John";
// 2. Implement a function named calculateAge that takes a birth year as a
// parameter and calculates the age based on the current year.
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
  console.log(calculateAge(1990));
// 3. Call the calculateAge function before its actual declaration in your code.

console.log(calculateAge(1990)); // logs the age based on the current year

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}
// 4. Assign the result of the function call to a variable named age.
// function calculateAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - birthYear;
//     return age;
//   }
  
//   const age = calculateAge(1990);
//   console.log(age); 
// 5. Display the age variable's value in the console.
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
  
  const age = calculateAge(1990);
  console.log(age); 


