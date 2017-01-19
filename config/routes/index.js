const users = require('./users');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ message: 'success' });
  });

  app.use('/users', users);
};
