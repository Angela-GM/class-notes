// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (movies) => {
  //Mapiamos el array de movies para sacar cada director del array
  const directorsListRaw = movies.map((movie) => movie.director);

  // Jarko approach
  // let directosFilteredAlt = [... new Set(directorsRaw)];
  // console.log(directosFilteredAlt);

  // Limpiar el array con los nombres de los directores dupolicados.
  const directorsFiltered = directorsListRaw.filter(
    (director, index) => directorsListRaw.indexOf(director) === index
  );
  //   console.table(directorsFiltered);
  return directorsFiltered;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  //   console.log(filteredMovies);
  return filteredMovies.length;
};

console.log(howManyMovies(movies));

//Iteration 3: All score average - Get the average of all scores with 2 decimals
const scoresAverage = (movies) => {
  if (movies.length === 0) return 0;

  let totalScore = movies.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score;
    } else {
      return accumulator;
    }
  }, 0);

  const averageScore = (totalScore / movies.length).toFixed(2);
  return Number(averageScore);
};

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) => {
  let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  const averageDramaScores = scoresAverage(dramaMovies);
  return averageDramaScores;
};
console.table(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  //Crear un shallow copy del array original con el metodo .map()

  let movieArrayCopy = movies.map((movie) => {
    return movie;
  });

  //usemos el metodo sort() para poder ordenar los titulos
  movieArrayCopy = movies.sort((numOne, numTwo) => {
    return numOne > numTwo ? 1 : -1;
  });

  //   return movieArrayCopy;
  console.log(movieArrayCopy);
};

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  const moviesTitle = movies.map((movies) => movies.title);
  return moviesTitle.slice(0, 20).sort();
};

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
  let newMovies = [];
  for (let i = 0; i < movies.length; i++) {
    let separate = movies[i].duration.split("m");
    return separate;
  }
};

// console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}
