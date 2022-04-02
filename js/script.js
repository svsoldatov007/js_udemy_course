'use strict'
const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели', '')
const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}
if (personalMovieDB.count < 0) {
  alert('Произошла ошибка')
} else if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count < 30) {
  console.log('Вы классический зритель')
} else console.log('Вы киноман!')

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
console.log(personalMovieDB)
