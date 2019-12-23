require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const name = process.env.DB_NAME;
const webPort = process.env.WEB_PORT;

mongoose.connect(`mongodb://${host}:${port}/${name}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use('/api', require('./api/api'));

    const server = app.listen(webPort, () => {
        console.log(`Server is listening on http://localhost:${server.address().port}`);
    });
}).catch((err) => {
    throw err;
});
