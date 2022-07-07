const express = require('express');
require('dotenv').config();
const dogRouter = require('./routes/dog.routes');
const catRouter = require('./routes/dog.routes');

const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://sdienem:Mbayediene4@cluster0.nwfa0.mongodb.net/test';
const port = 3000;


const app = express();
app.use(express.json());
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'),);
database.on('open', () => {
    console.log('connected to database');
})
app.get('/', (req, res) => {
   res.send('Hello World');
});

app.use('/api/dogs', dogRouter);

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});