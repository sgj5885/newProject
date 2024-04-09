let countBoard = document.getElementById("count-board")
let countBooard2 = document.getElementById("count-board2")
let resetBtn = document.getElementById("count-board")
let resetBtn2 = document.getElementById("count-board2")



let countHome = 0
let countGuest = 0

function incrementHome() {
  countHome += 1
  countBoard.textContent = countHome
}
function incrementHomeDos() {
  countHome += 2
  countBoard.textContent = countHome
}
function incrementHomeTres() {
  countHome += 3
  countBoard.textContent = countHome
}
function incrementGuest(){
  countGuest += 1
  countBooard2.textContent = countGuest
}
function incrementGuestDos() {
  countGuest += 2
  countBooard2.textContent = countGuest
}
function incrementGuestTres() {
  countGuest += 3
  countBooard2.textContent = countGuest
}
function resetHome() {
  resetBtn.textContent = countHome
  countHome = 0
}
function resetGuest() {
  resetBtn2.textContent = countGuest
  countGuest = 0
}