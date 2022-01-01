var User = require('../model/index');

var users = async (req, res) => {
    try {
        const user = await User.findOne({email : req.decoded});
        if(user.role !== 'ADMIN' || user.role !== 'EMPLOYEE')
            return res.send("UnAuthorised");
        const allusers = await User.find({role : "USER"});
        return res.send(allusers);
    } catch (e) {
        return res.send(e);
    }
  };
  
  module.exports = users;