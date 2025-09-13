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

function handleCopy(card) {
  let number= card.querySelector(".cardNumber").textContent
  navigator.clipboard.writeText(number)
  copyCount = copyCount + 1
  copyCountElmnt.textContent = copyCount;
    alert("নম্বর কপি হোয়েছে: " + number)
}

function handleCall(card) {
 let serviceName = card.querySelector(".cardNameBn").textContent;
 let serviceNameEn = card.querySelector(".cardNameEN").textContent;
 let serviceNumber = card.querySelector(".cardNumber").textContent

 if(coinCount < 20){
   alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
   return
 }

 coinCount = coinCount - 20;
 coinCountElmnt.textContent = coinCount
 alert("📞 Calling " + serviceNameEn + " " + serviceNumber + "...");
 
 let time=new Date().toLocaleTimeString()

 let item=document.createElement("div")
 item.classList.add("historyItem");
 item.innerHTML =
   '<div>' +
   "<p class='serviceName'>" + serviceName + "</p>" +
   "<p class='serviceNumber'>" + serviceNumber + "</p>" +
   "</div>" +
   "<p class='callTime'>" + time + "</p>"

 historyItemsElmnt.prepend(item)
}

clearBtn.addEventListener("click", function(){
  historyItemsElmnt.innerHTML = ""
})

let allCards=document.querySelectorAll(".card")

for (let i=0; i<allCards.length; i++){
 let card = allCards[i]
 let heartIcon = card.querySelector(".fa-heart")
 let copyBtn=card.querySelector(".copyBtn")
 let callBtn = card.querySelector(".callBtn");
 
 heartIcon.addEventListener("click", function(){
   handleHeartClick()
 })

 copyBtn.addEventListener("click", function(){
   handleCopy(card)
 })

  callBtn.addEventListener("click", function(){
   handleCall(card)
 })
}
