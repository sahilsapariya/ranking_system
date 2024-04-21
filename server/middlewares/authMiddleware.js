const JWT = require("jsonwebtoken");

const protect = async (req, res, next) => {
  var token;
  try {
    if (req.headers.authorization) {
      token = req.headers.authorization;
      console.log(token);

      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      req.body._id = decoded.id;
      next();
    } else {
      res.status(400).json({
        error: "authorization failed",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = { protect };
