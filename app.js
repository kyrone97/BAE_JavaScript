

const countEl = document.getElementById("count-el")

const addOneEl = document.getElementById("plusone-el")

const saveEl = document.getElementById("save-el")

const divEl = document.getElementById("div-el")

const listEl = document.getElementById("list-el")

let counter = 0;
let display = [ ]
let count = 0;

function increment(){
    count++
     countEl.textContent = count
}

addOneEl.addEventListener("click",increment)

function save(){
  
    const li = document.createElement("li")

    li.textContent = count
    listEl.appendChild(li)

}


saveEl.addEventListener("click",save)