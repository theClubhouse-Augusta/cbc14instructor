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
    const name = prompt('Enter a new name');
    paragraph = document.createElement("p");
    paragraph.innerHTML = "I am a Human.";
    div.appendChild(paragraph);
  }