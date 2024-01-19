// Add event listener so when I click on the card it turns over 
// If the cards do not match I want them to turn back around
// If the cards do match I want them to stay flipped over 
// I want there to be three tries until i have to restart the game and start over

// array of images
const imageArray = [
{ 
   path:"assets/animal-7388186_1280.jpg",
   name:"lemur",
   id: 0
},
{
   path:"assets/cat-3169476_1280.jpg",
   name: "cat",
   id:1
},
{
   path:"assets/dog-7758887_1280.webp",
   name:"dog",
   id:2
},
{
   path:"assets/ireland-1985088_1280.jpg",
   name:"sheep",
   id:3
},
{
   path:"assets/lamb-292512_1280.jpg",
   name:"lamb",
   id:4
},
{
   path:"assets/meerkat-4821484_1280.jpg",
   name:"meerkat",
   id:5
}
]

const cardContainer = document.getElementById("card-container")
const click = document.getElementsByTagName("img")
let cardsClicked = 0 
let currentCard;
// const Secondcard;


// rename so it explains thats were creating many of
function makeCardSet(img) {
   const cards = [];
   for (let i = 0; i < 2 ; i++) {
      const card = document.createElement('div')
      card.classList.add("card")
      // make image
      const newImage = document.createElement("img")
      newImage.setAttribute("src", img.path)
      newImage.setAttribute("alt", img.name)
      newImage.classList.add("flipImage")
      card.appendChild(newImage)
      cards.push(card)
   }
    return cards
}

imageArray.forEach((img)=>{
   const cards = makeCardSet(img)
   cards.forEach(card => cardContainer.appendChild(card))
})

const cardToggle = document.querySelectorAll(".card")
cardToggle.forEach((card) => {
   const imgtoggle = card.getElementsByTagName("img")
   card.addEventListener("click", (e) => {
      console.log(e)
      console.log(document.querySelectorAll('.card > img'))
      cardsClicked++
      imgtoggle[0].classList.toggle("flipImage")
      if (cardsClicked % 2 === 0 && currentCard === e.target.childNodes.img){
         checkCard()
      }
   })
})

/* 
Matching
1. write a function that compares 2 cards - we might need a global variable that tracks the last card picked
2. when a card is selected, store the "alt" in the variable
3. when the second card is selected, check if the alt of the current card matches the global var
4. if it matches, delete the evenListener otherwise reset the cards back to normal
*/
let cardNodes = document.querySelectorAll(".flipImage")
function checkCard (animal) {
   cardNodes.forEach((node) => {
      if(node.alt === animal) {
         node.remove()
         cardNodes = document.querySelectorAll(".flipImage")
      }
   })
}


// function matchCards () {
//    console.log(getCards[0].getAttribute("alt"))
//    // console.log(getCard[1])
//       if(getCards[0].getAttribute("alt") === getCards[1].getAttribute("alt")) {
      
//    } else {
//    console.log("wrong")
//    }
// }
// matchCards()






