var User = require('../model/index');

var userProfile = async (req, res) => {
    try {
        const user = await User.findOne({email : req.decoded});
        if(user.role !== 'ADMIN' || user.role !== 'EMPLOYEE')
            return res.send("UnAuthorised");
        const appUser = await User.findById({id  : req.params.id});
        return res.send(appUser);
    } catch (e) {
        return res.send(e);
    }
  };
  
  module.exports = userProfile;