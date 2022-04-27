import { getMovie } from "./database.js";
import { Form } from "./form.js";
import { Header } from "./header.js"
import { randomMovie } from "./randomMovie.js"
import { rightSide } from "./rightSidebar.js"
const gotMovies = getMovie ()



const mainContainer = document.querySelector(".container")


const applicationHTML = `
<button class="poopies" onclick="window.location.href='#movies'">poopies</button>
<section class="questions">
${Form()}
</section>
<button id="reload">RELOAD MOVIE</button>
<section id="movies" class="console">
    ${randomMovie()}
</section>
<div class="sidebar__1">${rightSide()}</div>

<section class='header-section'>
    ${Header()}
</section>
`
mainContainer.innerHTML = applicationHTML
