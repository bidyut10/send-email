const express = require('express');
const app = express();
const routes = require('./routes/routes');
const cors = require("cors");
require("dotenv").config();
const axios = require('axios');
app.use(cors());
app.use(cors({
    origin: 'https://aquamarine-raindrop-7a1d70.netlify.app/'
}));
const db =require('./database/db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Is running On http://localhost:${PORT}`);
});