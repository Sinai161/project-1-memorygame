// Add event listener so when I click on the card it turns over 
// If the cards do not match I want them to turn back around
// If the cards do match I want them to stay flipped over 
// I want there to be three tries until i have to restart the game and start over

// array of images
const imageArray = [
{ 
   path:"assets/animal-7388186_1280.jpg",
   name:"lemur",
},
{
   path:"assets/cat-3169476_1280.jpg",
   name: "cat",
},
{
   path:"assets/dog-7758887_1280.webp",
   name:"dog",
},
{
   path:"assets/ireland-1985088_1280.jpg",
   name:"sheep",
},
{
   path:"assets/lamb-292512_1280.jpg",
   name:"lamb",
},
{
   path:"assets/meerkat-4821484_1280.jpg",
   name:"meerkat",
}
]

function makeCard(img) {
   // make card div
   const card = document.createElement('div')
   card.classList.add("card")
   // make image
   const newImage = document.createElement("img")
   newImage.setAttribute("src", img.path)
   newImage.setAttribute("alt", img.name)
   newImage.classList.add("toggle")
   card.appendChild(newImage)
   return card
}

const cardContainer = document.getElementById("card-container")
imageArray.forEach((img)=>{
   const card = makeCard(img)
   cardContainer.appendChild(card)
   console.log(card)
})


const cardToggle = document.querySelectorAll(".card")
cardToggle.forEach((card) => {
   card.addEventListener("click",() => {
      let imgtoggle = document.getElementsByTagName("img")
      imgtoggle[0].classList.toggle("toggle")
   })
})



// let i = img
// for (i  = 0; i < 12; i++) {
//    cardContainer.appendChild(card)
// }

// create a function that will randomize my cards 
// function randomImage (imageArray) {
//    imageArray[Math.floor(Math.random()* imageArray.length)]
// }


// 
//    card.addEventListener("click",(event) => {
//     if(event.target.classList.toggle("card"))
//         alert("you clicked a card")
//    })


