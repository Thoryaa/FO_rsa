const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.static('./assests'));
app.set('view engine', 'ejs')
app.listen(3000, () => console.log('connect on server ^_^'));
app.get('/', (req, res) => { res.render('index') })