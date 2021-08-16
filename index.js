const express = require('express');
const bodyParser = require('body-parser')

const port = 3000;
const app = express();

const clientRouter = require('./routes/routes');
const functRouter = require('./routes/funct')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/clients", clientRouter);
app.use("/funct", functRouter);


app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
});