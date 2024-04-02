day.innerHTML = `
<form class="formDay">
<p>Journée ${i+1}</p>
<div class="match">
  <label for="score${i}">${matchTables[i][0]}</label>
  <input type="number" id="score${i}">
  <input type="number" id="score${i+1}">
  <label for="score${i+1}">${matchTables[i][1]}</label>
</div>
<div class="match">
  <label for="score${i+2}">${matchTables[i+1][0]}</label>
  <input type="number" id="score1">
  <input type="number" id="score1">
  <label for="score${i+1}">${matchTables[i+1][1]}</label>
</div>
`

// tempValue = teamsArray[1]
  // teamsArray[1] = teamsArray[2]
  // teamsArray[2] = tempValue
  // console.log("teamsArray 2", teamsArray)
  // copy = [...teamsArray]
  // matchTables.push(copy)
  // console.log("matchTables", matchTables)
  // console.log("____________________")

  // tempValue = teamsArray[1]
  // teamsArray[1] = teamsArray[3]
  // teamsArray[3] = tempValue
  // console.log("teamsArray 3", teamsArray)
  // copy = [...teamsArray]
  // matchTables.push(copy)
  // console.log("matchTables", matchTables)
  // console.log("____________________")






// function creationOfDatingTables(teamsArray) {  
  
//   let allMatchsArrray = []
//   // console.log("teamsArray", teamsArray);

//   for (let i = 0; i < teamsArray.length; i++) {
//     for (let j = i + 1; j < teamsArray.length; j++) {
//       let matchArray = []
//       // console.log(teamsArray[i], teamsArray[j])
//       matchArray.push(teamsArray[i])
//       matchArray.push(teamsArray[j])
//       allMatchsArrray.push(matchArray)
//     }
//   }  
//   console.log("rencontres", allMatchsArrray)

//   // nombre de matchs par session
//   let numberOfMatchsPerSession = Math.trunc(numberOfTeams / 2)
//   // console.log("numberOfMatchsPerSession", numberOfMatchsPerSession);
  
//   let allMatchsSessionArrray = []
//   // console.log("JSON.stringify", JSON.stringify(allMatchsArrray[0]));
//   // console.log(allMatchsArrray, allMatchsSessionArrray)
//   // console.log("bool", (allMatchsArrray[0].filter(val => allMatchsArrray[5].includes(val))).length > 0)

//   // allMatchsSessionArrray.push(allMatchsArrray[0])
//   // for (let i = 0; i < allMatchsArrray.length; i++) {
//   //   console.log(`allMatchsArrray${i}`, allMatchsArrray[i])
//   //   // console.log("bool", (allMatchsArrray[i].filter(val => allMatchsArrray[i === allMatchsArrray.length-1 ? i-1 : i].includes(val))).length > 0)
//   //   if ((allMatchsArrray[i].filter(val => allMatchsArrray[i === allMatchsArrray.length-1 ? i-1 : i].includes(val))).length > 0) {
//   //     i++
//   //   } else {
//   //     allMatchsSessionArrray.push(allMatchsArrray[0])
//   //   }
//   // }

//   // allMatchsSessionArrray.push(allMatchsArrray[0])

//   // for (let i = 0; i <= allMatchsArrray.length; i++){
//   //   console.log("i",i);
//   //   if (
//   //     allMatchsArrray[i][0] === allMatchsArrray[i + 1][0] ||
//   //     allMatchsArrray[i][0] === allMatchsArrray[i + 1][1] ||
//   //     allMatchsArrray[i][1] === allMatchsArrray[i + 1][0] ||
//   //     allMatchsArrray[i][1] === allMatchsArrray[i + 1][1]
//   //   ) {
//   //     i++
//   //   } else {
//   //     allMatchsSessionArrray.push(allMatchsArrray[i + 1])
//   // }
    
//   // }
//   // console.log(allMatchsSessionArrray);


//   // for (let i = 0; i < allMatchsArrray.length -1; i++) {
    
//   //   let session = []
//   //   session.push(allMatchsArrray[i])
//   //   let equalBool = allMatchsArrray[i][0] === allMatchsArrray[i + 1][0] ||  allMatchsArrray[i][0] === allMatchsArrray[i + 1][1] ||      allMatchsArrray[i][1] === allMatchsArrray[i + 1][0] ||     allMatchsArrray[i][1] === allMatchsArrray[i + 1][1]
//   //   console.log(allMatchsArrray[i + 1][0]);
//   //   console.log("equalBool", equalBool);
//   //   if (equalBool) {
//   //     i++
//   //     session.push(allMatchsArrray[i + 1])
//   //   }
//   //   session.push(allMatchsArrray[i + 1])
//   //   allMatchsSessionArrray.push(session)
//   // }
//   // console.log("Rencontres", allMatchsSessionArrray);






//   // showAllMatch(allMatchsArrray)
  
// }

// nombre triangulaire 1 3 6 10 15 28
// function showAllMatch(allMatchsArrray) {
//   console.log("R1", allMatchsArrray[0], allMatchsArrray[5])
//   console.log("R2", allMatchsArrray[1], allMatchsArrray[4])
//   console.log("R3", allMatchsArrray[2], allMatchsArrray[3])
//   console.log("numberOfTeams", numberOfTeams)
//   console.log("nb de sessions", allMatchsArrray.length);
//   console.log("_________________________");
  
