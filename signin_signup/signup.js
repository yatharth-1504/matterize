const User = require("../model/index");
const bcryptjs = require("bcryptjs");

var signup = async (req, res) => {
  try {
    const admins = await User.find({ role : "ADMIN" });
    if (!admins) {
      var passWord = bcryptjs.hashSync("123456", 10);
      await User.create({
        username: "SKV",
        email: "matterize@gmail.com",
        password: passWord,
        role: "ADMIN",
      });
    }
    let user = await User.findOne({ username: req.body.username });
    if (user) return res.send("Username Already taken");
    var password = bcryptjs.hashSync(req.body.password, 10);
    const emailExpresion =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailExpresion.test(req.body.email) === false) return res.send("Invalid Email");
    await User.create({
      username: req.body.username,
      password: password,
      email: req.body.email
    });
    return res.send("User registered Succesfully");
  } catch (e) {
    return res.send({ message: e });
  }
};

module.exports = signup;
