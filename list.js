let d = new Date();
d.setFullYear("2052");
console.log(d);

// string

let str = "Welcome on board";
let ext = str.slice(3);
console.log(ext);
ext = str.slice(-2, -6);
console.log(ext);
ext = str.substring(-2, 6);
arr = str.split("o"); // i.e split it wherever you see o
console.log(arr);
inc = str.includes("0");
src = str.search("a");
console.log(src);

// array

let arr1 = [1,2,3,4,5];
let arr2 = ["text", "sample", "view"];
let check = [1, true, false, "correct", undefined, null, {}];
let multiple = arr1.map((el) => el * 2);
let power = arr1.map(function(el) {
    return el ** 2;
});
console.log(multiple, power);
let scores = [12, 43, 54, 56, ,87];
let scoreFilter = scores.filter(over50);

function over50(val){
    return val > 50;
}
console.log(scoreFilter);

let scoreSome = scores.some(over50);
console.log(scoreSome);



let scoreFind = scores.find(over50);
console.log(scoreFind);

let scoreEntity = scores.entries();
console.log(scoreEntity);

// object

const user = {
    name: "Bright",
    age: 75,
    gender: "others",
    userInfo: function(){
        return `${user.name} is ${user.age} years old, is a ${user.gender}`
    }
}
console.log(user);
console.log(user.name);
console.log(user["name"]);  
console.log(user.userInfo());

user["lname"] = "Dogs";
console.log(user);
user.location = "Bybit"
console.log(user);

// funcion

function greetUser(name){
    if(name){
        return `Welcome ${name}`
    }
    else{
        return `Welcome Guest`
    }
}
console.log(greetUser("Tolu"));

function fullName(...name){
    return name;
}
console.log("Bolu", "Tolu", "Victor");

function multiply(num, times=1){
    return num * times;
}
console.log(multiply(15,4));

function createProduct({name, desc, price}) {
    return `${name} - ${desc} - ${price};`
}
console.log(
    createProduct({
        name: "Oraime Freepod",
        desc: "Its cheap",
        price: "$100",
    })
);

const UnleashDogs = () => console.log(`woof at 1pm`);
UnleashDogs();

function unleashDogs() {
    console.log("Who let the dogs out");
}
unleashDogs();

const duplicateString = (str, count) => console.log(str.repeat(count));
duplicateString("woof", 5)
