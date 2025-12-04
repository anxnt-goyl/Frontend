const b = document.querySelector("body");
const d = document.createElement("div");
d.id="container";
b.appendChild(d);
const h = document.createElement("h1");
h.textContent = "Simple Shop";
d.appendChild(h);
const d1 = document.createElement("div");
d1.id = "card";
d.appendChild(d1);
const d11 = document.createElement("div");
d11.id="c1";
d11.innerHTML =`<h3>Product 1</h3>
<button class = "btn">Add </button>`;
d1.appendChild(d11);
const d22 = document.createElement("div");
d22.id = "c2";
d22.innerHTML = `<h3 >Product 2</h3>
<button class = "btn">Add</button>`;
d1.appendChild(d22);
const cnt = document.createElement("h3");
cnt.textContent = "Card Count :";
d.appendChild(cnt);
const btns = document.querySelectorAll(".btn");
let v = 0;
btns.forEach(btn => {
    

btn.addEventListener("click",()=>{
    v = v+1;
    cnt.textContent = `Card Count : ${v}`;
});
});