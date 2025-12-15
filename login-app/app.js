const express = require('express');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const session = require("express-session");

const app = express();


// middleware :P

app.use(express.urlencoded({extended : true}));
app.use(session({
  secret : 'secretkey',
  resave : false,
  saveUninitialized : true
}));

app.set('view engine', 'ejs');

// mongo DB connection


mongoose.connect("mongodb://localhost:27017/loginApp").then(() => {
  console.log("connected to db")
}).catch((err) => {
  console.log("error connecting to db", err);
})



// Routes here!


// register route

app.get('/register', function(req, res) {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    email, password : hashed
  })

  res.redirect('/login');
})


// login route


app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if(!user) {
    return res.send("user not found");
  }
  const match = await bcrypt.compare(password, user.password);
  if(!match) {
    return res.send("incorrect password");
  }


  req.session.userId = user._id;
  res.redirect('/dashboard');
})


// dashboard route


app.get('/dashboard', async (req, res) => {
  if(!req.session.userId) {
    return res.redirect('/login');
  }

  res.render("dashboard");
})


// logout route

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})