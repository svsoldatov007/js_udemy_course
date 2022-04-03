const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello!')
  }
}

const jonh = {
  health: 100
}

// устаревший формат
jonh.__proto__ = soldier
jonh.sayHello()