const jwt = require("jwt-then");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; //bearer token

  const payload = await jwt.verify(token, process.env.SECRET); //veriy token
  req.payload = payload;
};
