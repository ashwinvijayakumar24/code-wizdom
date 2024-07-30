const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router');
const cron = require('node-cron');
const axios = require('axios')
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

cron.schedule('*/14 * * * *', async () => {
    console.log('restarting server');
    try {
        const response = await axios.get('https://code-wizdom.onrender.com/signup')
        console.log('Pinged backend:', response.status);
        } catch (error) {
        console.error('Error pinging backend:', error.message);
        }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

