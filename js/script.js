'use strict'
const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели', '')
const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

const a = prompt('Один из последних просмотренных фильма?', '')
const b = prompt('На сколько оцениваете этот фильм?', '')
const c = prompt('Один из последних просмотренных фильма?', '')
const d = prompt('На сколько оцениваете этот фильм?', '')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d
console.log(personalMovieDB)
