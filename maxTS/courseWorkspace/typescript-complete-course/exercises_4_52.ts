// // // Exercise 1
// // var double = function(value) {
// //     return value * 2;
// // };
//
// const double = (value:number) => value * 2;
// console.log(double(10));
// //
// //
// // // Exercise 2
// // var greet2 = function (name) {
// //     if (name === undefined) { name = "Max"; }
// //     console.log("Hello, " + name);
// // };
// const greet2 = (name:string = "Max") => {
//     console.log(`Hello, ${name}`);
// }
//  greet2();
//  greet2("Anna");
// //
// // // Exercise 3
// // var numbers = [-3, 33, 38, 5];
// // console.log(Math.min.apply(Math, numbers));
// //
//    let nums = [-3, 33, 38, 5];
//    console.log(Math.min(...nums));
//
// // // Exercise 4
// // var newArray = [55, 20];
// // Array.prototype.push.apply(newArray, numbers);
// // console.log(newArray);
// let newArray = [55,20];
// newArray = [...newArray, ...nums];
// console.log(newArray);
//
// const newArrayAlt = [55, 21];
// newArrayAlt.push(...nums);
// console.log(newArrayAlt);
// //
// // // Exercise 5
// // var testResults = [3.89, 2.99, 1.38];
// // var result1 = testResults[0];
// // var result2 = testResults[1];
// // var result3 = testResults[2];
// // console.log(result1, result2, result3);
// const testResultss = [3.89, 2.99, 1.38];
// const [result1,result2,result3] = testResultss;
// console.log(result1, result2, result3);
// console.log([result1, result2, result3]);
// //
// // // Exercise 6
// // var scientist = {firstName: "Will", experience: 12};
// // var firstName = scientist.firstName;
// // var experience = scientist.experience;
// // console.log(firstName, experience);
// const scientist = {firstName: "Will", experience: 12};
// const {firstName,experience} = scientist;
// console.log(firstName, experience);