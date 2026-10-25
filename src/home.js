export default function loadHomePage() {
    
    const container = document.getElementById("Content")

    container.replaceChildren();

    const title = document.createElement("h2")
    title.textContent = "Cookie a day keep the sadness away"
    
    const image = document.createElement("img")
    image.src = "../img/happy_c.jpg"

    container.append(title, image);
}