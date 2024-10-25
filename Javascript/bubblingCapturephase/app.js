let gp = document.getElementById('gp');
let g = document.getElementById('g');
let c = document.createElement('c');

let phase = ["", "current phase", "target phase"]

gp.addEventListener('click', (e)=>{
    // console.log("click")
    console.log(e.eventPhase)
    // console.log(e.phase)
    gp.style.background = "black"
}, false)

g.addEventListener('click', (e)=>{
    // console.log("click")

    console.log(e.eventPhase)

    g.style.background = "red"
}, false)
c.addEventListener('click', (e)=>{
    // console.log("click")
    console.log(e.eventPhase)
    c.style.background = "green"
}, false)