//   // if ()
//   for (let i = 0; i < allMatchsArrray.length / 2; i++) {
//     console.log(allMatchsArrray.length, allMatchsArrray.length % 2);
//     console.log("i", i, allMatchsArrray.length -i -1);
//     console.log("Sessions", allMatchsArrray[i], allMatchsArrray[allMatchsArrray.length -i -1])
//   }
  
// }




function showMatchTables(matchTables) {
    const formPutTeams = document.querySelector('.formPutTeams')
    formPutTeams.style.display = "none"
    formPutTeams.removeEventListener("submit", handleTeams)
  
    const formResults = document.querySelector('.formResults')
    formResults.style.display = "block"
    console.log("SHOW", matchTables)
    for (let i = 0; i < numberOfTeams - 1; i++) { // numberOfTeams - 1 = nombre de "journées de championnat"
      const day = document.createElement('div')
      day.classList.add('day')
  
      const matchTitle = document.createElement('p')
      matchTitle.classList.add('matchTitle')    
      matchTitle.textContent = `Jounnée ${i+1}`
      day.appendChild(matchTitle)
      
      let h = i
  
      for (let j = 0; j < numberOfTeams - 2; j++) { // numberOfTeams - 2 = nombre de matchs par "journées de championnat"
        h = i
        console.log("j", j, "i", i, "h", h);
        console.log("matchTables", matchTables[h+j][0], matchTables[h+j][1])
        const match = document.createElement('div')
        match.classList.add('match')
  
        match.innerHTML = `
          <label for="score${j}">${matchTables[i][0]}</label>
          <input type="number" id="score${j}">
          <input type="number" id="score${j+1}">
          <label for="score${j+1}">${matchTables[i][1]}</label>
        `
        day.appendChild(match)
        
      }
      formResults.appendChild(day)  
    }
  }

  
<p>_______________________</p>
  
  for (let i = 0; i < numberOfTeams - 1; i++) { // numberOfTeams - 1 = nombre de "journées de championnat"
    const day = document.createElement('div')
    day.classList.add('day')

    const matchTitle = document.createElement('p')
    matchTitle.classList.add('matchTitle')    
    matchTitle.textContent = `Jounnée ${i+1}`
    day.appendChild(matchTitle)

    for (let j = 0; j < matchTables.length; j++) { // numberOfTeams - 2 = nombre de matchs par "journées de championnat"
   
      // console.log("j", j, "i", i, "h", h);
      console.log("matchTables", matchTables[j][0], matchTables[j][1])
      const match = document.createElement('div')
      match.classList.add('match')
  
      match.innerHTML = `
        <label for="score1">${matchTables[j][0]}</label>
        <input type="number" id="score1">
        <input type="number" id="score2">
        <label for="score2">${matchTables[j][1]}</label>
      `
      day.appendChild(match)
      // formResults.appendChild(match) 
    }
    
    formResults.appendChild(day)  
  }



  `<!-- <div class="inputTeamsContainer">
        <button class="btnPutTeams">Créer les tableaux de rencontres</button>
      </div> -->
      <!-- <div class="day">
        <form class="formDay">
          <p>Journée 1</p>
          <div class="match">
            <label for="score1">a</label>
            <input type="number" id="score1">
            <input type="number" id="score1">
            <label for="score2">b</label>
          </div>
          <div class="match">
            <label for="score1">c</label>
            <input type="number" id="score1">
            <input type="number" id="score1">
            <label for="score2">d</label>
          </div>
      </div> --></input>`

      function scoreRecovery() {
        // const scores = document.querySelector(".formResults")
        const scoresInputs = [...document.querySelectorAll(".match input[type=text]")]
        // console.log(scoresInputs);
        scoresInputs.map(scoresInputs => scoresInputs.addEventListener("input", handleScores))
      }
      
      function handleScores(e) {
        console.log("score", input.value);
      }




// Affichage des tableaux de rencontres
function showMatchTables(matchTables) {
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
    
  let dayNumberTitle = 1 
  for (let j = 0; j < matchTables.length; j++) { 
    // console.log("matchTables", matchTables[j][0], matchTables[j][1])
    const match = document.createElement('div')
    match.classList.add('match')
    // console.log("%", j, j % 2)      
    
    // ${j%2 === 0 ? `<p>Rencontre n°${dayNumberTitle}</p>` : ``}
    match.innerHTML = `
      
      <label for="scoreA${j}">${matchTables[j][0]}</label>
      <input type="text" id="scoreA${j}">
      <input type="text" id="scoreB${j}">
      <label for="scoreB${j}">${matchTables[j][1]}</label>      
    `
    // j % 2 === 0 && dayNumberTitle++
    
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



function creationOfDatingTables2(teamsArray) {
  
  let allMatchsArray = []
  // console.log("teamsArray", teamsArray);
  
  for (let i = 0; i < teamsArray.length; i++) {
    for (let j = i + 1; j < teamsArray.length; j++) {
      let matchArray = []
      console.log(i, teamsArray[i], j, teamsArray[j])
      matchArray.push(teamsArray[i])
      matchArray.push(teamsArray[j])
      allMatchsArray.push(matchArray)
    }
  }
  console.log("rencontres", allMatchsArray)
}