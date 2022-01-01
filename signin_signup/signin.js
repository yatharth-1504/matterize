var bcryptjs = require("bcryptjs");
var jwt = require("jsonwebtoken");
var User = require("../model/index");

var signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send("User not found SignUP first");
    }
    var passwordIsvalid = bcryptjs.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsvalid) {
      return res.send({ accessToken: null, message: "InvalidPassword!" });
    }
    var token = jwt.sign(user.email, "secret");
    return res.send({ accessToken: token });
  } catch (e) {
    return res.send(e);
  }
};

module.exports = signin;
