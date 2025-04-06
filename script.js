const pressButton = document.getElementById('press-button')
const statusDisplay = document.getElementById('status')
const turtleImage = document.getElementById('turtle-image')

let pressCount = 0
let exploded = false
const maxPresses = 100

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
