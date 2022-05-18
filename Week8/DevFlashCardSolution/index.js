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

app.get("/home", (req, res) => {
    let cats = [];
    connection.query('SELECT distinct(category) FROM cards ORDER by category', (err, results) => {
        console.log(results)
        // TODO: adding a migration file will ensure that the results are populated
        for ( let i = 0; i < results.length; i++ ) {
            cats.push(results[i].category);
        }
        res.render('home', {
            'categories': cats 
        });
    });
})

app.get("/", (req, res) => {
    let cats = [];
    connection.query('SELECT distinct(category) FROM cards ORDER by category', (err, results) => {
        console.log(results)
        // TODO: adding a migration file will ensure that the results are populated
        for ( let i = 0; i < results.length; i++ ) {
            cats.push(results[i].category);
        }
        res.render('index', {
            'categories': cats 
        });
    });
});

// GET /categories - list all categories in the system
// GET /card - get a random card
// GET /card/:category - get a random card from the category
// GET /cards/ - get a list of all cards
// GET /cards/:category - get a list of all cards in :category
// POST /card - create a new card.

app.get('/categories', (req, res) => {
    connection.query('SELECT distinct(category) FROM cards ORDER by category', (err, results) => {
        let cats = [];
        console.log(results)
        // TODO: adding a migration file will ensure that the results are populated
        for ( let i = 0; i < results.length; i++ ) {
            cats.push(results[i].category);
        }
        // Uncomment this to show working code
        res.json(cats);
        // The code below renders the index.ejs template
        res.render('index', {
            'cats': cats
        });
    });
});

app.get('/cards', (req, res) => {
    connection.query('SELECT id,category,question FROM cards ORDER BY category,id', (err, results) => {
        res.json(results);
    });
});
// dynamic route 
app.get('/cards/:category', (req, res) => {
    connection.query('SELECT id,category,question FROM cards WHERE category = ? ORDER BY id', [req.params.category], (err, results) => { 
        res.json(results);
    });
});

app.get('/cards/:category/:topic', (req, res) => {
    connection.query('SELECT id,category,question FROM categry WHERE topic = ? ORDER BY id', [req.params.topic], (err, results) => {
        res.json(results);
    });
});

app.post('/card', (req, res) => {
    let category = req.body.category;
    let question = req.body.question;
    let answer = req.body.answer;

    connection.query('INSERT INTO cards (category, question, answer) VALUES (?, ?, ?)', [category, question, answer], (err, results) => {
        res.redirect('/');
    });
});

app.get('/card', (req, res) => {
    connection.query('SELECT id,category,question,answer FROM cards ORDER BY RAND() LIMIT 1', (err, results) => {
        console.log(results)
        let category = results[0].category;
        let answer   = results[0].answer;
        let question = results[0].question;
        console.log(answer);
        console.log(question);
        res.render("card",{ 
            'results': results
        })
    });
});

app.get('/card/:category', (req, res) => {
    connection.query('SELECT id,category,question,answer FROM cards WHERE category = ? ORDER BY RAND() LIMIT 1', [req.params.category], (err, results) => {
        res.render("card",{ 
            'results': results
        })
    });
});

app.listen(process.env.PORT || 3000);