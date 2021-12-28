const User = require("./model");
const bcryptjs = require("bcryptjs");

var signup = async (req, res) => {
    try {
        let user = await User.findOne({username : req.body.username});   
        if(user) return res.send("Username already taken");
        user = new User;
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = bcryptjs.hashSync(req.body.password);
        await user.save();
        return res.send("User registered Succesfully");
    }
    catch (e) {
        throw new Error(`message : ${e}`);
    }
}

module.exports = signup;