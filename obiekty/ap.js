// const uczen = [{
    // imie: "Jan", 
    // nazwisko:"Kowalski", 
    // klasa: {nazwa: "2PRO", wychowawca: "Jan Kowalski"}}, {

        // imie: "Igor", 
        // nazwisko:"Laska",
        // klasa: {nazwa: "2PRO", wychowawca: "Jan Kowalski"}
// }]

// for(let i = 0; i < uczen.length; i++ ){
    // if(uczen[i].klasa == "2PRO")
    // uczen[i].klasa = "1PRO"
// }
// console.log(uczen)
// console.log(uczen.imie)

let body = document.querySelector("body")

async function getData(){
    
   const data = await fetch('https://restcountries.com/v3.1/all')
   const json = await data.json()
   console.log(json)
   return json
}


async function kraje() {
    

const data = await getData()
   
   for(let i = 0; i <data.length; i++){
    
    const div = document.createElement("div")
    div.style.width = "200px"
    div.style.height = "400px"
    div.style.border = "1px solid black"
    div.style.backgroundColor = "grey"
    div.style.textAlign = "center"
    document.querySelector("body").appendChild(div)

    const img = document.createElement("img")
    img.setAttribute("src", data[i].flags.png)
    img.style.width = "200px"
    img.style.height = "120px"
    div.appendChild(img)
    const h1 = document.createElement("h1")
    h1.innerHTML = data[i].name.common
    div.appendChild(h1)

    const p1 = document.createElement("p")
    p1.innerHTML = "Region: " + data[i].region
    div.appendChild(p1)

    const p2 = document.createElement("p")
    p2.innerHTML = "tatus: "+  data[i].status
    div.appendChild(p2)

    const p3 = document.createElement("p")
    p3.innerHTML = "Populacja: " + data[i].population
    div.appendChild(p3)
    
    
    
}
   

   
    
    
}
kraje()

