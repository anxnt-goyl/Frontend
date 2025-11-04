// var name = "anant";
// // let name = "kumar";
// console.log(name);
// const num = (a)=>{if(a%2==0){return "even";}else{return "odd";}}
// console.log(num(5));
// const a = (n) => n%2 ===0?"even":"odd";
// console.log(a(23)); 
// const greet = (name) => "Hello "+name+" !";
// console.log(greet("anant"));
// const add = (a,b) => a+b;
// console.log(add(2,6));
// const isEven = (num) => num%2===0;
// console.log(isEven(33));
// const n = "anant";
// const m = 120;
// console.log(`Hello , my name is ${n} and I am ${m} years old.
// I was born in ${2025-m}`);
// console.log(`Hey ${n} , you have ${m} points! `);

// const a ={
//     firstname:"Anant",
//     lastname:"Goyal",
//     age:19,
//     introduce: function(){
//         console.log(`Hi my name is ${this.firstname} ${this.lastname} and i am ${this.age} years old.`);
//     },
// };
// // console.log(a.age);
// a.introduce();

// const a ={
//     firstname:"Anant",
//     lastname:"Goyal",
//     age:19,
// };
// a.birthyear = 2035-a.age;
// // console.log(a);
// a.introduce = function(){console.log(`My name is ${a.firstname} ${a.lastname} and I am ${a.age} years old 
// I was born in ${a.birthyear} .`);
// };
// a.introduce();
// const fruits = ["apple","banana","kiwi","grapes","mango"];
// const[first, ,second] = fruits;
// const h =[1,23,4,5,3,4,5,32,4,3,5,2,42,4,56,4,24,44];
// const g =[3,5,7,654,3,5,2,42,4,56,4,24,44];
// // const [,s,,,w,...rest] = h;
// // console.log(s+" "+w);
// // console.log(rest);
// const result = [...h,...g];
// console.log(result);
// const a ="anant";
// const b = 12;
// const p = {
//     a:a,
//     b:b,
// };
// console.log(p);

//  console.log(50);
//  console.log(50);
//  console.log(569);
//  setTimeout(()=> console.log("Hello"),2000);
//  console.log(22);
let count = 10;
const timer = setInterval(()=> {
    console.log(count);
    count--;
    if(count<0) clearInterval(timer);
},1000);
setTimeout(()=> console.log("Bomb"),12000);