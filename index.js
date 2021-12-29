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

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/matterize_db", {
    usenewUrlParser: true,  
    useUnifiedTopology: true
}).then(() => {
    console.log("Suceesfully connected to MongoDb.")
}).catch(err => {
    console.log("Connection Error", err);
    process.exit();
});

require("./routes/index")(app);

app.listen(8000, (err) => {
    if (err) console.log("failed");
    console.log("Listening on port 8000");
});