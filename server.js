const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const routes = require('./routes');
const morgan = require('morgan');
const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(express.json());


// bodyparser parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: "application/*+json"}));

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/usersdb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.get('/', (req,res) => {
    res.send(`<h1>API Running on port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::::::${port}`);
});

process.on('uncaughtException', function (err) {
    console.log(err);
    logger.error('Error stack' + err.stack);
});

module.exports = app;