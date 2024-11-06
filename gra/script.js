let body = document.querySelector("body");
let tabela = document.getElementById("tabela");
let poprawne = 0;
let niepoprawne = 0;
const maksNiepoprawne = 5;

async function getData() {
    const dane = await fetch('https://restcountries.com/v3.1/region/europe');
    const json = await dane.json();
    return json;
}
async function kraje() {
    const dane = await getData();
    const div = document.getElementById("div1");
    div.innerHTML = "";

    const losowyIndeks = Math.floor(Math.random() * dane.length);
    const kraj = dane[losowyIndeks];

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

    const input = document.createElement("input");
    input.placeholder = "Podaj stolicę";
    input.setAttribute("id", "input");
    div.appendChild(input);  

    const btn = document.createElement("button");
    btn.textContent = "Sprawdź";
    btn.setAttribute("id", "btn");
    div.appendChild(btn);  

    const komunikat = document.createElement("p");
    komunikat.setAttribute("id", "komunikat");
    div.appendChild(komunikat);

    btn.addEventListener("click", function() {
        const odpowiedz = input.value;
        const stolica = kraj.capital[0];  

        if (stolica === odpowiedz) { 
            poprawne++;
            document.getElementById("p").textContent = poprawne;
            kraje();  
        } else {
            niepoprawne++;
            document.getElementById("niepoprawne").textContent = niepoprawne;
            komunikat.textContent = "Zła odpowiedź!";
            komunikat.style.color = "red";    

            if (niepoprawne >= maksNiepoprawne) {
                komunikat.textContent = "Gra zakończona! Przekroczono limit błędnych odpowiedzi.";
                btn.style.display = "none";  
            }
        }
    });
}

kraje();



