const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtExpiry = process.env.JWT_EXPIRY;

const Auth = {
  verify(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized Access' });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid Token' });
      }
      req.decoded = decoded;
      next();
    });
  },

  generateToken() {
    return jwt.sign({
      id: '',
      username: '',
      role: ''
    }, secret, { expiresIn: jwtExpiry });
  }
};

module.exports = Auth;
