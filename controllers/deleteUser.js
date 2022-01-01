var User = require('../model/index');

var deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({email : req.decoded});
        if(user.role !== 'ADMIN')
            return res.send("UnAuthorised");
        await User.findByIdAndDelete({id  : req.params.id});
        return res.send("User Deleted");
    } catch (e) {
        return res.send(e);
    }
  };
  
  module.exports = deleteUser;