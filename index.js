import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index', { header2:"Enter your name here 👇" });
});

app.post("/submit", (req, res) => {
  var a = (req.body.fName).length;
  var b = (req.body.lName).length;
  let c = a + b;
  res.render('index', { header2:`There are ${c} letters in your name` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
