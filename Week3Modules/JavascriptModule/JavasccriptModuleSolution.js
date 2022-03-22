
/* 
 author: Evan Gertis
 date: 03/21/2022
 javascript module solution.
*/


const para = document.querySelector('p');
// create a div
const div = document.getElementById("paragraph");
para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
  createBio()
}

// append a bio
function createBio() {
    var paragraph = document.createElement("p");
    const stringToAppend = "I am a Human.";
    paragraph.innerHTML = stringToAppend;
    div.appendChild(paragraph);
    console.log("completed createBio");
}
