let counterText = document.getElementById("counter")

var counter = 0

function count() {
  counter++
  counterText.innerHTML = counter
}