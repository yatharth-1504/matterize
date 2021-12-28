var User = require('./model');

var content = async (req, res) => {
  try {
      const user = await User.findOne({id : req.body});
      return res.send(user);
  } catch (e) {
      return res.send(e);
  }
};
