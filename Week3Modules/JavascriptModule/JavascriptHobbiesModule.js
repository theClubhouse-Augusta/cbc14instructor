
/* 
 author: Evan Gertis
 date: 03/22/2022
 javascript hobbies module solution.
*/

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
  // append a bio
  addParagraph("I am a Human.");
  console.log("created bio");
  // append hobbies
  addParagraph("I enjoy teaching.");
  console.log("created hobbies");
}

function addParagraph(content){
    var p = document.createElement("p");
    p.innerHTML = content;
    para.appendChild(p);
}