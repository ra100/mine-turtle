const pressButton = document.getElementById('press-button')
const statusDisplay = document.getElementById('status')
const turtleImage = document.getElementById('turtle-image')

let pressCount = 0
let exploded = false
let maxPresses // maxPresses will be initialized on game reset

function checkExplosion() {
  const explosionChance = pressCount / maxPresses
  const randomValue = Math.random()

  if (randomValue < explosionChance) {
    exploded = true
    turtleImage.src = 'explosion.svg'
    statusDisplay.textContent = 'BOOM! The Mine Turtle exploded!'
    pressButton.disabled = true
    setTimeout(resetGame, 2000) // Reset the game after 2 seconds
  } else {
    statusDisplay.textContent = 'Safe... for now.'
  }
}

function resetGame() {
  pressCount = 0
  exploded = false
  maxPresses = Math.floor(Math.random() * (200 - 50 + 1)) + 50 // Random value between 50 and 200
  turtleImage.src = 'turtle.png'
  statusDisplay.textContent = "Don't let it explode!"
  pressButton.disabled = false
}

pressButton.addEventListener('click', () => {
  if (!exploded) {
    pressCount++
    pressButton.classList.add('pressed')
    setTimeout(() => {
      checkExplosion()
      pressButton.classList.remove('pressed')
    }, 500)
  }
})

resetGame()
