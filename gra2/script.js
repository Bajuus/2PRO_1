let poprawne = 0;
let niepoprawne = 0;
const maksNiepoprawne = 5;
let daneKrajow = [];
let kraj1, kraj2;

async function getData() {
    const dane = await fetch('https://restcountries.com/v3.1/region/europe');
    daneKrajow = await dane.json();
    losujKraje();  
}

function losujKraje() {
    const indeks1 = Math.floor(Math.random() * daneKrajow.length);
    let indeks2 = Math.floor(Math.random() * daneKrajow.length);


    kraj1 = daneKrajow[indeks1];
    kraj2 = daneKrajow[indeks2];

    wyswietlKraj(kraj1, "div1");
    wyswietlKraj(kraj2, "div2");
   
}

function wyswietlKraj(kraj, divId) {
    const div = document.getElementById(divId);
    div.innerHTML = "";

    div.style.width = "325px";
    div.style.height = "400px";
    div.style.border = "1px solid black";
    div.style.textAlign = "center";
    div.style.backgroundColor = "honeydew";

    const img = document.createElement("img");
    img.setAttribute("src", kraj.flags.png);
    img.style.width = "325px";
    img.style.height = "180px";
    div.appendChild(img);

    const h1 = document.createElement("h1");
    h1.innerHTML = kraj.name.common;
    div.appendChild(h1);

    const btn = document.createElement("button");
    btn.textContent = "Wybierz ten kraj";
    btn.setAttribute("onclick", "sprawdzanie()")

    div.appendChild(btn);

    const komunikat = document.createElement("p");
    komunikat.setAttribute("id", "komunikat");
    div.appendChild(komunikat);
}



window.onload = getData;