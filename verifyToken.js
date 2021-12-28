const User = require("./model");

var verifyToken = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      res.send({ message: "No token provided!" });
      return;
    }
    var decoded = jwt.verify(token, "secret");
    console.log(decoded);
    const user = await User.findOne({ email: decoded });
    if(!user) res.send("UnAuthorised");
    console.log(user);
    return user.id;
  } catch (err) {
    return res.send({ message: err });
  }
};

module.exports = verifyToken;