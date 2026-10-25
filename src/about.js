export default function loadAboutPage() {
    const container = document.getElementById("Content");

    container.replaceChildren();

    const title = document.createElement("h2");
    title.textContent = "About Happy Cookies";

    const paragraph = document.createElement("p");
    paragraph.textContent =
    "At Happy Cookies, we believe every day deserves a little sweetness! We bake delicious cookies with love, using quality ingredients to bring smiles to our customers.";

    const subtitle = document.createElement("h3");
    subtitle.textContent = "Our Mission";

    const mission = document.createElement("p");
    mission.textContent =
    "Our mission is simple: to make people happy, one cookie at a time!";

    container.append(title, paragraph, subtitle, mission);
}