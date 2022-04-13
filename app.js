

const countEl = document.getElementById("count-el")

const addOneEl = document.getElementById("plusone-el")

const saveEl = document.getElementById("save-el")

const divEl = document.getElementById("div-el")

let counter = 0;
let display = [ ]
let count = 0;

function increment(){
    count++
     countEl.textContent = count
}

addOneEl.addEventListener("click",increment)
function save(){
    counter = count
    display.push(count)
    divEl.textContent = display  
    count = 0
    countEl.textContent = count

   }
saveEl.addEventListener("click",save)

