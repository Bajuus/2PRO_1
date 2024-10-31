
let body = document.querySelector("body")
let tabela = document.getElementById("tabela")


async function getData(){
    
   const data = await fetch('https://restcountries.com/v3.1/region/europe')
   const json = await data.json()
   console.log(json)
   return json
}


async function kraje() {
    

const data = await getData()


    const div = document.getElementById("div1")

    const randomIndex = Math.floor(Math.random() *data.length );
    const country = data[randomIndex];
    
    
    div.style.width = "325px"
    div.style.height = "350px"
    div.style.border = "1px solid black"
    
    div.style.textAlign = "center"
    document.querySelector("body").appendChild(div)

    const img = document.createElement("img")
    img.setAttribute("src", country.flags.png)
    img.style.width = "325px"
    img.style.height = "180px"
    div.appendChild(img)
    const h1 = document.createElement("h1")
    h1.innerHTML = country.name.common
    div.setAttribute("id", "div1")
    div.appendChild(h1)

    const input = document.createElement("input")
    input.placeholder = "Sprawdź"
    input.setAttribute("id", "input")
    document.querySelector("body").appendChild(input)

    const btn = document.createElement("button")
    btn.textContent = "Sprawdź"
    btn.setAttribute("id", "btn")
    document.querySelector("body").appendChild(btn)

 console.log(country.capital)

    btn.addEventListener("click", function() {
        p = document.getElementById("p")
        if (input.value === country.capital) {
            p++;
            alert("Poprawna odpowiedź!");
        } else {
            alert("Zła odpowiedź");
        }
    });
}

kraje()

