// Dice faces map
// I could use an unique array with sub array, but in this case
// let keep it simple
const dotsMap_1 = [false, false, false, false, true, false, false, false, false];
const dotsMap_2 = [true, false, false, false, false, false, false, false, true];
const dotsMap_3 = [true, false, false, false, true, false, false, false, true];
const dotsMap_4 = [true, false, true, false, false, false, true, false, true];
const dotsMap_5 = [true, false, true, false, true, false, true, false, true];
const dotsMap_6 = [true, false, true, true, false, true, true, false, true];

// DOM Elements
const humanDiceContainer = document.querySelector(".human-dice");
const aiDiceContainer = document.querySelector(".ai-dice");

// create a cycle of 3 to create 3 rows inside each dice
for (let i = 0; i < 3; i++) {
  humanDiceContainer.innerHTML += `<div class="row">
                                    <div class="dot empty"></div>
                                    <div class="dot empty"></div>
                                    <div class="dot empty"></div>
                                  </div>`;

  aiDiceContainer.innerHTML += `<div class="row">
                                    <div class="dot empty"></div>
                                    <div class="dot empty"></div>
                                    <div class="dot empty"></div>
                                  </div>`;

}





document.getElementById("btn-generate").addEventListener("click", function () {
  // Get the list of dots for each dice
  const humanDots = humanDiceContainer.querySelectorAll(".dot");
  const aiDots = aiDiceContainer.querySelectorAll(".dot");

  // Generate random numbers
  const humanNumber = Math.ceil(Math.random() * 6);
  const aiNumber = Math.ceil(Math.random() * 6);

  console.log(humanNumber);
  console.log(aiNumber);

  /********************************************
   * HUMAN DICE 
   ********************************************/
  let humanMapToUse = null;

  // Switch on humanNumber top understand the map to use
  switch (humanNumber) {
    case 1: humanMapToUse = dotsMap_1; break;
    case 2: humanMapToUse = dotsMap_2; break;
    case 3: humanMapToUse = dotsMap_3; break;
    case 4: humanMapToUse = dotsMap_4; break;
    case 5: humanMapToUse = dotsMap_5; break;
    case 6: humanMapToUse = dotsMap_6; break;
  }

  for (let i = 0; i < humanDots.length; i++) {
    const diceDot = humanDots[i];

    // toggle the class "empty" for each dot
    diceDot.classList.toggle("empty", !humanMapToUse[i]);
  }

  /********************************************
   * HUMAN DICE 
   ********************************************/
  let aiMapToUse = null;

  // Switch on aiNumber top understand the map to use
  switch (aiNumber) {
    case 1: aiMapToUse = dotsMap_1; break;
    case 2: aiMapToUse = dotsMap_2; break;
    case 3: aiMapToUse = dotsMap_3; break;
    case 4: aiMapToUse = dotsMap_4; break;
    case 5: aiMapToUse = dotsMap_5; break;
    case 6: aiMapToUse = dotsMap_6; break;
  }

  for (let i = 0; i < aiDots.length; i++) {
    const diceDot = aiDots[i];

    // toggle the class "empty" for each dot
    diceDot.classList.toggle("empty", !aiMapToUse[i]);
  }
});