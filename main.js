const formNumberOfTeams = document.querySelector(".formNumberOfTeams")
formNumberOfTeams.addEventListener("submit", handleFormNumberOfTeams)
const input = document.querySelector("input")
const msgError = document.querySelector(".msgError")

let numberOfTeams = 0

// Récupération du nombre d'équipes saisi par l'utilisateur
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

// Génération et Affichage du Formulaire pour rentrer le nom des équipes
function teamsTable() { 
  formNumberOfTeams.style.display = "none"
  formNumberOfTeams.removeEventListener("input", handleFormNumberOfTeams) 
  
  inputTeamsContainer.style.display = "flex"
  
  for (let i = 0; i < numberOfTeams; i++) {  
    const divInputTeam = document.createElement("div")
    divInputTeam.classList.add("divInputTeam")

    const input = document.createElement("input")
    input.classList.add("inputTeam")
    input.setAttribute("id", i)
    // input.setAttributes("required", "required")
    input.required = true
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
}

// Récupération du nom de chaque équipe
function handleTeams(e) {
  e.preventDefault()
  const inputsTeams = document.querySelectorAll(".inputTeam")
  const teamsArray = []
  inputsTeams.forEach(input => teamsArray.push(input.value))
  console.log("teamsArray", teamsArray);
  // creationOfMatchTables(teamsArray)
  creationOfDatingTables1(teamsArray)
}

function creationOfDatingTables1(teamsArray) {
  let allMatchsArray = [];
  const numberOfTeams = teamsArray.length;
  const numberOfRounds = numberOfTeams - 1; // Nombre de tours nécessaires pour que chaque équipe joue contre toutes les autres
  console.log("numberOfTeams", numberOfTeams, "numberOfRounds", numberOfRounds);

  if (numberOfTeams > 3) {
    for (let round = 0; round < numberOfRounds; round++) {
      let roundMatches = [];
      // numberOfTeams / 2 : nombre de matchs par rencontres (round)
      console.log("73 teamsArray", teamsArray);
      for (let i = 0; i < numberOfTeams / 2; i++) { 
        // console.log("round", round, "/ i :", i);
        let matchArray = [];
        // if (teamsArray[i] !== teamsArray[numberOfTeams - 1 - i]) {
          matchArray.push(teamsArray[i]);
          matchArray.push(teamsArray[numberOfTeams - 1 - i]);
          // console.log("79 :", i, teamsArray[i], "| 79+ :", numberOfTeams - 1 - i,teamsArray[numberOfTeams - 1 - i]);
        // } else {
        //   console.log(`exempt : ${teamsArray[i]}`);
        // }
        
        roundMatches.push(matchArray);     
      }
      // console.log("roundMatches", roundMatches);
      console.log("[...teamsArray].pop()", [...teamsArray].pop());
      console.log("************************");
      teamsArray.splice(1, 0, teamsArray.pop());
      allMatchsArray.push(roundMatches);
    }
  } else {
    for (let i = 0; i < teamsArray.length; i++) {
      for (let j = i + 1; j < teamsArray.length; j++) {
        let matchArray = []
        console.log(i, teamsArray[i], j, teamsArray[j])
        matchArray.push(teamsArray[i])
        matchArray.push(teamsArray[j])
        allMatchsArray.push(matchArray)
      }      
    }
    console.log("0", allMatchsArray);
  }
  
  console.log("No FLAT :", allMatchsArray);

  // allMatchsArray = allMatchsArray.flat();
  // console.log("FLAT :", allMatchsArray, allMatchsArray.length);
  showMatchTables(allMatchsArray, numberOfTeams)
}



// Affichage des tableaux de rencontres
function showMatchTables(matchTables, numberOfTeams) {
  const formPutTeams = document.querySelector('.formPutTeams')
  formPutTeams.style.display = "none"
  formPutTeams.removeEventListener("submit", handleTeams)

  const formResults = document.querySelector('.formResults')
  formResults.style.display = "block"
  // console.log("SHOW", matchTables)

  // const title = document.createElement('p')
  // title.textContent = "RESULTATS"
  // formResults.appendChild(title)

  const day = document.createElement('div')
  day.classList.add('day')

  console.log("matchTables", matchTables);
  //
  let incrementId = 0
  matchTables.map((oneMatch, index) => {
    console.log(":", oneMatch[0], oneMatch[1]);
    const meet = document.createElement('p')
    meet.classList.add('meet')
    meet.textContent = `Rencontre ${index + 1}`
    day.appendChild(meet)
    
    // console.log('numberOfTeams', numberOfTeams);
    
    
    if (numberOfTeams > 3) {  
      for (let i = 0; i < oneMatch.length; i++) {
        console.log("incrementId + i", incrementId)
        // console.log("hey", oneMatch[i][0], (oneMatch[i][1]))
        const match = document.createElement('div')
        match.classList.add('match')
        if (oneMatch[i][0] !== oneMatch[i][1]) {
          match.innerHTML = `      
            <label for="teamA${incrementId}">${oneMatch[i][0]}</label>
            <input type="text" id="teamA${incrementId}">
            <input type="text" id="teamB${incrementId}">
            <label for="teamB${incrementId}">${oneMatch[i][1]}</label>      
            `
          day.appendChild(match)
          incrementId++
        } else {
          const exempt = document.createElement('p')
          exempt.classList.add('exempt')
          exempt.innerHTML = `exempt : ${oneMatch[i][0]}`
          day.appendChild(exempt)
        }
        
      }
    }
    else {
      console.log("3teams", oneMatch);
      const match = document.createElement('div')
      match.classList.add('match')
      if (oneMatch[0] !== oneMatch[1]) {
        match.innerHTML = `      
        <label for="teamA${incrementId}">${oneMatch[0]}</label>
        <input type="text" id="teamA${incrementId}">
        <input type="text" id="teamB${incrementId}">
        <label for="teamB${incrementId}">${oneMatch[1]}</label>      
        `
        day.appendChild(match)
        incrementId++
      }
    }    
  

  })

  // for (let j = 0; j < matchTables.length; j++) { 
  //   // console.log("matchTables", matchTables[j][0], matchTables[j][1])
  //   const match = document.createElement('div')
  //   match.classList.add('match')
  //   // console.log("%", j, j % 2)      
    
  //   // ${j%2 === 0 ? `<p>Rencontre n°${dayNumberTitle}</p>` : ``}
  //   match.innerHTML = `      
  //     <label for="scoreA${j}">${matchTables[j][0]}</label>
  //     <input type="text" id="scoreA${j}">
  //     <input type="text" id="scoreB${j}">
  //     <label for="scoreB${j}">${matchTables[j][1]}</label>      
  //   `
  //   // j % 2 === 0 && dayNumberTitle++
    
  //   day.appendChild(match)
  // }
  
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

// Récupération des noms des équipes et du score de leur rencontre
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

// Calcul du nombre de points pour chaque rencontre
// function ranking(scoresArray) {
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