const body = document.querySelector("body")

const div = document.createElement("div")


body.appendChild(div)

div.style.width = "500px"
div.style.height = "500px"
div.style.border = "1px solid black"

div.setAttribute("id", "test")




const btn1 = document.createElement("button")
const btn2 = document.createElement("button")



body.appendChild(btn1)

btn1.style.width = "50px"
btn1.style.height = "50px"
body.appendChild(btn2)
btn2.style.width = "50px"
btn2.style.height = "50px"

btn1.setAttribute("id", "btn1")
document.getElementById("btn1").addEventListener("click", function(){
    div.style.backgroundColor = "red"
})
btn2.setAttribute("id", "btn2")
document.getElementById("btn2").addEventListener("click", function(){
    div.style.backgroundColor = "limegreen"
})

const input = document.createElement("input");
const btn3 = document.createElement("button");



body.appendChild(input);

input.style.width = "50px";
input.style.height = "50px";
input.setAttribute("id", "input");

body.appendChild(btn3);
const br6 = document.createElement("br");
body.appendChild(br6)

btn3.style.width = "50px";
btn3.style.height = "50px";
btn3.textContent = "Zmień kolor"; 
btn3.setAttribute("id", "btn3");

btn3.addEventListener("click", function() {
    const color = input.value;
    div.style.backgroundColor = color;
});

const input2 = document.createElement("input");
input2.setAttribute("id", "input2");
input2.style.width = "100px";
input2.style.height = "50px";
div.appendChild(input2);

const btn4 = document.createElement("button");
btn4.textContent = "tekst";
btn4.style.width = "100px";
btn4.style.height = "50px";
div.appendChild(btn4);

const br2 = document.createElement("br");
div.appendChild(br2);

const p = document.createElement("p");
p.setAttribute("id", "p");

div.appendChild(p);

btn4.addEventListener("click", function() {
    const inputValue = document.getElementById("input2").value;
    document.getElementById("p").textContent = inputValue;
});



const btn01 = document.createElement("button");
const input01 = document.createElement("input");
const lista = document.createElement("ul");

input01.setAttribute("id", "input01");
input01.style.width = "100px";
input01.style.height = "50px";
document.body.appendChild(input01);

btn01.setAttribute("id", "btn01");
btn01.style.width = "100px";
btn01.style.height = "50px";
btn01.textContent = "tekst";
document.body.appendChild(btn01);

const br5 = document.createElement("br");
document.body.appendChild(br5);

lista.setAttribute("id", "lista");
document.body.appendChild(lista); 

btn01.addEventListener("click", () => {
    const listItem = document.createElement("li")
    listItem.textContent = input01.value; 
    lista.appendChild(listItem); 
    input01.value = ""; 
});



    

    





