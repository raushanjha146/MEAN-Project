const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

//cuPCKh5DF0FirKfZ
mongoose.connect("mongodb+srv://raushan:cuPCKh5DF0FirKfZ@cluster0-eggqt.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to mongodb database"); 
  })
  .catch(() => {
    console.log("Connection error!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
  //res.setHeader("Access-Control-Allow-Headers","*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  //res.setHeader('Access-Control-Allow-Credentials','true');
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save();
  res.status(200).json({
    message: 'post added successfully!'
  });
  //next();
});

app.get('/api/posts',(req, res, next) => {

  const posts = [
    {id: '1', title: 'First server-side posts changes', content: 'First post is coming from server!'},
    {id: '2', title: 'Second server-side posts', content: 'Second post is coming from server!'},
    {id: '3', title: 'Third server-side posts', content: 'Third post is coming from server!'}
  ];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
