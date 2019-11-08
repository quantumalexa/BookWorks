console.log("start");

//Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo("Max").length);
console.log(echo(27));
console.log(echo(27).length);
console.log(echo({name:"Max", age: 27}));
console.log(echo({name:"Max", age: 27}).length);

//none of those fail at compile time

//BETTER Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max"));
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
//console.log(betterEcho<number>("27")); //error in compile
//console.log(betterEcho(27).length);  //error in compile
console.log(betterEcho({name:"Max", age: 27}));
//console.log(betterEcho({name:"Max", age: 27}).length); //error in compile


//Built-in Generics
//array
const testResults: Array<number> = [1.94, 2.33];
testResults.push(1.12);
//testResults.push("string");  //fails to compile
console.log(testResults);

// Arrays generic assignment inside
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll((["apple", "banana"]));
printAll<string>((["apple", "banana"]));

//Generic Types as function
const echo2: <T>(data: T) => T = echo;
const echo3: <T>(data: T) => T = betterEcho;

console.log(echo3<string>("Something"));

//Genereic Class
class SimpleMath {
    baseValue;
    multiplyValue;
    calculate() {
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue =10;
simpleMath.multiplyValue=20;
console.log(simpleMath.calculate());


const simpleMath2 = new SimpleMath();
simpleMath2.baseValue =" something";
simpleMath2.multiplyValue=20;
console.log(simpleMath2.calculate());  //Nan

//make it more generic

//Genereic Class
class SimpleMath1<T extends number> {
    baseValue!: T;  //the ! gets around strict compiler not initialized error warning
    multiplyValue!: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath3 = new SimpleMath1();
simpleMath3.baseValue =10;
simpleMath3.multiplyValue=20;
console.log(simpleMath3.calculate());


// const simpleMath4 = new SimpleMath1();
// simpleMath4.baseValue =" something";  //will not compile
// simpleMath4.multiplyValue=20;
// console.log(simpleMath4.calculate());  //Nan


//Genereic Class
class SimpleMath2<T extends number | string ,U extends number | string> {
    baseValue!: T;  //the ! gets around strict compiler not initialized error warning
    multiplyValue!: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath4 = new SimpleMath2<string | number, string | number>();
simpleMath4.baseValue ="10";  //will not compile
simpleMath4.multiplyValue=20;
console.log(simpleMath4.calculate());  //Nan
// //will not compile
// const simpleMath5 = new SimpleMath2<boolean>();
// simpleMath5.baseValue =true;  //will not compile
// simpleMath5.multiplyValue=false;
// console.log(simpleMath5.calculate());  //Nan

class MyMap<T> {
    items: {[key: string]: T } ={};
    setItem(key: string, item: T){
        this.items[key] = item;
    } // should create a new key-value pair

    getItem(key: string){
        return this.items[key];
    } // should retrieve the value of the provided key

    clear(){
        this.items = {};
    }// should remove all key-value pairs

    printMap() {
        console.log(this.items);
    }// should output key-value pairs
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap()
numberMap.setItem('bananassss', 100);
numberMap.printMap();
console.log(numberMap.getItem('bananassss'));

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();