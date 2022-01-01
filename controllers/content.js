var User = require('../model/index');

var content = async (req, res) => {
  try {
      const user = await User.findOne({email : req.decoded});
      return res.send(user);
  } catch (e) {
      return res.send(e);
  }
};

module.exports = content;