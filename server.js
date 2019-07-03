const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const keys = require("./keys");
const Mentor = require("./models/Mentor");
const mongoose = require('mongoose');
const api = require('./routes/api');


mongoose.connect(keys.mongoDBUrl, {useNewUrlParser: true}).then(()=>
console.log("DB connected"));


app.use(bodyParser.json());

app.use('/', express.static("public"));
app.get('/', (req, res) => res.send('Hello World!'))

app.use("/api", api);







app.listen(port, () => console.log(`Example app listening on port ${port}!`))

