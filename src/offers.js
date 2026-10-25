import offer1 from "./img/off-1.jpg"
import offer2 from "./img/off-2.jpg"


export default function loafOfferPage(){
   
    const container = document.getElementById("Content")

    container.replaceChildren();

    const title = document.createElement("h2")
    title.textContent = "Diverse offers for sweet customers"

    const offer1Img = document.createElement("img")
    offer1Img.src = offer1

    const offer2Img = document.createElement("img")
    offer2Img.src = offer2

    container.append(title , offer1Img , offer2Img)
} 