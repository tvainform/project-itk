const express = require('express');
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose")
const app = express();
const bodyParser = require('body-parser')

mongoose.connect("mongodb://localhost/testdb",{ useUnifiedTopology: true })
app.use(bodyParser.json());
app.use('/api', require('./api'));


app.listen(PORT, () => {
    console.log('Сервр запущен')
});
