var User = require('../model/index');

var createAccount = async (req, res) => {
    try {
        const user = await User.findOne({email : req.decoded});
        if(user.role !== 'ADMIN')
            return res.send("UnAuthorised");
        function autoGenPass(length) {
            var result = "";
            var characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var passWord = autoGenPass(8);
        await User.create({email : req.body.email, password : passWord, role : "EMPLOYEE"});
        //we will email this to super user
        console.log(passWord);
        return res.send("Created Super User");
    } catch (e) {
        return res.send(e);
    }
  };
  
  module.exports = createAccount;