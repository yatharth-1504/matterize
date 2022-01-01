var User = require('../model/index');
var bcryptjs = require('bcryptjs');

var updateSuperUser = async (req, res) => {
    try {
        const user = await User.findOne({email : req.decoded});
        if(user.role !== 'EMPLOYEE')
            return res.send("UnAuthorised");
        user.username = req.body.username;
        user.password = bcryptjs.hashSync(req.body.password, 10);
        await user.save();
        return res.send("User Updated Suceesfully");
    } catch (e) {
        return res.send(e);
    }
  };
  
  module.exports = updateSuperUser;