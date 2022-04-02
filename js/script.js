'use strict'

function showMyDB() {
  if (!personalMovieDB.private) console.log(personalMovieDB)
}

let writeYourGenres = () => {
  if (numberofFilms > 0) {
    for (let i = 0; i < 3; i++) {
      const ans = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
      personalMovieDB.genres[i] = ans
    }
  }
}

let numberofFilms
function start() {
  numberofFilms = +prompt('Сколько фильмов вы уже посмотрели', '')
  while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
    numberofFilms = +prompt('Сколько фильмов вы уже посмотрели', '')
  }
}
start()
const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}
function reactOnAmountMovie() {
  if (personalMovieDB.count < 0) {
    alert('Произошла ошибка')
  } else if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
  } else console.log('Вы киноман!')
}

function markOfMovies() {
  if (numberofFilms > 0) {
    for (let i = 0; i < numberofFilms; ) {
      const film = prompt('Один из последних просмотренных фильма?', '')
      const mark = +prompt('На сколько оцениваете этот фильм?', '')
      if (!film || film.length > 50) {
        i--
      } else {
        personalMovieDB.movies[film] = mark
        i++
      }
    }
  }
}

reactOnAmountMovie()
markOfMovies()
showMyDB()
writeYourGenres()
