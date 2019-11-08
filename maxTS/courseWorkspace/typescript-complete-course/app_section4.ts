// //let & const
// console.log("LET & CONST");
// let variable = "Test";
// console.log(variable);
// variable = "Another value";
// console.log(variable);
//
// const maxLevels = 100;
// console.log(maxLevels);
// //maxLevels = 99 //won't work
//
// //Block scope
// function reset() {
//    // console.log(variable);
//     let variable = null;
//     console.log(variable);
// }
// reset();
//
// console.log(variable);
//
// //arrow functions
// console.log("ARROW FUNCTIONS");
// const addNumbers = function(number1:number, number2:number): number {
//     return number1+number2;
// }
// console.log('Add Numbers = ' + addNumbers(10,3));
//
// const multiplyNumbers = (number1:number, number2:number) => number1 * number2;
// console.log('Multiply Numbers = ' +  multiplyNumbers(10,3));
//
// const greet = () => {
//     console.log("greetings");
// }
// greet();
//
// const greetFriend = friend => console.log(friend);
// greetFriend("Manu");
//
// //Default Parameters
// console.log("DEFAULT PARAMETERS");
// const countdown = (start: number = 10, end: number = start - 5) : void => {
//     while (start>0){
//         start--;
//        // console.log(start);
//     }
//     console.log("Done! ", start);
//     console.log(end);
// }
// countdown(20);
//
//
// //REST & SPREAD
// console.log("REST & SPREAD");
// const numbers = [1, 10, 199, -5];
// console.log(Math.max(33,99,10,-300));
// console.log(Math.max(...numbers));
//
//
// function makeArrayAnnoying(arg1: number, arg2: number) {
//     return [arg1, arg2];
// }
//
// //function makeArray(name:string, ...args: number[]) {
// function makeArray(...args: number[]) {
//     return args;
// }
// console.log(makeArray(1,2,6));
//
// //DESTRUCTURING
// console.log("DESTRUCTURING");
//
// const myHobbies=["Cooking","Sports"];
// console.log(myHobbies[0], myHobbies[1]);
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// console.log(hobby1,hobby2);
//
// const[h1,h2] = myHobbies;
// console.log(h1,h2);
//
// const userData = {userName: "Max", age: 27};
// const u = userData.userName;
// const a = userData.age;
// console.log(u,a);
//
// const{userName,age}=userData;
// console.log(userName,age);
//
// const{userName: userNames,age: userAges}=userData;
// console.log(userNames,userAges);
//
// //TEMPLATE LITERALS
// console.log("TEMPLATE LITERALS");
// const uname = "Max";
// const greeting = "Hello, I'm " + uname;
// console.log(greeting);
//
//
// const templateGreeting = ` This is a heading!
// I'm ${uname}
// This is cool`;
// console.log(templateGreeting);