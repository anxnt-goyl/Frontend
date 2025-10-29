// // console.log("Hello World");
// // if(""){
// //     console.log("Hello");
// // }
// // else{
// //     console.log("Bye");
// // }
// // console.log(("nsj" || undefined) && (null && 0));
// let arr = [10,20,30];
// // for(let i = 0; i<arr.length;i++ ){
// //     console.log(arr[i]);
// // }
// // console.log(arr);
// // for(let num of arr){
// //     console.log(num);
// // }


// // for (let i = 4; i >= 1; i--) {
// //   console.log('*'.repeat(i));
// // }
// //  for(let i = 4 ; i>=1 ; i--){
// //     let str = "";
// //     for(let j =0; j>=1-i;j--){
// //         str  = str +"*";
// //     }
// //     console.log(str);
// //  }
// // console.log(sum(4,9));
// // // const sum = function(a,b){
// // //     return a+b;
// // // }
// // // const sum = (a,b) =>{
// // //     return a+b;
// // // };

// // function sum(a,b){
// //     return a+b;
// // }/
// const sum = (num1 , num2, ...rest) =>{ // bache hue asre arguments rest mai aa jate hai!..
//     // console.log(num1 + " " + num2);
//     // console.log(rest);
//     var s  = num1 + num2  ;

//     for(let i =0; i<rest.length;i++){
//         // console.log(rest[i]);
//         s = s+ rest[i];
//     }
//     console.log(s);
// }
// // sum(1,2,3,4,5,6,7,8,9,10);
// let a = Number(prompt("Age ? "));
// if(a>=18){
//     document.writeln("yes");
//     document.writeln(typeof a);
// }else{
//     document.writeln("no");
//     document.writeln(typeof a);
// }
// const arr = [1,2,3,4,5,6,7,8,9,10,'anant',null,undefined,NaN, false];
// const arr2 = new Array(8);
// const arr3 = new Array("abc" , 1.0,"s d" , null);
// console.log(arr );
// console.log(arr2);
// console.log(arr3);
const start = [1,2,3,4, 5 ,56,77,8,96,5433,44,4567,8765,43,33,44,63];
// const end = [5,6,7];
// const newar = [];
// for(let i of start){
//     newar.push(i);
// }
// for(let i of end){
//     newar.push(i);
// }
// console.log(newar);
// const newarr = start.concat(end);
// console.log(newarr);
// for(let i = 0;i<start.length;i++){
//     if(start[i] == 3){
//         console.log(i);
//     }
// }
// const index = start.indexOf(44);
// console.log(index);
// const lindex = start.lastIndexOf(44);
// console.log(lindex);
// console.log(start.pop());
// console.log(start.shift());
// console.log(start.unshift(444));
// console.log(start);
// const sortedd = start.sort((a,b)=> a-b);z
// console.log(sortedd);
// filter
// map
// 