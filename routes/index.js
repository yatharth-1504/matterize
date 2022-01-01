const signup = require("../signin_signup/signup");
const signin = require("../signin_signup/signin");
const verifyToken = require("../middlewares/verifyToken");
const content = require("../controllers/content");
const users = require("../controllers/users");
const userProfile = require("../controllers/user");
const deleteUser = require("../controllers/deleteUser");
const createAccount = require("../controllers/createSuperUser");
const updateSuperUser = require("../controllers/update");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next(); 
    });
    //common routes
    app.get("/api/signin", signin);
    app.post("/api/signup", signup);
    
    //user routes
    app.get("/api/verifyToken/content", verifyToken, content);

    //super user routes
    app.get("/api/verifyToken/users", verifyToken, users);
    app.get("/api/verifyToken/userProfile", verifyToken, userProfile);
    app.post("/api/verifyToken/createAccount", verifyToken, createAccount);
    app.post("/api/verifyToken/deleteUser", verifyToken, deleteUser);
    app.post("/api/verifyToken/updateSuperUser", verifyToken, updateSuperUser);
};
