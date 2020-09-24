const express = require('express');
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose")
const app = express();
/*const bodyParser = require('body-parser')*/

mongoose.connect("mongodb://localhost/user-db",{ useUnifiedTopology: true, origin: "localhost:3000" })
app.use(express.json());
app.use(express.urlencoded())
app.use('/api', require('./api'));


app.listen(PORT, () => {
    console.log('Сервр запущен')
});
