const a = document.querySelector("#todo");
const b = document.querySelector("#btn");
const c = document.querySelector("#ull");
let tasks = [];
function addb(){
    const tv = a.value.trim();
    const task = {id:Date.now() ,Text: tv };
    tasks.push(task);
    attd(task);
    a.value='';
}
function attd(task){
    const l = document.createElement("li");
    l.dataset.id = task.id;
    const s = document.createElement("span");
    s.textContent = task.Text;
    const ed = document.createElement("button");
    ed.textContent = "Edit";
    ed.onclick =() =>edd(task.id , s);
    const dl = document.createElement("button");
    dl.textContent ="Delete";
    dl.onclick = () => dll(task.id,l);
    l.appendChild(s);
    l.appendChild(ed);
    l.appendChild(dl);
    c.appendChild(l);
}
function edd(id , s){
    const n = prompt("Edit task",s.textContent);
    if(n===null) return;
    s.textContent = n;
    const t = tasks.find(p => p.id === id);
    t.Text = n;
}
function dll(id , l) {
    c.removeChild(l);
    tasks = tasks.filter(t=> t.id!== id  );
}
b.addEventListener("click",addb);