import { getMovie } from "./database.js";
import { Header } from "./header.js"
const gotMovies = getMovie ()



const mainContainer = document.querySelector(".container")


const applicationHTML = `
<section class="questions">
whatever we are calling this fun//
</section>
<section class="console">
    whatever we wanna call this one
</section>
<div class="sidebar">sidebar me babey</div>
<div class="sidebar">sidebar also maybe</div>
<section class='header-section'>
    ${Header()}
</section>
`
mainContainer.innerHTML = applicationHTML

