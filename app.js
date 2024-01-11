// Add event listener so when I click on the card it turns over 
// If the cards do not match I want them to turn back around
// If the cards do match I want them to stay flipped over 
// I want there to be three tries until i have to restart the game and start over
const card = document.getElementById("card-container")
   card.addEventListener("click",(event) => {
    if(event.target.classList.toggle("cards"))
        alert("you clicked a card")
   })
