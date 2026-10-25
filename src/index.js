import "./style.css";

import loadHomePage from "./home.js";
import loafOfferPage from "./offers.js";
import loadAboutPage from "./about.js";

loadHomePage();

const homeBtn = document.getElementById("home")
homeBtn.onclick = loadHomePage

const offersBtn = document.getElementById("offers")
offersBtn.onclick = loafOfferPage

const aboutBtn =  document.getElementById("about")
aboutBtn.onclick = loadAboutPage