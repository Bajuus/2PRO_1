let poprawne = 0
let niepoprawne = 0
const maksNiepoprawne = 5
let daneKrajow = []
let kraj1, kraj2

async function getData() {
    const dane = await fetch('https://restcountries.com/v3.1/region/europe')
    daneKrajow = await dane.json()
    losujKraje()
}

function losujKraje() {
    const indeks1 = Math.floor(Math.random() * daneKrajow.length)
    let indeks2 = Math.floor(Math.random() * daneKrajow.length)

    if (indeks1 === indeks2) {
        indeks2 = Math.floor(Math.random() * daneKrajow.length)}

    kraj1 = daneKrajow[indeks1]
    kraj2 = daneKrajow[indeks2]

    wyswietlKraj(kraj1, "div1")
    wyswietlKraj(kraj2, "div2")
}

function wyswietlKraj(kraj, divId) {
    const div = document.getElementById(divId)
    div.innerHTML = ""
    div.style.width = "325px"
    div.style.height = "400px"
    div.style.border = "1px solid black"
    div.style.textAlign = "center"
    div.style.backgroundColor = "honeydew"

    const img = document.createElement("img")
    img.setAttribute("src", kraj.flags.png)
    img.style.width = "325px"
    img.style.height = "180px"
    div.appendChild(img)

    const h1 = document.createElement("h1")
    h1.innerHTML = kraj.name.common
    div.appendChild(h1)

    const btn = document.createElement("button")
    btn.textContent = "Wybierz ten kraj"
    btn.onclick = () => sprawdzanie(divId, btn)
    div.appendChild(btn)

    const komunikat = document.createElement("p")
    komunikat.setAttribute("id", `komunikat${divId}`)
    komunikat.style.visibility = "hidden"
    div.appendChild(komunikat)
}

function sprawdzanie(wybranyDivId) {
    const kraje = {
        div1: { wybrany: kraj1, drugi: kraj2 }, 
        div2: { wybrany: kraj2, drugi: kraj1 }
    }

    const { wybrany: wybranyKraj, drugi: drugiKraj } = kraje[wybranyDivId]
    const komunikat = document.getElementById(`komunikat${wybranyDivId}`)

    if (wybranyKraj.population > drugiKraj.population) {
        poprawne++
        komunikat.textContent = "Poprawna odpowiedź."
        komunikat.style.color = "green"
    } else {
        niepoprawne++
        komunikat.textContent = "Błędna odpowiedź."
        komunikat.style.color = "red"
    }

    document.getElementById("poprawne").textContent = poprawne
    document.getElementById("niepoprawne").textContent = niepoprawne

    komunikat.style.visibility = "visible"
    setTimeout(() => {
        komunikat.style.visibility = "hidden"
        losujKraje()
    }, 3000)

    if (niepoprawne >= maksNiepoprawne) {
        alert("Koniec gry! Przekroczyłeś maksymalną liczbę błędów.")
        poprawne = 0
        niepoprawne = 0
        document.getElementById("poprawne").textContent = poprawne
        document.getElementById("niepoprawne").textContent = niepoprawne
        return
    }

    const wszystkiePrzyciski = document.querySelectorAll('button')
    wszystkiePrzyciski.forEach(btn => btn.style.display = "none")
}

window.onload = getData
