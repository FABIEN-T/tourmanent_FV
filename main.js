const formNumberOfTeams = document.querySelector(".formNumberOfTeams")
formNumberOfTeams.addEventListener("submit", handleFormNumberOfTeams)
const input = document.querySelector("input")
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
}

const inputTeamsContainer = document.querySelector(".inputTeamsContainer")
const formPutTeams = document.querySelector(".formPutTeams")
const btnPutTeams = document.querySelector(".btnPutTeams")

function teamsTable() { 
  formNumberOfTeams.style.display = "none"
  formNumberOfTeams.removeEventListener("input", handleFormNumberOfTeams) 
  
  inputTeamsContainer.style.display = "flex"
  
  for (let i = 0; i < numberOfTeams; i++) {  
    const divInputTeam = document.createElement("div")
    divInputTeam.classList.add("divInputTeam")

    const input = document.createElement("input")
    input.classList.add("inputTeam")
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

function handleTeams(e) {
  e.preventDefault()
  const inputsTeams = document.querySelectorAll(".inputTeam")
  const teamsArray = []
  inputsTeams.forEach(input => teamsArray.push(input.value))

  // console.log("inputsTeams", teamsArray)
  // const formPutTeams = document.querySelector(".formPutTeams")
  // formPutTeams.addEventListener("submit", handleTeams)
  creationOfMatchTables(teamsArray)
}

function creationOfMatchTables(teamsArray) {  
  const numberOfMatchsPerSession = numberOfTeams - 2 
  let tempValue = 0
  let matchTables = []
  // let copy = [...teamsArray]
  // matchTables.push(copy) 
  // console.log("matchTables", matchTables)
  // console.log("____________________")


  for (let i = 0; i <= numberOfMatchsPerSession; i++)  {
    tempValue = teamsArray[1]
    teamsArray[1] = teamsArray[i+1]
    teamsArray[i+1] = tempValue
    // console.log("teamsArray ", teamsArray)
    // console.log("____________________")
    const copy = [...teamsArray]
    // console.log(copy);

    matchTables.push(copy.slice(0, 2))
    matchTables.push(copy.slice(2))
    // matchTables.push(copy)
  }

  // console.log("matchTables", matchTables)

  // for (let i = 0; i < numberOfTeams - 1; i++) {
  //   console.log(`J ${i+1}`, matchTables[i])    
  //   console.log(`J ${i + 1}`, matchTables[i + 1]) 
  //   console.log("____________________")
  // }
  
  showMatchTables(matchTables)
}

function showMatchTables(matchTables) {
  const formPutTeams = document.querySelector('.formPutTeams')
  formPutTeams.style.display = "none"
  formPutTeams.removeEventListener("submit", handleTeams)

  const formResults = document.querySelector('.formResults')
  formResults.style.display = "block"
  console.log("SHOW", matchTables)

  // const title = document.createElement('p')
  // title.textContent = "RESULTATS"
  // formResults.appendChild(title)

  const day = document.createElement('div')
  day.classList.add('day')
    
  let dayTitle = 1 
  for (let j = 0; j < matchTables.length; j++) { 
    // console.log("matchTables", matchTables[j][0], matchTables[j][1])
    const match = document.createElement('div')
    match.classList.add('match')
    // console.log("%", j, j % 2)      
    
    match.innerHTML = `
      ${j%2 === 0 ? `<p>Journée ${dayTitle}</p>` : ``}
      <label for="scoreA${j}">${matchTables[j][0]}</label>
      <input type="text" id="scoreA${j}">
      <input type="text" id="scoreB${j}">
      <label for="scoreB${j}">${matchTables[j][1]}</label>
    `
    j % 2 === 0 && dayTitle++
    
    day.appendChild(match)
  }
  
  const btnScores = document.createElement("button")
  btnScores.setAttribute("type", "submit")
  btnScores.classList.add("btnScores")   
  btnScores.textContent = "Calcul pour le classement"
  day.appendChild(btnScores)  
  formResults.appendChild(day) 

  formResults.addEventListener("submit", handleScores) 
}

let scoresArray = []
let labelsArray = []

function handleScores(e) {
  e.preventDefault()
  const scoresInput = [...document.querySelectorAll(".match input")]
  const labelsInput = [...document.querySelectorAll(".match label")]
  
  scoresInput.map(score => scoresArray.push(score.value))  
  labelsInput.map(label => labelsArray.push(label.innerText))  
  // labelsArray.map(label => {
  //   console.log("label", label)
  // })
  console.log(labelsArray);
  console.log(scoresArray )
  // ranking(scoresArray)
}

// function scoresArray(scoresArray) {
//   console.log(scoresArray)

// }

function ess() {
  // let results = [
  //  {
      //   team: a,
      //   value : 0
      // }
  //]
  
  // let matchArray = [['a', 'b'], ['c', 'd'], ['a', 'c'], ['b', 'd'], ['a', 'd'], ['b', 'c']]
  // let scoresArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
  // console.log(labelsArray);
  // let concatArray = []
  // for (let i = 0; i < matchArray.length; i++) {
  //   concatArray.push(matchArray[i][0])
  //   concatArray.push(matchArray[i][1])
  // }
 
  // console.log("concatArray", concatArray);
// 
  
  // console.log(matchArray[0][0], tab[0], tab[1], matchArray[0][1]);
  // console.log(matchArray[1][0], tab[0], tab[1], matchArray[0][1]);

  let teamsArray = ['a', 'b', 'c', 'd']
  let teamsPointsArray = []

  // tableau équipe / points
  for (let i = 0; i < teamsArray.length; i++) {
    let tempArray = []
    tempArray.push(teamsArray[i])
    tempArray.push(0)
    teamsPointsArray.push(tempArray)
  }
  console.log("teamsPointsArray", teamsPointsArray);

}

// ess()