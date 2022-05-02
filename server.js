
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require('dotenv').config();
const {

    processRoutes
} = require('./src/routes');
app.use(function (req, res, next) {
    res.contentType('application/json');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/', processRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
// const http = require('http');
// var express = require('express');
// const bodyParser = require('body-parser')
// var app = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     console.log("here");
//     //res.json({ name: "hi" });
//     res.download('g1.jpeg');
//     //res.end();
// });
// app.listen(5000);