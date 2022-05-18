const express = require('express');
const app = express();

require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection({
    database: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
})


// get topics
// SELECT * FROM FLASH_CARD_GENERATOR.topic ORDER by topic
app.get("/topics", (req,res) => {
    let topics = [];
    connection.query('SELECT * FROM FLASH_CARD_GENERATOR.topic ORDER by topic', (err,results)=>{
        for(let i = 0; i < results.length; i++){
            topics.push(results[i].topic)
        }
        res.render('topic', {
            topics: topics
        });
    });
});

// get categories
// SELECT * FROM FLASH_CARD_GENERATOR.category;
app.get("/topics/:category", (req,res) => {
    let categories = [];
    connection.query('SELECT * FROM category WHERE category.cat_id = (SELECT cat_id FROM FLASH_CARD_GENERATOR.topic WHERE FLASH_CARD_GENERATOR.topic.topic = ?)', [req.params.category], (err,results)=>{
        console.log(req.params.category)
        let categories = []
        for(let i = 0; i < results.length; i++){
            categories.push(results[i].category)
        }
        res.render('category', {
            categories: categories,
            topic: req.params.category
        });
    });
});

// get cards
app.get("/topics/:category/:card", (req,res) => {
    let cards = [];
    connection.query('SELECT * FROM card WHERE card.cat_id = (SELECT cat_id FROM FLASH_CARD_GENERATOR.category WHERE FLASH_CARD_GENERATOR.category.category = ?)', [req.params.card], (err,results)=>{
        console.log(req.params.card);
        let cards = [];
        for(let i = 0; i < results.length; i++){
            cards.push(results[i])
        }
        console.log(cards);
        res.render('card', {
            cards: cards,
            category: req.params.category
        });
    });
});

// create a topic
app.post('/topic', (req, res) => {
    let id = req.body.id;
    let topic = req.body.topic;
    connection.query('INSERT INTO `FLASH_CARD_GENERATOR`.`topic` (`cat_id`,`topic`) VALUES (?,?)', [id, topic], (err, results) => {
        res.redirect('/');
    });
});

// create a category
// EX: INSERT INTO `FLASH_CARD_GENERATOR`.`category` (`cat_id`, `category`) VALUES ('1', 'stoicisim');
app.post('/category', (req, res) => {
    let id = req.body.id;
    let category = req.body.category;
    connection.query('INSERT INTO `FLASH_CARD_GENERATOR`.`category` (`cat_id`, `category`) VALUES (?, ?)', [id, category], (err, results) => {
        res.redirect('/');
    });
});

// create a card
/* EX: INSERT INTO `FLASH_CARD_GENERATOR`.`card` (`cat_id`, `prompt`, `question`, `answer`) VALUES ('1', 'prompt', 'question','answer');
*/
app.post('/card', (req, res) => {
    let id = req.body.id;
    let prompt = req.body.prompt;
    let question = req.body.question;
    let answer = req.body.answer;
    connection.query('INSERT INTO `FLASH_CARD_GENERATOR`.`card` (`cat_id`, `prompt`, `question`, `answer`) VALUES (?, ?, ?, ?);', [id, prompt, question, answer], (err, results) => {
        res.redirect('/');
    });
});

app.listen(process.env.PORT || 3000);