const path = require("node:path");
const express = require('express');
const {getUsernames, createUsernameGet, createUsernamePost} = require("./controller");
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', getUsernames);

app.get("/new", createUsernameGet);

app.post("/new", createUsernamePost);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})