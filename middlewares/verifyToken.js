const User = require("../model/index");
const jwt = require("jsonwebtoken");

var verifyToken = (req,res,next) => {
  var bearerHeader = req.headers['x-access-token'];
  var token;
  req.authenticated = false;
  if (bearerHeader){
      var bearer = bearerHeader.split(" ");
      token = bearer[1];
      jwt.verify(token, "secret", function (err, decoded){
          if (err){
              console.log(err);
              req.authenticated = false;
              req.decoded = null;
              next();
          } else {
              req.decoded = decoded;
              req.authenticated = true;
              next();
          }
      });
  }
}

module.exports = verifyToken;