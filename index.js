var express = require('express');
var cors = require('cors');
var bodyparser = require("body-parser");
var corsOptions = {
    origin: "http://localhost:8000"
};
const app = express();
// cors is for cross origin resource sharing
app.use(cors(corsOptions));
//body parser is for acccsesing req.body object
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

const signup = require('./signup');
const signin = require('./signin');
const verifyToken = require('./verifyToken');

app.use(function (req, res) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mtz_db", {
    usenewUrlParser: true,  
    useUnifiedTopology: true
}).then(() => {
    console.log("Suceesfully connected to MongoDb.")
}).catch(err => {
    console.log("Connection Error", err);
    process.exit();
});

app.post("/api/signup", signup);
app.get("/api/signin", signin);
app.get("/api/verifyToken", verifyToken);

app.listen(8000, (err) => {
    if (err) console.log("failed");
    console.log("Listening on port 8000");
});