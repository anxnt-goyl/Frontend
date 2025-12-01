const btn = document.createElement("button");
btn.textContent="New Joke";
const a = document.querySelector(".joke");
a.appendChild(btn);
btn.addEventListener("click",fj);
const divv = document.createElement("div");
a.appendChild(divv);
function fj(){
    btn.disabled = true;
    divv.textContent='';
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((Response)=>{
        return Response.json();
    })
    .then((joke)=>{
        const tl = document.createElement("h2");
        const p = document.createElement("p");
        tl.innerHTML = `<b>${joke.setup}</b>`;
        p.innerHTML = `<b>${joke.punchline}</b>`
        divv.appendChild(tl);
        divv.appendChild(p);
        a.appendChild(divv);
    })
    .catch(err =>{console.error(err);})
    .finally(()=>{btn.disabled= false});

};