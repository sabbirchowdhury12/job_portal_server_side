const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const fresherJob = require('./data/fresherjob.json');
const experiencedJob = require('./data/experiencedjob.json');
const ITCompanies = require('./data/ITcompany.json');

app.get('/fresherjob', async (req, res) => {
    res.send(fresherJob);
});

app.get('/experiencedjob', async (req, res) => {
    res.send(experiencedJob);
});
app.get('/ITCompany', async (req, res) => {
    res.send(ITCompanies);
});

app.get('/', async (req, res) => {
    res.send('hellow world');
});
app.listen(port, () => {
    console.log('code is running');
});