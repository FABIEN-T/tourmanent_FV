const formNumberOfTeams = document.querySelector(".formNumberOfTeams")
formNumberOfTeams.addEventListener("submit", handleFormNumberOfTeams)
const input = document.querySelector("input")
// input.addEventListener("input", console.log("input", input.value))
const msgError = document.querySelector(".msgError")

let numberOfTeams = 0

function handleFormNumberOfTeams(e) {
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

const inputTeamsContainer = document.querySelector(".inputTeamsContainer")
const formPutTeams = document.querySelector(".formPutTeams")
const btnPutTeams = document.querySelector(".btnPutTeams")

function teamsTable() { 
  formNumberOfTeams.style.display = "none"
  formNumberOfTeams.removeEventListener("input", handleFormNumberOfTeams)  
  
  for (let i = 0; i < numberOfTeams; i++) {  
    const divInputTeam = document.createElement("div")
    divInputTeam.classList.add("divInputTeam")

    const input = document.createElement("input")
    const team = document.createElement("p")
    team.textContent = `Equipe ${i + 1} :`

    divInputTeam.appendChild(team)
    divInputTeam.appendChild(input)
    
    inputTeamsContainer.appendChild(divInputTeam)
  }
  const btnPutTeams = document.createElement("button")
  btnPutTeams.classList.add("btnPutTeams")
  btnPutTeams.textContent = "Créer les tableaux de rencontres"

  inputTeamsContainer.appendChild(btnPutTeams)
  formPutTeams.addEventListener("submit", handleTeams)
  // creationOfDatingTables() 
}

function creationOfDatingTables() {
  console.log("submit 0")
  // const formPutTeams = document.querySelector(".formPutTeams")
  // formPutTeams.addEventListener("submit", handleTeams)
  
}

function handleTeams() {
  e.preventDefault()
  console.log("submit !!!")
}