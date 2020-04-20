const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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
  const post = req.body;
  console.log(post);
  res.status(200).json({
    message: 'post added successfully!'
  });
  //next();
});

app.get('/api/posts',(req, res, next) => {

  const posts = [
    {id: '1', title: 'First server-side posts', content: 'First post is coming from server!'},
    {id: '2', title: 'Second server-side posts', content: 'Second post is coming from server!'},
    {id: '3', title: 'Third server-side posts', content: 'Third post is coming from server!'}
  ];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
