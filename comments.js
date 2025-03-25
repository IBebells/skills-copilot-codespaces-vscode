//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path'); //path module
const commentsPath = path.join(__dirname, 'comments.json'); //comments.json file path
const comments = require('./comments.json'); //comments.json file
const cors = require('cors'); //cors module