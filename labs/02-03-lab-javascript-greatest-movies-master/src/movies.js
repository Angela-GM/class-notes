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
  // part 1
  // Queremos crear un "shallow" copy del array original :) - usemos el metodo map() === "crear un shallow copy" :)
  const movieArrayCopy = movies.map((movie) => {
    return movie;
  });
  // part 2
  // usemos el sort() para pdoer sortear :)
  movieArrayCopy.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) return movieA.year - movieB.year;
    if (movieA.year < movieB.year) return movieA.year - movieB.year;
    else return movieA.title.localeCompare(movieB.title);
  });
  // part 3
  // return with style
  return movieArrayCopy;
};

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  return movies
    .map((movie) => movie.title) // mappeamos cada pocision del array
    .sort() // usamos este metodo para ordenar alfabeticamente, esto automatico por eso usamos el metodo.
    .slice(0, 20); // cortamos desde la position 0 hasta la 20 - 20 pelis
};

// const orderAlphabetically = (movies) => {
//   const moviesTitle = movies.map((movies) => movies.title);
//   return moviesTitle.slice(0, 20).sort();
// };

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//Part 001
const convertHours = (hourString) => {
  let calculateHour = hourString.split("h");
  return calculateHour[0] * 60;
};
// Part 002
const convertMinutes = (minuteString) => {
  let calculateMinutes = minuteString.split("min");
  return Number(calculateMinutes[0]);
};
// Part 003
const convertDuration = (duration) => {
  let timePieces = duration.split(" ");

  let minutes = timePieces.reduce((sum, onePiece) => {
    if (onePiece.includes("h")) {
      return sum + convertHours(onePiece);
    }
    return sum + convertMinutes(onePiece);
  }, 0);

  return minutes;
};
// Part 004
const turnHoursToMinutes = (movies) => {
  let newCentArray = movies.map((movie) => {
    let newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = convertDuration(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;

    return newMovie;
  });

  return newCentArray;
};
console.log("Iteration 07");
console.table(turnHoursToMinutes(movies));
console.log("-----------------------------");

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (movies) => {
  if (!movies.length) return null;

  let masterObject = {};

  movies.forEach((movie) => {
    if (!masterObject[movie.year]) {
      masterObject[movie.year] = [movie];
    } else {
      masterObject[movie.year].push(movie);
    }
  });

  let highest = 0;
  let theActualYear;
  for (let theYear in masterObject) {
    if (scoresAverage(masterObject[theYear]) > highest) {
      highest = scoresAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average score of ${highest}`;
};
console.log("Iteration 08");
console.log(bestYearAvg(movies));
console.log("-----------------------------");
