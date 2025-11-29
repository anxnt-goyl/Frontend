
let inp = document.querySelector("#inp");
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
            display.textContent  += btn.textContent;
        }
        else if(vr === "C"){
            a = 0;
            opr = 0;
            display.textContent = 0;
        }
        else if (vr === "=") {
            let ll = display.textContent;
            let b = ll.split(opr)[1]; 

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