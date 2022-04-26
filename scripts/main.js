import { getMovie } from "./database.js";
import { Form } from "./form.js";




const mainContainer = document.querySelector(".container")


const applicationHTML = `
<section class="questions">
${Form()}
</section>
<section class="console">
    whatever we wanna call this one
</section>
<div class="sidebar">sidebar me babey</div>
<div class="sidebar">sidebar also maybe</div>
`
mainContainer.innerHTML = applicationHTML
const gotMovies = getMovie ()


