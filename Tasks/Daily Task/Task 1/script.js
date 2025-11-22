const nam = document.getElementById("inName");
const roll = document.getElementById("inRoll");
const bio = document.getElementById("inBio");
const skill = document.getElementById("inSkill");
const theme = document.getElementById("inTheme");

const n = document.getElementById("disName");
const r = document.getElementById("disRoll");
const b = document.getElementById("disBio");
const s = document.getElementById("disSkill");
const d = document.getElementById("disDetails");

const add = document.getElementById("addSkill");
const rem = document.getElementById("remSkill");
const t = document.getElementById("inToggle");

nam.addEventListener("input",function(){
    n.innerText = nam.value;
})
roll.addEventListener("input",function(){
    r.innerText = roll.value;
})
bio.addEventListener("input",function(){
    b.innerText = bio.value;
})

add.addEventListener("click",function(e){
    e.preventDefault();
    const newSkill = document.createElement("span");
    newSkill.innerText = skill.value;
    newSkill.classList.add("skill-item");
    s.appendChild(newSkill);
    skill.value = "";
});
rem.addEventListener("click",function(e){
    e.preventDefault();
    const lasts = s.lastElementChild;
    if(lasts){
        lasts.remove();
    }
});
t.addEventListener("click",function(){
    e.preventDefault();
    if(d.style.display==="none"){
        d.style.display = "block";
    }else{
        d.style.display = "none";
    }
});
const c = document.getElementById("card");
theme.addEventListener("change",function(){
    c.classList.remove(
        "theme-white","theme-black","theme-blue","theme-pink","theme-green"
    );
    const sel = theme.value.toLowerCase();
    c.classList.add(`theme-${sel}`);
});
