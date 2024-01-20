// Add event listener so when I click on the card it turns over 
// If the cards do not match I want them to turn back around
// If the cards do match I want them to stay flipped over 
// I want there to be three tries until i have to restart the game and start over

/* 
1. set up a score variable to keep track
2. when 2 cards are selected succesfully - add 1 point to the score
3. grab the html element that holds our score
4. update the html elements text to be "score:" + variable
*/
let score = 0;


// array of data for img html element
const imageArray = [
{ 
   src:"assets/animal-7388186_1280.jpg",
   alt:"lemur",
   id: 0
},
{
   src:"assets/cat-3169476_1280.jpg",
   alt: "cat",
   id:1
},
{
   src:"assets/dog-7758887_1280.webp",
   alt:"dog",
   id:2
},
{
   src:"assets/ireland-1985088_1280.jpg",
   alt:"sheep",
   id:3
},
{
   src:"assets/lamb-292512_1280.jpg",
   alt:"lamb",
   id:4
},
{
   src:"assets/meerkat-4821484_1280.jpg",
   alt:"meerkat",
   id:5
}
]

// container for all of our cards to sit in
const cardContainer = document.getElementById("card-container")

// global variables for our game
let cardsClicked = 0 
let lastSelectedAnimal;

function makeCardPair(imgData) {
   const cards = [];
   for (let i = 0; i < 2 ; i++) {
      const card = document.createElement('div')
      card.classList.add("card")
      // make image
      const newImage = document.createElement("img")
      newImage.setAttribute("src", imgData.src)
      newImage.setAttribute("alt", imgData.alt)
      newImage.classList.add("hideImage")
      card.appendChild(newImage)
      cards.push(card)
   }
    return cards
}


// Creates our cards, sorts them, and then adds them to our card container
const generatedCards = imageArray.flatMap((img) => makeCardPair(img))
generatedCards.sort(() => Math.random() - 0.5)
generatedCards.forEach(card => cardContainer.appendChild(card))

// get cards and then add our event listener with our game logic
const cardToggle = document.querySelectorAll(".card")
cardToggle.forEach((card) => {
   const imgtoggle = card.getElementsByTagName("img")
   card.addEventListener("click", (e) => {
      cardsClicked++
      imgtoggle[0].classList.toggle("hideImage")

      const targetAnimal = e.target.children[0].alt;

      if (cardsClicked % 2 === 0 && lastSelectedAnimal === targetAnimal){
         // run when 2 clicked cards match
         removeMatches(targetAnimal)
         document.getElementById("score").textContent = `Score: ${score = score + 1}`
         checkWin()
      }
      if(cardsClicked % 2 === 0 && lastSelectedAnimal !== targetAnimal){
         // run when 2 clicked cards dont match
         flipWrongCards()
      }

      // if neither of our conditions are met, just update the global
      lastSelectedAnimal = targetAnimal
   })
})
let imgNodes = document.querySelectorAll(".hideImage")
function removeMatches (animal) {
   imgNodes.forEach((imgNode) => {
      if(imgNode.alt === animal) {
         //
         setTimeout(() => {
            imgNode.parentNode.remove()
            imgNodes = document.querySelectorAll(".hideImage")
         }, 1 * 1000)
      }
   })
}

let imgClass = document.querySelectorAll("img")
function flipWrongCards () {
imgClass.forEach((img) => {
   if(img.classList.contains("hideImage")) {
      return;
   } else {
      setTimeout(() => {
         img.classList.add("hideImage")
      }, 750)
   }
})
}

