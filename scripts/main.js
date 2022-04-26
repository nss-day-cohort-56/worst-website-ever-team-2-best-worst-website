import { getMovie } from "./database.js";
import { Form } from "./form.js";
import { Header } from "./header.js"
import { MovieHTML } from "./randomMovie.js"

const gotMovies = getMovie ()



const mainContainer = document.querySelector(".container")


const applicationHTML = `
<section class="questions">
${Form()}
</section>
<section class="console">
    ${MovieHTML()}
</section>
<div class="sidebar">sidebar me babey</div>
<div class="sidebar">sidebar also maybe</div>
<section class='header-section'>
    ${Header()}
</section>
`
mainContainer.innerHTML = applicationHTML
