const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index", {
    });
});

app.listen(1234, function () {
  console.log('Example app listening on port 1234!')
});
