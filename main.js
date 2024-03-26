const form = document.querySelector("form")
form.addEventListener("submit", handleForm)
const input = document.querySelector("input")
// input.addEventListener("input", console.log("input", input.value))
const msgError = document.querySelector(".msgError")

let numberOfTeams = 0

function handleForm(e) {
  e.preventDefault()
  numberOfTeams = input.value
  if (numberOfTeams < 3) {
    msgError.style.display = "block"
  } else {
    msgError.style.display = "none"
    teamsTable()
  }
  console.log("input", numberOfTeams)
}

function teamsTable() {
  for (let i = 0; i < numberOfTeams; i++) {
      const input = document.createElement("input")
      console.log("hey");
  }
    
}
