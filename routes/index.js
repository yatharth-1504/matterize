const signup = require("../signin_signup/signup");
const signin = require("../signin_signup/signin");
const verifyToken = require("../middlewares/verifyToken");
const content = require("../controllers/content");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next(); 
    });
    app.post("/api/signup", signup);
    app.get("/api/signin", signin);
    app.get("/api/verifyToken/content", verifyToken, content);
};
