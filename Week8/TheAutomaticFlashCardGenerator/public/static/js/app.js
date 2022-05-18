// let currentCategory = '';

// // dom event listener to run when content is loaded
// document.addEventListener('DOMContentLoaded', function(){

//     document.getElementById('show-btn').addEventListener('click', function() {
//         document.getElementById('card-holder').style.display = 'none';
//         document.getElementById('create-form').style.display = 'block';
//         document.getElementById('category-input').value = currentCategory;
//     });

//     // load categories
//     console.log('Load categories');
//     let $catEl = document.getElementById('categories-list');
//     let xhr = new XMLHttpRequest();
//     xhr.open('get', '/categories');
//     xhr.onload = function() {
//         let cats = JSON.parse(this.responseText);
//         let output = '<ul>';
//         for ( let i = 0; i < cats.length; i++ ) {
//             output = output + `<li><a href="#${cats[i]}" class="load_cat" data-category="${cats[i]}">${cats[i]}</a></li>`;
//         }
//         output = output + '</ul>';
//         $catEl.innerHTML = output;

//         $('.load_cat').on('click', function() {
//             currentCategory = this.dataset.category;
            
//             getCard(currentCategory);
//         })
//     }
//     xhr.send();

//     document.getElementById('next').addEventListener('click', function() { 
//         getCard(currentCategory);
//     });

// });

// /*
// {
// id: 3,
// category: "fun",
// question: "Who is Chase?",
// answer: "A dude!"
// }
// */
// function getCard(category) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('get', '/card/' + category);
//     xhr.onload = function() {
//         // todo - make this look good
//         let card = JSON.parse(this.responseText);
//         console.log(card);
//         card.question = card.question.replace(/\n/g, '<br>');
//         card.answer = card.answer.replace(/\n/g, '<br>');
//         document.getElementById('question_front').innerHTML = card.question;
//         document.getElementById('answer_back').innerHTML = card.answer;
//         document.getElementById('card-holder').style.display = 'block';
//         document.getElementById('create-form').style.display = 'none';

        
//     };
//     xhr.send();
// }