const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router');
// require('dotenv/config');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
    
app.use(cors(corsOptions));
app.use('/', router);

mongoose.connect(process.env.DB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(console.log("MongoDB connected"))
    .catch(err =>console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

