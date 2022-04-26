import { getMovie } from "./database.js";
const allMovies = getMovie()

// create function to generate random movie result
// create function to generate a random numer between 1-3 - math.floormath.random
// create function that populates result into html 
// for movie of movies if id = random number return movie
// 
export const randomMovie = () => {
  let randomNumber = Math.floor(Math.random()*43 + 1)
  let htmlString = ``
  for (const movie of allMovies) {
      if (randomNumber === movie.id) {
          htmlString = `
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-year">${movie.year}</p>
          <h4 class="synopsis-title">Synopsis</h4>
          <p class="synopsis-text">${movie.synopsis}</p>
          <p class="spoiler-text">${movie.spoiler}</p>
          ` 
          return htmlString
        } else {
          htmlString = "no movies here :("
        }
        
    }
  return htmlString  
}
 

