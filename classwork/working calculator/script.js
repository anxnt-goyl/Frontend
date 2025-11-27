const a1 = document.getElementById("btn1");
const a2 = document.getElementById("btn2");
const a3 = document.getElementById("btn3");
const a4 = document.getElementById("btn4");
const a5 = document.getElementById("btn5");
const a6 = document.getElementById("btn6");
const a7 = document.getElementById("btn7");
const a8 = document.getElementById("btn8");
const a9 = document.getElementById("btn9");
const mul = document.getElementById("mul");
const add = document.getElementById("add");
const min = document.getElementById("min");
const div = document.getElementById("div");
const dot = document.getElementById("dot");
const eq = document.getElementById("eq");
const zero = document.getElementById("zero");

let display = document.querySelector(".screen");
let butt = document.querySelectorAll(".butt");
let a;
let b;
let opr;

butt.forEach(btn => {
    btn.addEventListener("click", function () {
        let vr = btn.textContent;
        if (vr=== "+"||vr === "-" || vr === "*" || vr ==="/") {
            a = display.textContent;
            opr = vr;
            display.textContent = "";
        }
        else if (vr === "=") {
            b = display.textContent;
            if(opr==="+"){
            display.textContent = addValues(a, b);
        } else if (opr ==="-"){
            display.textContent = subValues(a, b);
        } else if(opr ==="*"){
            display.textContent = muls(a,b);
        }else if(opr==="/"){
            display.textContent = divss(a,b);
        }

        } else {
            display.textContent += btn.textContent;
        }

    });
});
function addValues(a, b) {
    return Number(a) + Number(b);
}
function subValues(a, b) {
    return Number(a) - Number(b);
}
function muls(a,b){
    return Number(a)*Number(b);
} 
function divss(a,b){
    return Number(a)/Number(b);
}