const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Request-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Method",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
app.use('/api/posts',(req, res, next) => {

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
