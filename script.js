let heartCount = 0
let coinCount = 100
let copyCount = 0;
let heartCountElmnt= document.querySelector(".heartCount span")
let coinCountElmnt= document.querySelector(".coinCount span");
let copyCountElmnt = document.querySelector(".copyCount span")
let historyItemsElmnt=document.querySelector(".historyItems")
let clearBtn = document.querySelector(".clearBtn")

function handleHeartClick(){
  heartCount = heartCount + 1
  heartCountElmnt.textContent = heartCount;
}

clearBtn.addEventListener("click", function(){
  historyItemsElmnt.innerHTML = ""
})

let allCards=document.querySelectorAll(".card")

for (let i=0; i<allCards.length; i++){
 let card = allCards[i]
 let heartIcon = card.querySelector(".fa-heart")
 let copyBtn=card.querySelector(".copyBtn")
 
 heartIcon.addEventListener("click", function(){
   handleHeartClick()
 })

 copyBtn.addEventListener("click", function(){
   handleCopy(card)
 })
}
