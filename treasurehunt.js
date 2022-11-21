// make an alert so I know this page is connected
alert(“this page is connected”)//present
var present = Math.floor(Math.random() * 9)//coal
var coal = Math.floor(Math.random() * 9)//if rainbow = bomb then rerun math generator
//bomb = random generator
 if (present === coal) {
   coal = Math.floor(Math.random() * 9)
 }//rainbow
const treasure = (id) => {
  if (id === present) {
  document.getElementById(id).innerHTML = “:steam_locomotive:” //present
  alert(“You have won the game!“)
} else if (id === coal) {
  document.getElementById(id).innerHTML = “:rock:” //coal
  alert(“You have lost the game!“)
} else {
  document.getElementById(id).innerHTML = “:santa:” //santa
