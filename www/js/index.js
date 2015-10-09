// Data for game object
var shuffledList = []
var answer = 0
var score = 0

// Game Elements in DOM
var title = document.getElementById('title'),
    images = document.querySelectorAll('#list img')
    scoreDisplay = document.getElementById('scoreDisplay')

var game = {
  startGame: function() {
    scoreDisplay.innerHTML = score
    shuffledList = shuffle(list)
    answer = getRandomArbitrary(0,3)
    title.innerHTML = shuffledList[answer]

    this.injectImages()
  },
  injectImages: function() {
    for (var i = 0; i < images.length; i++) {
      images[i].src = 'img/' + shuffledList[i] + '.png'
      images[i].alt = shuffledList[i]
    }
  },
  checkAnswer: function(e) {
    if (e.target.alt === shuffledList[answer]) {
      score++
      game.startGame()
    } else {
      if (score != 0) {
        score--
      }
      navigator.vibrate(3000)
      game.startGame()

    }
  }
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', game.checkAnswer)
}
