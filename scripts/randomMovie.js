import { getMovie } from "./database.js";
const allMovies = getMovie()

// create function to generate random movie result
// create function to generate a random numer between 1-3 - math.floormath.random
// create function that populates result into html 
// for movie of movies if id = random number return movie
// 
const randomMovie = () => {
  let randomNumber = Math.floor(Math.random()*43 + 1)
  for (const movie of allMovies) {
      if (randomNumber === movie.id) {
          return movie 
        }
        
    }
    
}
 const movieResult = randomMovie()
// 
//  define string variable to hold html 
// 

export const MovieHTML = () => {
  const htmlString = `
  <h3 class="movie-title">${movieResult.title}</h3>
  <p class="movie-year">${movieResult.year}</p>
  <h4 class="synopsis-title">Synopsis</h4>
  <p class="synopsis-text">${movieResult.synopsis}</p>
  <p class="spoiler-text">${movieResult.spoiler}</p>
  `
  return htmlString
}


