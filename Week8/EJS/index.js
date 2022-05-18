const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('home') // will render the home.ejs file
})
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
