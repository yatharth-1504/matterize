const User = require("../model/index");
const bcryptjs = require("bcryptjs");

var signup = async (req, res) => {
    try {
        let user = await User.findOne({username : req.body.username});
        if(user) return res.send("Username Already taken");
        user = new User;
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = bcryptjs.hashSync(req.body.password);
        await user.save();
        return res.send("User registered Succesfully");
    }
    catch (e) {
        return res.send({message: e});
    }
}

module.exports = signup;