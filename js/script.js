'use strict'
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    let films = +prompt('Сколько фильмов вы уже посмотрели', '')
    while (films == '' || films == null || isNaN(films)) {
      films = +prompt('Сколько фильмов вы уже посмотрели', '')
    }
    personalMovieDB.count = films
  },
  reactOnAmountMovie: function () {
    if (personalMovieDB.count < 0) {
      alert('Произошла ошибка')
    } else if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count < 30) {
      console.log('Вы классический зритель')
    } else console.log('Вы киноман!')
  },
  markOfMovies: function () {
    if (personalMovieDB.count > 0) {
      for (let i = 0; i < personalMovieDB.count; ) {
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
  },
  showMyDB: function () {
    if (!personalMovieDB.private) console.log(personalMovieDB)
  },
  writeYourGenres: function () {
    if (personalMovieDB.count > 0) {
      for (let i = 0; i < 3; i++) {
        let ans = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
        while (ans == '' || ans == null) {
          ans = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
        }
        personalMovieDB.genres[i] = ans
      }
      personalMovieDB.genres.forEach(function (genre, ind) {
        console.log(`Любимый жанр №${ind + 1} - это ${genre}`)
      })
    }
  },
  toggleVisibleMyBD: function () {
    personalMovieDB.private = !personalMovieDB.private
  },
}
personalMovieDB.start()
personalMovieDB.reactOnAmountMovie()
personalMovieDB.markOfMovies()
// personalMovieDB.toggleVisibleMyBD()
personalMovieDB.showMyDB()
personalMovieDB.writeYourGenres()
