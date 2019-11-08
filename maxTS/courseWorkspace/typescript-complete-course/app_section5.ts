// class Person {
//     name: string;
//     private type: string = 'default';  //from within the object
//     protected age: number = 27; // accessible from inheritors of this class
//
//     constructor(name: string, public username: string) {
//         this.name = name;
//     }
//     printAge() {
//         console.log(this.age);
//         this.setType("old guy");
//     }
//
//     setType(type:string) {
//         this.type = type;
//         console.log(this.type);
//     }
// }
//
// const person4 = new Person("Max", "max");
// console.log(person4);
// console.log(person4.name, person4.username);
//
// person4.setType("Cool guy");
// person4.printAge();
//
//
// //Inheritance
// class Maximillian extends Person {
//     //name = "Maximillian";
//
//     constructor(username:string) {
//         super("Maximillian", username);
//         this.age = 31;
//     }
// }
//
// const max = new Maximillian("max");
// console.log(max);
//
// //GETTERS & SETTERS
// class Plant {
//     private _species: string = "Def";
//     get species() {
//         return this._species;
//     }
//     set species(value: string){
//         if(value.length > 3) {
//             this._species = value;
//         }
//         else{
//             this._species = "Default"
//         }
//     }
// }
//
// const plant = new Plant();
// console.log(plant.species);
// plant.species = "ab";
// console.log(plant.species);
// plant.species = "Philofilus";
// console.log(plant.species);
//
// //STATIC PROPERIES AND METHODS
// class Helpers {
//     static PI: number = 3.14;
//     static calcCircumference(diameter:number):number {
//         return this.PI * diameter;
//     }
// }
//
// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(8));
//
//
// //Abstract Classes
// abstract class Project {
//     projectName: string = "Default";
//     budget: number = 1000;
//
//     abstract changeName(name:string):void;
//
//     //in child class
//     calcBudget() {
//         return this.budget * 2;
//     }
// }
//
// class ITProject extends Project {
//     changeName(name: string): void {
//         this.projectName = name;
//     }
// }
//
// let newProject = new ITProject();
// console.log(newProject);
// newProject.changeName("Super IT Project");
// console.log(newProject);
//
//
// // private constructors
// class OnlyOne {
//     private static instance: OnlyOne;
//     private constructor(public readonly name: string) {}
//
//     static getInstance(){
//         if(OnlyOne.instance){
//             console.log(`got it`);
//         }
//         if(!OnlyOne.instance){
//             OnlyOne.instance = new OnlyOne('The Only One');
//             console.log("new one");
//         }
//         return OnlyOne.instance;
//     }
// }
//
// //let wrong = new OnlyOne('The Only One');
// let right = OnlyOne.getInstance();
// console.log(right.name);
// //right.name = "something else";
// let rightToo = OnlyOne.getInstance();
// console.log(rightToo.name);