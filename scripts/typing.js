const wordElement = document.querySelector('.word')
const words = ['architect', 'engineer', 'optimize', 'develope', 'design']
let wordIndex = 0
let letterIndex = 0

function typeWord() {
  if (letterIndex < words[wordIndex].length) {
    wordElement.textContent += words[wordIndex][letterIndex]
    letterIndex++
    setTimeout(typeWord, 100)
  } else {
    setTimeout(deleteWord, 2000)
  }
}

function deleteWord() {
  if (letterIndex > 0) {
    wordElement.textContent = words[wordIndex].substring(0, letterIndex - 1)
    letterIndex--
    setTimeout(deleteWord, 100)
  } else {
    wordIndex++
    if (wordIndex >= words.length) wordIndex = 0
    setTimeout(typeWord, 500)
  }
}

typeWord()
