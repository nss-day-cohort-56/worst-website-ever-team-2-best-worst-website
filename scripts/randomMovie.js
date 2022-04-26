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
//  define variable to hold html 
// 
