function myClick() {
  document.getElementById("myNewImage").style.display = "block";
}

const flavor = prompt("do you like icecream?");
console.log(flavor);

const paragraph = document.getElementById("scoops");

var cone = [];
var jorgesFlavor = prompt("Jorge what is your favorite flavor?");
var edwinsFlavor = prompt("Edwin what is your favorite flavor?");
var yolandasFlavor = prompt("Yolanda what is your favorite flavor?");
var rileysFlavor = prompt("Riley what is your favorite flavor?");
var evansFlavor = prompt("Evan what is your favorite flavor?");
var chasesFlavor = prompt("Chase what is your favorite flavor");

cone.push(jorgesFlavor);
cone.push(edwinsFlavor);
cone.push(yolandasFlavor);
cone.push(rileysFlavor);
cone.push(evansFlavor);
cone.push(chasesFlavor);

console.log("Our favorite flavors are the following: ");
for (var i = 0; i < cone.length; i++) {
  buildIceCreamCone(cone[i]);
}

function buildIceCreamCone(cone) {
  var p = document.createElement("p");
  if (cone == "sweet cream") p.classList.add("sweet-cream");
  else if (cone == "butter pecan") p.classList.add("butter-pecan");
  else if (cone == "mocha") p.classList.add("mocha");
  else if (cone == "chocolate") p.classList.add("chocolate");
  else if (cone == "peanut butter") p.classList.add("peanut-butter");
  else if (cone == "chocolate brownie") p.classList.add("chocolate-brownie");
  console.log(p);
  p.innerHTML = cone;
  paragraph.appendChild(p);
}
