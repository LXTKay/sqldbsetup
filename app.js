const path = require("node:path");
const express = require('express')
const app = express()
const port = 3000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  console.log("usernames will be logged here - wip");
  res.render("index", {message: "Hello world"});
})

app.get("/new", (req, res) =>{
  res.render("form", {});
})

app.post("/new", (req, res)=>{
  console.log("username to be saved: ", req.body.username);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})