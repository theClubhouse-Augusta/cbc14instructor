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

// GET /categories - list all categories in the system
// GET /card - get a random card
// GET /card/:category - get a random card from the category
// GET /cards/ - get a list of all cards
// GET /cards/:category - get a list of all cards in :category
// POST /card - create a new card.

app.get('/', function(req, res) {

	// fetch our current todos
	connection.query('SELECT distinct(category) FROM cards ORDER by category', function(err, results) {
		console.log(results);

		res.render('index', {
			categoryList: results
		});
	});
	// send those to our template
	
});


app.listen(process.env.PORT || 3000);